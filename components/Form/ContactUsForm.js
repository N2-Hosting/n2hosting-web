import { Formik, Form, Field, ErrorMessage } from 'formik';
import { createRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import * as Yup from 'yup';
import LoadingIcon from '../Icons/Loading';

const ContactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(100, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required')
});

export default function ContactUsForm({ onSubmit }) {
  const recaptchaRef = createRef();

  function onChange() {}

  return (
    <Formik
      initialValues={{ name: '', email: '', message: '' }}
      validationSchema={ContactUsSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        onSubmit(values, { setSubmitting }, { ...recaptchaRef });
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex:col mb:20>div" noValidate>
          <div>
            <Field
              name="name"
              placeholder="Your Name"
              className="bg:fade-20 color:fade-80 p:15 appearance:none r:6 w:full outline:1|solid|fade-34 outline:pink-50:focus"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="f:14 mt:8 inline-block color:red-54"
            />
          </div>
          <div>
            <Field
              type="email"
              name="email"
              placeholder="Your Email Address"
              className="bg:fade-20 color:fade-80 p:15 appearance:none r:6 w:full outline:1|solid|fade-34 outline:pink-50:focus"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="f:14 mt:8 color:fade-80 inline-block color:red-54"
            />
          </div>
          <div>
            <Field
              as="textarea"
              name="message"
              placeholder="Your Message"
              className="bg:fade-20 color:fade-80 p:15 appearance:none r:6 w:full outline:1|solid|fade-34 outline:pink-50:focus"
              rows="6"
            />
          </div>
          <div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
              onChange={onChange}
            />
          </div>
          <div className="mt:15">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`block h:50 w:full rounded  p:15 color:white ${
                isSubmitting ? 'bg:blue-60' : 'bg:blue-50 bg:blue-40:hover'
              }`}
            >
              {isSubmitting ? (
                <LoadingIcon className="w:60 h:60 mx:auto mt:-22 mb:-22 rel left:30" />
              ) : (
                'Submit'
              )}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
