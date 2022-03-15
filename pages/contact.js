import { Fragment } from 'react';
import Head from 'next/head';
import ContactForm from "../componets/contact/contact-form";


export default function ContactPage() {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Contact and send me a message!' />
      </Head>
    <ContactForm />
    </Fragment>
  )
}
