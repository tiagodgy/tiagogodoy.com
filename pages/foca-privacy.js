import React from 'react'
import Head from 'next/head'
import Base from '../layouts/Base'

export async function getStaticProps() {
  const meta = {
    title: 'Foca - Privacy Policy',
    description:
      'Thank you for using our browser extension! Your privacy and trust are important to us. This Privacy Policy is intended to help you understand how we collect, use, and safeguard the information generated or provided while using our extension.',
    tagline: 'Foca - Privacy Policy',
    primaryColor: 'cyan',
    secondaryColor: 'green',
  }

  return { props: meta }
}

function FocaPrivacy(props) {
  const { title, description } = props

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://tiagogodoy.com/foca-privacy" property="og:url" />
      </Head>
      <strong>
        Thank you for using our browser extension! Your privacy and trust are
        important to us. This Privacy Policy is intended to help you understand
        how we collect, use, and safeguard the information generated or provided
        while using our extension.
      </strong>
      <h3>Information We Do Not Collect</h3>
      <p>
        Our browser extension operates entirely within your browser's memory. We
        do not collect any personal information, browsing history, or any data
        from your device. We do not track your online activities or behavior in
        any way. We have designed our extension to function without the need for
        data collection, ensuring your privacy is fully respected.
      </p>
      <h3>Information Automatically Collected</h3>
      <p>
        As our extension does not collect any data, there is no information
        automatically collected about your usage or interactions.
      </p>
      <h3>Data Storage</h3>
      <p>
        Since our extension does not collect any data, there is no storage of
        any user information on our servers.
      </p>
      <h3>Third-Party Services</h3>
      <p>
        Our extension does not integrate with any third-party services that
        would require the sharing of your data.
      </p>
      <h3>Changes to This Privacy Policy</h3>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time
        without prior notice. Any changes to the policy will be reflected on
        this page.
      </p>
      <h3>Contact Us</h3>
      <p>
        If you have any questions or concerns about our Privacy Policy or our
        practices regarding your personal information, please contact using the
        email tool located in the end of the page.
      </p>
      <strong>
        By using our extension, you agree to the terms outlined in this Privacy
        Policy.
      </strong>
      <p>Last updated: 01/31/2024</p>
    </>
  )
}

FocaPrivacy.Layout = Base

export default FocaPrivacy
