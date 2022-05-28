import React from "react";
import Link from "next/link";
import Head from "next/head";
import Slide from "react-reveal/Slide";

function Aboutus() {
  return (
    <>
      <Head>
        <title>About Golden Fern Resort</title>
        <meta property="og:title" content="About Golden Fern Resort" />
        <meta
          property="og:description"
          content="Golden Fern Resort Shimla ideally located on Shimla Kalka Highway at Kachi Ghati, just 4 km away from the city Centre The Mall Road."
        />
      </Head>

      <section className="common_page_header top_banner about_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">About Golden Fern</h1>
              <p className="about-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scrollspy-example common_padding w-100">

        <div className="about-section-col spy_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 wedding_services_right">
                <div className="wedding_services_image who-we-are"></div>
              </div>
              <Slide right>
                <div className="col-md-6 col-sm-12 about_hotel_text">
                  <h3 className="common_title">
                    <span className="golden_color">Who We</span> Are
                  </h3>
                  <p>
                    Golden Fern Resort Shimla ideally located on Shimla Kalka
                    Highway at Kachi Ghati, just 4 km away from the city Centre
                    The Mall Road. With 50 Rooms and Suites, the Resort has a
                    big Banquet hall and conference Hall to host the big events,
                    marriages, and conferences in Shimla.
                  </p>
                  <p>
                    All rooms and suites are elegantly appointed and reflect
                    unpretentious luxury and stylish class with wooden flooring,
                    42 Inches LED, modern furnishing, Mini Bar, Lockers, Private
                    sit out. Al the rooms are valley facing from where you can
                    absorb the Alpine splendor from your private balcony.
                  </p>
                </div>
              </Slide>
            </div>
          </div>
        </div>

        <div className="about-section-col spy_section">
          <div className="container">
            <div className="row justify-center">
              <Slide left>
                <div className="col-md-6 col-sm-12 about_hotel_text">
                  <h3 className="common_title">
                    <span className="golden_color">About Shimla</span> Hill
                    Station
                  </h3>
                  <p>
                    Shimla is the capital of the northern Indian state of
                    Himachal Pradesh, in the Himalayan foothills. Once the
                    summer capital of British India, it remains the terminus of
                    the narrow-gauge Kalka-Shimla Railway, completed in 1903.
                    It’s also known for the handicraft shops that line The Mall,
                    a pedestrian avenue.
                  </p>
                  <br></br>
                  <p>
                    Come for a holiday and get the opportunity to spend quality
                    time close to Mother Nature and make your trip most
                    relaxing. What more you can expect from your holiday trip.
                    Shimla is such a trip, especially for those who have a
                    passion for exploring the natural beauty and serene
                    environment, nothing can be compared with such amazing
                    places.
                  </p>
                </div>
              </Slide>
              {/* <Slide right> */}
              <div className="col-md-6 col-sm-12 wedding_services_right">
                <div className="about_hotel_image shimla-hill-station"></div>
              </div>
              {/* </Slide> */}
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Aboutus;
