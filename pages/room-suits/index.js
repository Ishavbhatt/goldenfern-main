import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Scrollspy from "react-scrollspy";
import Fade from "react-reveal/Fade";

function roomsuits() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY >= 1900);
      console.log("scrooll in");
    });
  }, []);

  return (
    <>
      <Head>
        <title>Luxurious Rooms & Suites In Shimla | Golden Fern Resort</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          property="og:title"
          content="Luxurious Rooms & Suites In Shimla | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="We offer super luxurious and spacious rooms and suites at very reasonable prices in the area. Check out our varieties of rooms for detailed | Golden Fern Resort"
        />
      </Head>

      <section className="common_page_header top_banner rooms_page_banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Rooms & Suits</h1>
              <p className="rooms-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-0 scrool_section" id="rooms_suits">
        <div className="container">
          <div className="row">
            <div className="panel_sidebar">
              <Scrollspy
                items={["room1", "room2", "room3", "room4"]}
                className={scroll ? "list-absolute" : "list_fixed"}
                currentClassName="is-current"
                offset={-300}
                id="sidebar"
              >
                <li className="scrool-items">
                  <Link href="#room1">EXECUTIVE ROOM</Link>
                </li>
                <li className="scrool-items">
                  <Link href="#room2">CLASSIC ROOM</Link>
                </li>
                <li className="scrool-items">
                  <Link href="#room3"> LUXURY ROOM</Link>
                </li>
                <li className="scrool-items">
                  <Link href="#room4">DELUXE ROOM</Link>
                </li>
              </Scrollspy>
            </div>

            <div className="scrollspy-example col-md-10 offset-md-2">
              <div id="room1" className="spy_section">
                <div className="about_hotel">
                  <div className="container">
                    <div className="row">
                      <Fade bottom>
                        <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                          <div className="about_hotel_image executive"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">
                            <span className="golden_color">EXECUTIVE</span>ROOM
                          </h2>
                          <p>
                            Designed to the highest specifications and situated
                            on all floors, with a private balcony and city view
                            the executive rooms are spacious with all modern
                            amenities and furnishing to meet the desired level
                            of the satisfaction of the esteemed guests at Golden
                            Fern Resort Shimla.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suits/executive-room"
                          >
                            <img src="/arrow.svg" alt="Icon" />
                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>

              <div id="room2" className="spy_section">
                <div className="about_hotel">
                  <div className="container">
                    <div className="row">
                      <Fade bottom>
                        <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                          <div className="about_hotel_image classic"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">
                            <span className="golden_color">CLASSIC</span>ROOM
                          </h2>
                          <p>
                            Designed to the highest specifications and situated
                            on all floors, with a private balcony and city view
                            the executive rooms are spacious with all modern
                            amenities and furnishing to meet the desired level
                            of the satisfaction of the esteemed guests at Golden
                            Fern Resort Shimla.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suits/classic-room"
                          >
                            <img src="/arrow.svg" alt="Icon" />
                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>

              <div id="room3" className="spy_section">
                <div className="about_hotel">
                  <div className="container">
                    <div className="row">
                      <Fade bottom>
                        <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                          <div className="about_hotel_image luxury"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">
                            <span className="golden_color">LUXURY</span>ROOM
                          </h2>
                          <p>
                            Designed to the highest specifications and situated
                            on all floors, with a private balcony and city view
                            the executive rooms are spacious with all modern
                            amenities and furnishing to meet the desired level
                            of the satisfaction of the esteemed guests at Golden
                            Fern Resort Shimla.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suits/luxury-room"
                          >
                            <img src="images/arrow.svg" alt="Icon" />
                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>

              <div id="room4" className="spy_section">
                <div className="about_hotel">
                  <div className="container">
                    <div className="row">
                      <Fade bottom>
                        <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                          <div className="about_hotel_image deluxe"></div>
                        </div>
                      </Fade>
                      <Fade top>
                        <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                          <h2 className="common_title">
                            <span className="golden_color">DELUXE</span>ROOM
                          </h2>
                          <p>
                            Designed to the highest specifications and situated
                            on all floors, with a private balcony and city view
                            the executive rooms are spacious with all modern
                            amenities and furnishing to meet the desired level
                            of the satisfaction of the esteemed guests at Golden
                            Fern Resort Shimla.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suits/deluxe-room"
                          >
                            <img src="images/arrow.svg" alt="Icon" />
                          </a>
                        </div>
                      </Fade>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default roomsuits;
