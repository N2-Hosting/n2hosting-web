import Head from 'next/head';
import { useState } from 'react';
import ContactUsForm from '../components/Form/ContactUsForm';
import PageHeader from '../components/Header/PageHeader';
import HeroUnitHeader from '../components/HeroUnit/Header';
import MetaTags from '../components/MetaTag/MetaTags';

export default function ContactUsPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState({});
  const [errors, setErrors] = useState([]);

  async function handleSendFormToServer(values, token) {
    setSuccessMessage({});
    setIsSuccess(false);
    setErrors([]);

    try {
      const ip = await fetch('https://api.db-ip.com/v2/free/self').then(
        (response) => response.json()
      );

      const payload = {
        data: {
          ...values,
          ...{
            ip_address: ip?.ipAddress
          }
        }
      };

      const response = await fetch(`/api/enquiries`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSuccessMessage({
          title: 'Thank you for getting in touch! ',
          body: 'We appreciate you contacting us. One of our colleagues will get back in touch with you soon! Have a great day!'
        });
        setIsSuccess(true);
        values.name = '';
        values.email = '';
        values.message = '';
        return;
      }

      const data = await response.json();
      setErrors(data?.error?.details?.errors);
    } catch (e) {
      setErrors([
        {
          message: 'Server Error! Please try again!'
        }
      ]);
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us - N2 Hosting</title>
        <MetaTags
          title="N2 Hosting - Get in touch with us"
          description="We'd love to hear from you! Contact us with any questions or feedback. Need a FREE domain? Chat with us!"
          image="https://doc-08-64-docs.googleusercontent.com/docs/securesc/ha0ro937gcuc7l7deffksulhg5h7mbp1/rjjbsk93mg728qpjuq9jhsoolvdtro9a/1660048575000/10076768738487963047/*/1-SfygCWsFXUadok-EmhNZClHN1nrlHpU?uuid=f60582e7-d5b2-4176-9986-e26af6e989a9"
        />
      </Head>
      <HeroUnitHeader />
      <PageHeader
        title={() => (
          <span>
            <span className="color:pink-50">Contact</span> Us
          </span>
        )}
      />
      <section className="px:20 py:30 py:80@md ">
        <div className="w:2xs@md mx:auto">
          <p className="text:center mb:30 f:18 f:24@md">
            We love to hear from you.
          </p>
          {Object.keys(successMessage).length >= 1 && (
            <>
              <div className={`p:15 mb:30 r:4 f:14 bg:green-88 color:green-40`}>
                <h3 className='mb:10'>{successMessage.title}</h3>
                <p>{successMessage.body}</p>
              </div>
            </>
          )}

          {errors && errors.length >= 1 && (
            <>
              <div
                className={`p:15 mb:30 r:4 f:14 bg:orange-80 color:orange-40`}
              >
                {errors.map((error, index) => (
                  <span key={index} className="block">
                    {error.message}.
                  </span>
                ))}
              </div>
            </>
          )}

          <ContactUsForm
            onSubmit={async (values, { setSubmitting }, recaptchaRef) => {
              const token = recaptchaRef.current.getValue();

              if (!token) {
                setErrors([
                  {
                    message: 'Invalid captcha!'
                  }
                ]);
                setSubmitting(false);
                return;
              }

              await handleSendFormToServer(values, token);
              setSubmitting(false);
              recaptchaRef.current?.reset();
            }}
          />
        </div>
      </section>
    </>
  );
}
