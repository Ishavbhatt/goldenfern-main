import Head from "next/head";
import React from "react";

function Cancellationpolicy() {
  return (
    <>
      <Head>
        <title>Cancellation & Refund Policy | Golden Fern Resort</title>
        <meta
          property="og:title"
          content="Cancellation & Refund Policy | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="For reservation of a Service, the Special Conditions specify the conditions to cancel or modify the reservation. Refunds for qualifying | Golden Fern Resort"
        />
      </Head>

      <section className="common_page_header top_banner privacy_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Cancellation & Refund Policy</h1>
              <p className="about-subtitle">
              For each reservation of a Service, the Special Conditions
                specify the conditions to cancel and/or modify the reservation.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="attraction_section common_page_header">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 common_page_header_title">
              <p>
                Customers can call customer service to request a refund. Refunds
                for qualifying returns per the return policies described above
                will be issued when returned merchandise is received. Defective
                items are eligible for exchange only for the same item.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 privacy_column">
              <ul className="privacy_ul ">
                <li>
                  Early check-in or late check-out is subject to availability
                  and may be chargeable by the hotel directly.
                </li>
                <li>Check-in time is 2 PM. Check-out time is 12:00 PM.</li>
                <li>
                  Reservation must be canceled 15 days prior to the planned date
                  of arrival. One night&quote;s stay will be levied for
                  cancellations received up to 8 days prior to arrival.
                </li>
                <li>
                  Full stay will be levied for cancellations received within 7
                  days prior to arrival.
                </li>
                <li>
                  It is mandatory for guests to present valid photo
                  identification upon check-in.
                </li>
                <li>The Credit Card Holder must be one of the travelers.</li>
                <li>
                  We reserve the right to cancel or modify reservations where it
                  appears that a customer has engaged in the fraudulent or
                  inappropriate activity or under other circumstances where it
                  appears that the reservations contain or resulted from a
                  mistake or error.
                </li>
                <li>
                  To make modifications or cancellations please log in to the
                  &quote;Cancel/Reschedule Booking&quote; section on the booking
                  page.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cancellationpolicy;
