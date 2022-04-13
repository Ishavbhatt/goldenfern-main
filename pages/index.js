import React from "react";
import { Carousel } from "react-responsive-carousel";
// import Slider from "react-slick";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import Head from "next/head";
// import Image from "next/image";
// import Navbar from "../components/Navbar";
// import styles from "../styles/Home.module.css";
// import Link from "next/link";

export default function Home() {
  const rooms = {
    items: 1,
  };

  return (
    <>
      <Head>
      <link rel="icon" href="logo.png" />
        <title>Golden Fern</title>
      </Head>

      <section className="banner">
        <div className="banner_text text-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-md-10 offset-md-1 col-sm-12">
                <h1 className="">
                  Hotels for the elite passionate about luxury
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about_hotel common_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
              <h2 className="common_title">
                <span className="golden_color">Golden Fern</span>Shimla
                <div className="common_arrow">
                  <img src="images/arrow.svg" alt="Icon" />
                </div>
              </h2>
              <p>
                Golden Fern Resort Shimla ideally located on Shimla Kalka
                Highway at Kachi Ghati, just 4 km away from the city Centre The
                Mall Road. With 50 Rooms and Suites, the Resort has a big
                Banquet hall and conference Hall to host the big events,
                marriages, and conferences in Shimla.
              </p>
            </div>
            <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
              <div className="about_hotel_image"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials_section room_suites common_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2 className="common_title">Rooms & Suites</h2>
              <p>
                All rooms and suites are elegantly appointed and reflect
                unpretentious luxury and stylish className with wooden flooring.
              </p>
            </div>
            <div className="col-md-12 rooms_slider">
              <OwlCarousel className="gallery-owl-theme" {... rooms}>
                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns ">
                      <div className="rooms_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 6500 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h3>EXECUTIVE ROOM</h3>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla. The average size of the executive rooms
                          is 375 sq. feet excluding the bathroom and Balcony
                          area. All Executive rooms come with Extra large rooms
                          for additional space, a King-sized double bed, and
                          Large comfortable seating or sofa area.
                        </p>
                        <a
                          className="common_arrow"
                          href="/Roomsuits/Executive-room"
                        >
                          <img src="/arrow.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns ">
                      <div className="rooms_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 5000 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h4>classNameic Room</h4>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla. The average size of the executive rooms
                          is 375 sq. feet excluding the bathroom and Balcony
                          area. All Executive rooms come with Extra large rooms
                          for additional space, a King-sized double bed, and
                          Large comfortable seating or sofa area.
                        </p>
                        <a className="common_arrow">
                          <img src="/arrow.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns ">
                      <div className="rooms_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 7400 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h4>Luxury Suite</h4>
                        <p>
                          Luxury Suites at Golden Fern Resort Shimla cover 750
                          square feet area and consist of two bedrooms both with
                          King size beds, a comfortable sitting area, an en
                          suite marble bathroom with shower cubical hairdryer,
                          and all modern fittings along with a separate bathroom
                          with WC. These family suites offer plenty of space and
                          luxury for four guests while allowing them equal
                          amounts of privacy and comfort.
                        </p>
                        <a className="common_arrow">
                          <img src="/arrow.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns ">
                      <div className="rooms_slider_image">
                        <div className="room_price">
                          <p>rates from</p>
                          <h2>&#8377; 5500 /</h2>
                          <span>per night + 12% Tax</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-5 columns">
                      <div className="rooms_slider_text">
                        <h4>Deluxe Room</h4>
                        <p>
                          Deluxe Rooms have been designed elegantly as per the
                          requirement of the guests. The average size of the
                          room is 350 Sq. feet. The rooms are equipped with all
                          modern amenities 42 Inch LED TV, 10 Inch Mattress,
                          Clean Lenin, study table, tea coffee makers in each
                          room with electronic safe, and Min Bar. All Deluxe
                          rooms come with Private Balcony with a Valley view
                          overlooking the city.
                        </p>
                        <a className="common_arrow">
                          <img src="/arrow.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials_section common_padding">
        <div className="col-md-6 offset-md-3 col-sm-12 text-center">
          <h2 className="common_title">What People Say?</h2>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src="/images/user.png" />
            <div className="myCarousel">
              <h3>Bobby</h3>
              <h4>From Kerala</h4>
              <p>
                One of the best boutique hotel we have in Shimla, I recommend it
                to every traveler who is coming to Shimla if they want to see
                history about how was Shimla they should stay at Golden Fern
                Resort Shimla.
              </p>
            </div>
          </div>

          <div>
            <img src="/images/user.png" />
            <div className="myCarousel">
              <h3>Vicky</h3>
              <h4>From Kinnour</h4>
              <p>
                Amazing stay here. The room and bathroom were very neat and
                clean. And the breakfast was also good. Good service and they
                will provide you a clean towel and bed linen. Ac and
                refrigerator also working properly.
              </p>
            </div>
          </div>

          <div>
            <img src="/images/user.png" />
            <div className="myCarousel">
              <h3>Arun</h3>
              <h4>From Delhi</h4>
              <p>
                Golden Fern Resort Shimla is a very pretty and amazing Hotel. I
                love the food, room, room service, view, everything. When I stay
                at Golden Fern Resort Shimla Hotel, I feel like I am at home. So
                thank you so much, guys. You are amazing.
              </p>
            </div>
          </div>
        </Carousel>
      </section>

      <section className="posts_section common_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 ">
              <h2 className="common_title">
                Stay Update with <br /> Golden Fern
              </h2>
              <p>
                All rooms and suites are elegantly appointed and reflect
                unpretentious luxury and stylish className with wooden flooring.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 posts_section_btn">
              <a href="/#" className=" common_btn">
                VIEW ALL POSTS
              </a>
            </div>

            <div className="clearfix"></div>

            <div className="col-md-4 col-sm-12 post_column">
              <div className="post_column_image"></div>
              <p>on 22 Nov, 2021 / by admin</p>
              <h4>Disclosing the Secrets of Success in Golden fern</h4>
              <a href="/#">READ MORE</a>
            </div>

            <div className="col-md-4 col-sm-12 post_column">
              <div className="post_column_image"></div>
              <p>on 22 Nov, 2021 / by admin</p>
              <h4>Disclosing the Secrets of Success in Golden fern</h4>
              <a href="/#">READ MORE</a>
            </div>

            <div className="col-md-4 col-sm-12 post_column">
              <div className="post_column_image"></div>
              <p>on 22 Nov, 2021 / by admin</p>
              <h4>Disclosing the Secrets of Success in Golden fern</h4>
              <a href="/#">READ MORE</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
