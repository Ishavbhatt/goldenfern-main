import React from "react";
import Head from "next/head";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Wedding() {
  const wedding = {
    items: 1,
    dots: false
  };
  const otherOccasion = {
    items: 2,
    margin: 40,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 1,
        nav: true,
      },
      1000: {
        items: 2,
        nav: true,
        loop: false,
      },
    },
}

  return (
    <>
      <Head>
        <title>Wedding | Golden Fern Resort</title>
        <meta property="og:title" content="Wedding at Golden Fern Resort" />
        <meta
          property="og:description"
          content="Golden Fern Resort Shimla ideally located on Shimla Kalka Highway at Kachi Ghati, just 4 km away from the city Centre The Mall Road."
        />
      </Head>

      <section className="common_page_header top_banner wedding_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">
                Your Perfect Wedding Destination
              </h1>
              <p className="about-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="common_padding w-100">
        <div className="Wedding_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12 about_hotel_text about-text">
                <h3 className="common_title">
                  <span className="golden_color">
                    Memorable Weddings at Golden Fern
                  </span>
                </h3>
                <p>
                  Designed to the highest specifications and situated on all
                  floors, with a private balcony and city view the executive
                  rooms are spacious with all modern amenities and furnishing to
                  meet the desired level of the satisfaction of the esteemed
                  guests at Golden Fern Resort Shimla.
                </p>
                <button className="singlepage-bookbtn">
                  Request for Proposal
                </button>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="wedding_video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/vjXqYP67l5E?controls=0"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="common_padding wedding_highlights">
          <div className="container">
            <div className="row">
              <h3 className="golden_color text-center">Hign Lights</h3>
              <div className="col-lg-12  col-md-12 col-sm-12 row-room common_padding">
                <div className="col-md-2 col-sm-6 wedding_highlights_col text-center">
                  <span>
                    <img src="/new-images/people.svg" alt="Icon" />
                  </span>
                  <p>Capacity 200+</p>
                </div>
                <div className="col-md-2 col-sm-6 wedding_highlights_col text-center">
                  <span>
                    <img src="/new-images/decoration.svg" alt="Icon" />
                  </span>
                  <p>Decoration</p>
                </div>
                <div className="col-md-2 col-sm-6 wedding_highlights_col text-center">
                  <span>
                    <img src="/new-images/dj.svg" alt="Icon" />
                  </span>
                  <p>Dj Available</p>
                </div>
                <div className="col-md-2 col-sm-6 wedding_highlights_col text-center">
                  <span>
                    <img src="/new-images/mandap.svg" alt="Icon" />
                  </span>
                  <p>Mandap Setup</p>
                </div>
                <div className="col-md-2 col-sm-6 wedding_highlights_col text-center">
                  <span>
                    <img src="/new-images/firecracker.svg" alt="Icon" />
                  </span>
                  <p>Fire Cracker Allowed</p>
                </div>
                <div className="col-md-2 col-sm-6 wedding_highlights_col text-center">
                  <span>
                    <img src="/new-images/hawan.svg" alt="Icon" />
                  </span>
                  <p>Hawan Allowed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wedding_gallery">
          <div className="container">
            <div className="row">
              <OwlCarousel className="owl-theme" nav {...wedding}>
                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/new-images/gallery-wed.jpg')",
                    }}
                  ></div>
                </div>
                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-2.jpg')",
                    }}
                  ></div>
                </div>

                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-3.jpg')",
                    }}
                  ></div>
                </div>

                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-4.jpg')",
                    }}
                  ></div>
                </div>

                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-5.jpg')",
                    }}
                  ></div>
                </div>

                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-6.jpg')",
                    }}
                  ></div>
                </div>

                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-7.jpg')",
                    }}
                  ></div>
                </div>

                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-8.jpg')",
                    }}
                  ></div>
                </div>

                <div className="wedding_gal_item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-9.jpg')",
                    }}
                  ></div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>

        <div className="scrollspy-example common_padding w-100">
          <h3 className="text-center color_white">The Specified Services</h3>
          <div className="spy_section">
            <div className="wedding_col">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12 wedding_services_right">
                    <div className="wedding_services_image wed_services_1"></div>
                  </div>
                  <div className="col-md-6 col-sm-12 about_hotel_text">
                    <h3 className="common_title">
                      <span className="golden_color">Beauty Retuals</span>
                    </h3>
                    <p>
                      Designed to the highest specifications and situated on all
                      floors, with a private balcony and city view the executive
                      rooms are spacious with all modern amenities and
                      furnishing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spy_section">
            <div className="wedding_col">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12 wedding_services_right">
                    <div className="wedding_services_image wed_services_2"></div>
                  </div>
                  <div className="col-md-6 col-sm-12 about_hotel_text">
                    <h3 className="common_title">
                      <span className="golden_color">Creative Catering</span>
                    </h3>
                    <p>
                      Designed to the highest specifications and situated on all
                      floors, with a private balcony and city view the executive
                      rooms are spacious with all modern amenities and
                      furnishing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="spy_section">
            <div className="wedding_col">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12 wedding_services_right">
                    <div className="wedding_services_image wed_services_3"></div>
                  </div>
                  <div className="col-md-6 col-sm-12 about_hotel_text">
                    <h3 className="common_title">
                      <span className="golden_color">Wedding Boutique</span>
                    </h3>
                    <p>
                      Designed to the highest specifications and situated on all
                      floors, with a private balcony and city view the executive
                      rooms are spacious with all modern amenities and
                      furnishing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="attraction_section other_room_section other-room">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="common_title text-center color_white">Celebrating life, One Ocassion At A Time</h2>
            </div>
            <div className="activities_slider">
              <OwlCarousel
                className="other-room-owl"
                responsiveClass={true}
                nav
                {...otherOccasion}
              >
                <div className="single-room-item">
                  <div className="other-item">
                    <div
                      className="attraction_column"
                      style={{ backgroundImage: "url('/new-images/engagement.jpg')" }}
                    >
                        <div className="attraction_column_title">
                          <h3>Engagement</h3>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="single-room-item">
                  <div className="other-item">
                    <div
                      className="attraction_column"
                      style={{ backgroundImage: "url('/new-images/pre-wed.jpg')" }}
                    >
                        <div className="attraction_column_title">
                          <h3>Pre Wedding Shoots</h3>
                        </div>
                    </div>
                  </div>
                </div>

              </OwlCarousel>
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
}

export default Wedding;
