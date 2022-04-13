import React from "react";
import Slider from "react-slick";

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

function ExecutiveRoom() {
  const executive = {
    items: 1,
  };

  const bannerslider = {
    loop: true,
    margin: 10,
    nav: false,
    items: 1,
  };

  const otherroom = {
    items: 2,
    margin: 40,
  };

  return (
    <>
      <Head>
        <title>Executive Room On Budget | Golden Fern Resort</title>
        <meta
          property="og:title"
          content="Executive Room On Budget | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="Designed to the highest specifications and situated on all floors, with a private balcony and city view the executive rooms are | Golden Fern Resort"
        />
      </Head>

      <section className="banner single_room_banner">
        <OwlCarousel {...bannerslider}>
          <div className="owl-item">
            <div
              className="single_room_banner_column"
              style={{ backgroundImage: "url('/exective-room.jpg')" }}
            ></div>
          </div>

          <div className="owl-item">
            <div
              className="single_room_banner_column"
              style={{ backgroundImage: "url('/banner.jpg')" }}
            ></div>
          </div>
        </OwlCarousel>
      </section>

      <section className="about_hotel room_page_desc common_padding pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
              <div className="room_price">
                <p>rates from</p>
                <h2>₹ 6500 /</h2>
                <span>per night + 12% Tax</span>
              </div>
              <h2 className="common_title">
                <span className="golden_color">Executive </span>Room
              </h2>
              <p>
                Designed to the highest specifications and situated on all
                floors, with a private balcony and city view the executive rooms
                are spacious with all modern amenities and furnishing to meet
                the desired level of the satisfaction of the esteemed guests at
                Golden Fern Resort Shimla. The average size of the executive
                rooms is 375 sq. feet excluding the bathroom and Balcony area.
                All Executive rooms come with Extra large rooms for additional
                space, a King-sized double bed, and Large comfortable seating or
                sofa area.
              </p>
              {/* <button className="common_arrow"><img src="/arrow.svg" alt="Icon"/></button> */}
            </div>

            <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-1 col-sm-12 about_hotel_right room_aminities text-center row">
              <div className="col-md-12 col-sm-12 text-center">
                <h2 className="common_title color_white">Room Facilities</h2>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <img src="/ketttle.svg" alt="Icon" />
                  </span>
                  <p>BOOK NOW</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <img src="/room-service.svg" alt="Icon" />
                  </span>
                  <p>ROOM SERVICE</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <img src="/wifi.svg" alt="Icon" />
                  </span>
                  <p>FREE WIFI</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <img src="/bed.svg" alt="Icon" />
                  </span>
                  <p>SPACIOUS GUEST ROOM</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <img src="/tv.svg" alt="Icon" />
                  </span>
                  <p>LCD WITHOUT HD CHANNEL</p>
                </div>
              </div>

              <div className="col-md-4 col-sm-6">
                <div className="facilities_column text-center">
                  <span>
                    <img src="/breakfast.svg" alt="Icon" />
                  </span>
                  <p>BREAK-FAST</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section other_room_section common_padding">
        <div className="container">
          <div className="row">
            <div id="" className="executive-room-section">
              <OwlCarousel className="gallery-owl-theme" nav {...executive}>
                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-1.jpg')",
                    }}
                  ></div>
                </div>
                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-2.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-3.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-4.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-5.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-6.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-7.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
                  <div
                    className="singleroom_slider_col"
                    style={{
                      backgroundImage: "url('/gallery-room-8.jpg')",
                    }}
                  ></div>
                </div>

                <div className="executive-item">
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
      </section>

      <section className="attraction_section other_room_section common_padding ">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="common_title color_white">Other Room Types</h2>
            </div>

            <OwlCarousel
              className="other-room-owl"
              responsiveClass={true}
              nav
              {...otherroom}
            >
              <div className="">
                <div
                  className="singleroom_column"
                  style={{ backgroundImage: "url('/deluxe-room.jpg')" }}
                >
                  <a href="/Roomsuits/Deluxe-room">
                    <div className="attraction_column_title">
                      <h3>DELUXE ROOM</h3>
                    </div>
                  </a>
                </div>
              </div>

              <div className="">
                <div
                  className="singleroom_column"
                  style={{ backgroundImage: "url('/classic-room.jpg')" }}
                >
                  <a href="/Roomsuits/Classic-room">
                    <div className="attraction_column_title">
                      <h3>CLASSIC ROOM</h3>
                    </div>
                  </a>
                </div>
              </div>

              <div className="">
                <div
                  className="singleroom_column"
                  style={{ backgroundImage: "url('/luxury.jpg')" }}
                >
                  <a href="/Roomsuits/Luxury-room">
                    <div className="attraction_column_title">
                      <h3>LUXURY SUITE</h3>
                    </div>
                  </a>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default ExecutiveRoom;
