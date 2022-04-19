import React from "react";

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
import Head from "next/head";
import Link from "next/link";

function Gallery() {
  const options = {
    loop: true,
    items: 1.2,
    margin: 30,
  };
  const restraunt = {
    loop: true,
    items: 1.2,
    margin: 30,
  };
  const hotel = {
    loop: true,
    items: 1.2,
    margin: 30,
  };

  return (
    <>
      <Head>
        <title>Golden's Photo Gallery | Golden Fern Resort</title>
        <meta
          property="og:title"
          content="Golden's Photo Gallery | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="Check out the photo gallery of Golden Fern Resort. Rooms & Suites, Restaurant & Bar and the Hotel Area Photos are there to get the | Golden Fern Resort"
        />
      </Head>

      <section className="common_page_header common_padding">
        <div className="container padding-t-80">
          <div className="row pages-info">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title">
              <h1 className="common_title white">Gallery</h1>
              <p>
                There are not enough words to describe the charm that transpires
                in the hotel rooms and public areas. Make a tour, wherever you
                are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="common_padding pt-0 scrool_section" id="rooms_suits">
        <div className="container">
          <div className="row">
            <div className="panel_sidebar">
              <div id="sidebar" className="list-group room_suit_left">
                <li>
                  <a
                    className="list-group-item list-group-item-action "
                    href="#room1"
                  >
                    ROOMS
                  </a>
                </li>
                <li>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#room2"
                  >
                    RESTAURANT & BAR
                  </a>
                </li>
                <li>
                  <a
                    className="list-group-item list-group-item-action"
                    href="#room3"
                  >
                    HOTEL AREA
                  </a>
                </li>
              </div>
            </div>

            <div
              className="scrollspy-example col-md-10 offset-md-2"
              tabIndex="0"
            >
              <section className="gallery-sec">
                <div id="room1" className="gallery_section">
                  <div className="container">
                    {/* <div className="row"> */}
                    <div className="gallery-col-md-12">
                      <h2 className="gallery-item-heading">Rooms</h2>

                      <OwlCarousel
                        className="gallery-owl-theme"
                        nav
                        {...options}
                      >
                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-1.jpg')",
                            }}
                          ></div>
                        </div>
                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-2.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-3.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-4.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-5.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-6.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-7.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-8.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/gallery-room-9.jpg')",
                            }}
                          ></div>
                        </div>
                      </OwlCarousel>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </section>

              <section className="gallery-sec">
                <div id="room2" className="gallery_section">
                  <div className="container">
                    {/* <div className="row"> */}
                    <div className="gallery-col-md-12">
                      <h2 className="gallery-item-heading">Restaurant & Bar</h2>

                      <OwlCarousel
                        className="gallery-owl-theme"
                        nav
                        {...restraunt}
                      >
                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-1.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-2.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-3.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-4.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-5.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-6.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-7.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage:
                                "url('/gallery-restaurant-8.jpg')",
                            }}
                          ></div>
                        </div>
                      </OwlCarousel>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </section>

              <section className="gallery-sec">
                <div id="room3" className="gallery_section">
                  <div className="container">
                    {/* <div className="row"> */}
                    <div className="gallery-col-md-12">
                      <h2 className="gallery-item-heading">Hotel Area</h2>

                      <OwlCarousel
                        className="gallery-owl-theme"
                        nav
                        {...hotel}
                      >
                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-1.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-2.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-3.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-4.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-5.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-6.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-7.jpg')",
                            }}
                          ></div>
                        </div>

                        <div className="gallery-item">
                          <div
                            className="gallery_slider_column"
                            style={{
                              backgroundImage: "url('/outdoor-gallery-8.jpg')",
                            }}
                          ></div>
                        </div>
                      </OwlCarousel>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </section>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Gallery;
