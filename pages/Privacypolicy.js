import React from "react";
import Head from "next/head";

function Privacypolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | Golden Fern Resort</title>
        <meta
          property="og:title"
          content="Privacy Policy | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="Golden Fern Resort respects your privacy and is committed to protecting the privacy, confidentiality, and security of the personal data | Golden Fern Resort"
        />
      </Head>

      <section className="common_page_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 common_page_header_title">
              <h2 className="common_title padding-t-20">Privacy Policy</h2>
              <p>
                This Privacy policy clarifies our personal data practices and
                the decisions you can make about how your information is
                utilized.
              </p>
              <p>
                Golden Fern Resort respects your privacy and is committed to
                protecting the privacy, confidentiality, and security of the
                personal data you provide to us or that we collect about you
                when you use our websites, social media pages we control include
                a link to this Privacy Policy. You may be asked to consent to
                the terms of this Privacy Policy when making a reservation,
                registering for events, or otherwise corresponding with us via
                the Site.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 privacy_column">
              <h3 className="padding-t-20">Personal Information You Provide to us:</h3>
              <p>
                When using the site of Golden Fern Resort, you may be asked to
                provide certain information about yourself when you book a
                reservation such as:
              </p>
              <ul className="privacy_ul">
                <li>Name</li>
                <li>Mobile Number</li>
                <li>Email address</li>
                <li>
                  Information that you provide for specialized services to you
                  or fulfill special requests, such as accommodating health or
                  dietary conditions, but we do not collect sensitive
                  information about you, such as health information, except as
                  reasonably needed for us to provide services to you.
                </li>
              </ul>
            </div>

            <div className="col-md-12 privacy_column">
              <h3 className="padding-t-20">How we use your information?</h3>
              <p>
                We may use Personal Information you submit and non-Personal
                Information we automatically collect for the purposes identified
                in this Privacy Policy for our business use and the legal bases,
                including, for example:
              </p>
              <ul className="privacy_ul">
                <li>Processing, fulfilling, and recording reservations.</li>
                <li>
                  Contacting you for confirmation or customer service after
                  reservations.
                </li>
                <li>
                  Communicating special offers, competitions, and featured items
                  if you choose to receive such notices.
                </li>
                <li>
                  Responding to your inquiries, complaints, and other
                  communications.
                </li>
                <li>
                  Providing for the safety and security of our guests and staff
                  and meeting our legal and regulatory compliance requirement
                </li>
              </ul>
            </div>

            <div className="col-md-12 privacy_column">
              <p>
                We do not distribute your personal information to any third
                party.
              </p>
              <p>
                Golden Fern Resort includes not only your email address.”{" "}
                <strong>but any personal information”</strong> you input during
                your use of the site.
              </p>
            </div>

            <div className="col-md-12 privacy_column">
              <p>
                We reserve the right to change this policy in the future, but
                not without giving notice and providing individuals with the
                opportunity to opt-out.
              </p>
            </div>

            <div className="col-md-12 privacy_column">
              <p>
                ” We do not track or monitor any one individual” activity on the
                website
              </p>
            </div>

            <div className="col-md-12 privacy_column text-center padding-t-20">
              <p>
                <strong>
                  Any changes to this Terms & Conditions will become effective
                  upon posting of the revised Terms & Conditions on the Site.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Privacypolicy;
