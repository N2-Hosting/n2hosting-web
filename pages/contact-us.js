import Head from 'next/head';
import { useState } from 'react';
import ContactUsForm from '../components/Form/ContactUsForm';
import PageHeader from '../components/Header/PageHeader';
import HeroUnitHeader from '../components/HeroUnit/Header';

export default function ContactUsPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState([]);

  async function handleSendFormToServer(values) {
    setSuccessMessage('');
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

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/enquiries`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        }
      );

      if (response.ok) {
        setSuccessMessage('Form submitted! Thank You!');
        setIsSuccess(true);
        values.name = '';
        values.email = '';
        values.message = '';
        return;
      }

      const data = await response.json();
      setErrors(data?.error?.details?.errors);
    } catch (e) {
      setSuccessMessage('Server Error! Please try again!.');
    }
  }

  return (
    <>
      <Head>
        <title>Contact Us - N2 Hosting</title>
        <meta
          name="description"
          content="We love to hear from, get in touch now."
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

          {successMessage && (
            <>
              <div className={`p:15 mb:30 r:4 f:14 bg:green-88 color:green-40`}>
                {successMessage}
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
            onSubmit={(values, { setSubmitting }) => {
              handleSendFormToServer(values);
              setSubmitting(false);
            }}
          />
        </div>
      </section>
    </>
  );
}
