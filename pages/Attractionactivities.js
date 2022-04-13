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

function Attractionactivities() {
  const attraction = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    margin: 20,
  };

  const activty = {
    items: 2,
  };

  return (
    <>
      <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>

      <Head>
        <title>
          Popular Places & Activities in Shimla | Golden Fern Resort
        </title>
        <meta
          property="og:title"
          content="Popular Places & Activities in Shimla | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="Check out the most popular and attractive locations within Shimla to visit and also some exciting sports and activities to take part in | Golden Fern Resort"
        />
      </Head>

      <section className="common_page_header common_padding">
        <div className="container">
          <div className="row pages-info">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title">
              <h1 className="common_title  white">Attraction & Activities</h1>
              <p>
                There are not enough words to describe the charm that transpires
                in the hotel rooms and public areas. Make a tour, wherever you
                are.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="common_title color_white">Attraction</h2>
            </div>

            <OwlCarousel className="owl-theme" responsiveClass={true} nav>
              <div className="attraction_column item_1">
                <div className="attraction_column_title">
                  <h3>The Ridge</h3>
                  <p>
                    The Ridge road is a large open space, located in the center
                    of Shimla. The Ridge is the hub of all cultural activities
                    of Shimla. It runs east to west alongside Mall Road. It is
                    only 18 minutes distance from us.
                  </p>
                </div>
              </div>
              <div className="attraction_column item_2">
                <div className="attraction_column_title">
                  <h3>Jakhu Temple</h3>
                  <p>
                    Jakhu Temple is Dedicated to Lord Hanuman, it houses a
                    108-foot-tall idol of the deity. It offers sweeping views of
                    the Shivalik ranges. The temple is situated at Jakhu Hills
                    about 2.5 km away from the Ridge in Shimla.
                  </p>
                </div>
              </div>

              <div className="attraction_column item_3">
                <div className="attraction_column_title">
                  <h3>Fagu</h3>
                  <p>
                    Fagu is Cuddling in the Majestic Himalayan Range. This place
                    looks magical as it is always enveloped in snow & fog. The
                    clouds are so close to the surface that at times it feels as
                    if you are walking on clouds.{" "}
                  </p>
                </div>
              </div>

              <div className="attraction_column item_2">
                <div className="attraction_column_title">
                  <h3>Jakhu Temple</h3>
                  <p>
                    Jakhu Temple is Dedicated to Lord Hanuman, it houses a
                    108-foot-tall idol of the deity. It offers sweeping views of
                    the Shivalik ranges. The temple is situated at Jakhu Hills
                    about 2.5 km away from the Ridge in Shimla.
                  </p>
                </div>
              </div>

              <div className="attraction_column item_3">
                <div className="attraction_column_title">
                  <h3>Fagu</h3>
                  <p>
                    Fagu is Cuddling in the Majestic Himalayan Range. This place
                    looks magical as it is always enveloped in snow & fog. The
                    clouds are so close to the surface that at times it feels as
                    if you are walking on clouds.{" "}
                  </p>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>

      <section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 text-left">
              <h2 className="common_title color_white">Activities</h2>
            </div>
            <OwlCarousel
              className="activity-owl"
              responsiveClass={true}
              nav
              {...activty}
            >
              <div className="activity-item">
                <div className="attraction_column item_4">
                  <div className="attraction_column_title">
                    <h3>Trekking Tour</h3>
                    <p>
                      Himachal Pradesh is a state in Northern India. Literally
                      translated it means in the Lap of Himalayas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="activity-item">
                <div className="attraction_column item_5">
                  <div className="attraction_column_title">
                    <h3>Cycling Tour</h3>
                    <p>
                      These biking routes cater congenial bike ride experience
                      in the midst of arresting backdrop.
                    </p>
                  </div>
                </div>
              </div>

              <div className="activity-item">
                <div className="attraction_column item_4">
                  <div className="attraction_column_title">
                    <h3>Trekking Tour</h3>
                    <p>
                      Himachal Pradesh is a state in Northern India. Literally
                      translated it means in the Lap of Himalayas.
                    </p>
                  </div>
                </div>
              </div>

              <div className="activity-item">
                <div className="attraction_column item_5">
                  <div className="attraction_column_title">
                    <h3>Cycling Tour</h3>
                    <p>
                      These biking routes cater congenial bike ride experience
                      in the midst of arresting backdrop.
                    </p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
    </>
  );
}

export default Attractionactivities;
