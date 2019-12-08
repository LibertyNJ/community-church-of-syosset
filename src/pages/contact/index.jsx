import React from 'react';

import Layout from '../../components/Layout';
import SEO from '../../components/SEO';

export default function ContactPage({ ...restProps }) {
  return (
    <>
      <SEO title="Contact" />
      <Layout {...restProps}>
        <h1>Contact</h1>
        <form
          action="/contact/success"
          data-netlify="true"
          id="contact-form"
          method="POST"
          name="contact"
        >
          <input
            form="contact-form"
            name="form-name"
            type="hidden"
            value="contact"
          />
          <div>
            <label htmlFor="name">Name</label>
            <input
              form="contact-form"
              id="name"
              name="name"
              required
              type="text"
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              form="contact-form"
              id="email"
              name="email"
              required
              type="email"
            />
          </div>
          <div>
            <label htmlFor="phone">Phone</label>
            <input form="contact-form" id="phone" name="phone" type="tel" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              form="contact-form"
              id="message"
              name="message"
              required
            />
          </div>
          <button form="contact-form" type="submit">
            Submit
          </button>
        </form>
      </Layout>
    </>
  );
}
