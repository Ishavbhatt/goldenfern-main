import React from "react";
import Head from "next/head";

function Restaurant() {
  return (
    <>
      <Head>
        <title>Restaurant | Golden Fern Resort</title>
        <meta property="og:title" content="About Golden Fern Resort" />
        <meta
          property="og:description"
          content="Golden Fern Resort Shimla ideally located on Shimla Kalka Highway at Kachi Ghati, just 4 km away from the city Centre The Mall Road."
        />
      </Head>

      <section className="common_page_header top_banner restaurant_page_banner">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Our Restaurant</h1>
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
            <div className="row justify-center">
              <div className="col-md-5 col-sm-10 about_hotel_text about-text">
                <h3 className="common_title">
                  <span className="golden_color">
                    An Ambient Dining Experiance
                  </span>
                </h3>
                <p>
                  Designed to the highest specifications and situated on all
                  floors, with a private balcony and city view the executive
                  rooms are spacious with all modern amenities and furnishing to
                  meet the desired level of the satisfaction of the esteemed
                  guests at Golden Fern Resort Shimla.
                </p>
                <button className="singlepage-bookbtn">view Menu</button>
              </div>
              <div className="col-md-5 col-sm-10 safety_section_image">
                <div className="executive"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-section-col">
          <div className="container">
            <div className="row justify-center">
              <div className="col-md-5 col-sm-10 safety_section_image">
                <div className="about_hotel_image executive"></div>
              </div>
                <div className="col-md-5 col-sm-10 about_hotel_text about-text">
                <h3 className="common_title">
                  <span className="golden_color">
                    Traditional & Family Reciepe
                  </span>
                </h3>
                <p>
                  Designed to the highest specifications and situated on all
                  floors, with a private balcony and city view the executive
                  rooms are spacious with all modern amenities and furnishing to
                  meet the desired level of the satisfaction of the esteemed
                  guests at Golden Fern Resort Shimla.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Restaurant;
