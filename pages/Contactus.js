import React from "react";
import Head from "next/head";
import Link from "next/link";
function Contactus() {
  return (
    <>
      <Head>
        <title>Contact For Shimla TraveL Enquiry | Golden Fern Resort</title>
        <meta
          property="og:title"
          content="Golden&quote;s Photo Gallery | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="For any information related to bookings, offers, travel enquiries or for requesting a catalogue, we are here to help you in every | Golden Fern Resort"
        />
      </Head>

      <section className="common_page_header top_banner contact-page-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Contact Us</h1>
              <p className="contact-subtitle">
                At Golden Fern we like to answer all your questions.
                <br /> Find the contacts you need.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="common_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 contact_left">
              <div className="footer_address_right_inner">
                <div>
                  <h2 className="cont-head-col">ADDRESS</h2>
                  <p>
                    Golden Fern Resort - Taradevi Rd, Bagh, Shimla, Himachal
                    Pradesh 171004
                  </p>
                </div>
                <div>
                  <h2 className="cont-head-col">PHONE NUMBER</h2>
                  <p>
                    <a href="tel:9805084000">+91 - 98050 84000</a>
                  </p>
                </div>
                <div>
                  <h2 className="cont-head-col">RESERVATION</h2>
                  <p>
                    <a href="mailto:reservations@goldenfernresort.com">
                      reservations@goldenfernresort.com
                    </a>
                  </p>
                </div>
                <a
                  href="https://www.google.com/maps/dir//Golden+Fern+Resort,+Taradevi+Rd,+Bagh,+Shimla,+Himachal+Pradesh+171004/@31.0891678,77.1405961,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3905796a89448473:0xed76ee25a9bdb157!2m2!1d77.1405961!2d31.0891678"
                  className=" common_btn"
                >
                  GET DIRECTIONS
                </a>
              </div>
            </div>

            <div className="col-md-8 col-sm-12 contact_right">
              <Link
                className="pointer"
                target="_blank"
                href="https://www.google.com/maps/dir//Golden+Fern+Resort,+Taradevi+Rd,+Bagh,+Shimla,+Himachal+Pradesh+171004/@31.0891678,77.1405961,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3905796a89448473:0xed76ee25a9bdb157!2m2!1d77.1405961!2d31.0891678"
              >
                <a>
                  <img src="/map-image.png" alt="" />
                </a>
              </Link>

              {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13666.95865605713!2d77.1405961!3d31.0891678!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xed76ee25a9bdb157!2sGolden%20Fern%20Resort!5e0!3m2!1sen!2sin!4v1638428151450!5m2!1sen!2sin"
                width=""
                height=""
                allowFullScreen=""
                loading="lazy"
              ></iframe> */}
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section contact_form_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-sm-12 contact_form">
              <form className="row">
                <h3 className="text-center w-100">Talk To Us</h3>
                <p className="text-center w-100">
                  Send us your questions. We promise to answer soon. Thank you!
                </p>

                <div className="col-md-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6 col-sm-12 form-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-md-6 col-sm-12 form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone"
                  />
                </div>
                <div className="col-md-12 col-sm-12 form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="col-md-12 col-sm-12 form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I have read the{" "}
                    <a className="a-span" href="/Privacypolicy">
                      {" "}
                      Golden Fern Resort
                    </a>{" "}
                    policies and I accept the use and treatment of my personal
                    data.
                  </label>
                </div>
                <button type="submit" className="common_btn">
                  SEND REQUEST
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contactus;
