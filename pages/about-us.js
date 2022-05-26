import React from "react";
import Link from "next/link";
import Head from "next/head";
import Slide from 'react-reveal/Slide';

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
            <Slide left>
              <div className="col-md-6 col-sm-12 wedding_services_right">
                <div className="wedding_services_image who-we-are"></div>
              </div>
            </Slide>
            <Slide right>
              <div className="col-md-6 col-sm-12 about_hotel_text">
                <h3 className="common_title">
                  <span className="golden_color">Who We</span> Are
                </h3>
                <p>
                  Designed to the highest specifications and situated on all
                  floors, with a private balcony and city view the executive
                  rooms are spacious with all modern amenities and furnishing to
                  meet the desired level of the satisfaction of the esteemed
                  guests at Golden Fern Resort Shimla.
                </p>
              </div>
              </Slide>
            </div>
          </div>
        </div>
        <div className="about-section-col">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p className="about-center-text">
                  Golden Fern Resort Shimla ideally located on Shimla Kalka
                  Highway at Kachi Ghati, just 4 km away from the city Centre
                  The Mall Road. With 50 Rooms and Suites, the Resort has a big
                  Banquet hall and conference Hall to host the big events,
                  marriages, and conferences in Shimla.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section-col spy_section">
          <div className="container">
            <div className="row justify-center">
            <Slide left>
            <div className="col-md-6 col-sm-12 about_hotel_text">
                <h3 className="common_title">
                  <span className="golden_color">About Shimla</span> Hill Station
                </h3>
                <p>
                  Designed to the highest specifications and situated on all
                  floors, with a private balcony and city view the executive
                  rooms are spacious with all modern amenities and furnishing to
                  meet the desired level of the satisfaction of the esteemed
                  guests at Golden Fern Resort Shimla.
                </p><br></br>
                <p>
                  Designed to the highest specifications and situated on all
                  floors, with a private balcony and city view the executive
                  rooms are spacious with all modern amenities and furnishing to
                  meet the desired level of the satisfaction of the esteemed
                  guests at Golden Fern Resort Shimla.
                </p>
              </div>
              </Slide>
              <Slide right>
              <div className="col-md-6 col-sm-12 wedding_services_right">
                <div className="about_hotel_image shimla-hill-station"></div>
              </div>
              </Slide>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aboutus;
