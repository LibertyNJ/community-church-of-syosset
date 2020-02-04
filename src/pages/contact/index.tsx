import React from 'react';
import styled from 'styled-components';

import Button from '../../components/Button';
import FormControl from '../../components/FormControl';
import Layout from '../../components/Layout';
import Lead from '../../components/Lead';
import SEO from '../../components/SEO';
import { baseline } from '../../style';

const Container = styled.div`
  margin: 0 auto;
  max-width: 33em;
`;

const StyledFormControl = styled(FormControl)`
  margin-bottom: calc(6 * ${baseline});
`;

const StyledButton = styled(Button)`
  display: block;
  margin-bottom: calc(6 * ${baseline});
  width: 100%;
`;

const ContactPage: React.FC = () => (
  <>
    <SEO title="Contact" />
    <Layout>
      <h1>Contact</h1>
      <Container>
        <Lead>We want to hear from you.</Lead>
        <p>
          Have a question or want to know more? Fill out the form below to let
          us know what you think.
        </p>
        <form
          action="/contact/success"
          data-netlify="true"
          id="contact-form"
          method="POST"
          name="contact"
        >
          <input name="form-name" type="hidden" value="contact" />
          <StyledFormControl label="Name" name="name" required type="text" />
          <StyledFormControl label="Email" name="email" required type="email" />
          <StyledFormControl
            label="Phone"
            name="phone"
            pattern="^((\([0-9]{3}\))|([0-9]{3}-?))[2-9][0-9]{2}-?[0-9]{4}$"
            type="tel"
          />
          <StyledFormControl
            label="Message"
            name="message"
            required
            type="textarea"
          />
          <StyledButton type="submit">Submit</StyledButton>
        </form>
      </Container>
    </Layout>
  </>
);

export default ContactPage;
