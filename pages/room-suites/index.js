import React, { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import Scrollspy from "react-scrollspy";
import Fade from "react-reveal/Fade";

function roomsuites() {
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
              <h1 className="common_title white">Rooms & Suites</h1>
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
                            Fern Resort Shimla. The average size of the
                            executive rooms is 375 sq. feet excluding the
                            bathroom and Balcony area. All Executive rooms come
                            with Extra large rooms for additional space, a
                            King-sized double bed, and Large comfortable seating
                            or sofa area.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/executive-room"
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
                            Designed to the highest specifications , with all
                            modern amenities and furnishing to meet the desired
                            level of the satisfaction of the esteemed guests at
                            Golden Fern Resort Shimla. The average size of the
                            room is 240 Sq. feet All Classic rooms come with
                            Extra large rooms for additional space, a King-sized
                            double bed, and Large comfortable seating or sofa
                            area.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/classic-room"
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
                            Luxury Suites at Golden Fern Resort Shimla cover 750
                            square feet area and consist of two bedrooms both
                            with King size beds, a comfortable sitting area, an
                            en suite marble bathroom with shower cubical
                            hairdryer, and all modern fittings along with a
                            separate bathroom with WC. These family suites offer
                            plenty of space and luxury for four guests while
                            allowing them equal amounts of privacy and comfort.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/luxury-room"
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
                            Deluxe Rooms have been designed elegantly as per the
                            requirement of the guests. The average size of the
                            room is 350 Sq. feet. The rooms are equipped with
                            all modern amenities 42 Inch LED TV, 10 Inch
                            Mattress, Clean Lenin, study table, tea coffee
                            makers in each room with electronic safe, and Min
                            Bar. All Deluxe rooms come with Private Balcony with
                            a Valley view overlooking the city.
                          </p>
                          <a
                            className="common_arrow"
                            href="/room-suites/deluxe-room"
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

export default roomsuites;
