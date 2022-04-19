import React, {useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";

function Roomsuits() {
  const [panel, setPanel] = useState(false)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 66) {
      setPanel(true)
    } else {
      setPanel(false)
    }
  }
  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  return (
    <>
      <Head>
        <title>Luxurious Rooms & Suites In Shimla | Golden Fern Resort</title>
        <link rel="icon" href="/logo.png" />
        <meta
          property="og:title"
          content="Luxurious Rooms & Suites In Shimla | Golden Fern Resort"
        />
        <meta
          property="og:description"
          content="We offer super luxurious and spacious rooms and suites at very reasonable prices in the area. Check out our varieties of rooms for detailed | Golden Fern Resort"
        />
      </Head>

      <section className="common_page_header common_padding">
        <div className="container padding-t-80">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title">
              <h1 className="common_title white">Rooms & Suits</h1>
              <p>
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        className="attraction_section common_padding pt-0 scrool_section"
        id="rooms_suits"
      >
        <div className="container">
          <div className="row">
            <div className="panel_sidebar">
              <div id="sidebar" className="list-group room_suit_left">
                <li>
                  <Link
                    className="list-group-item list-group-item-action"
                    href="/Roomsuits#room1"
                  >
                    EXECUTIVE ROOM
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="list-group-item list-group-item-action"
                    href="/Roomsuits#room2"
                  >
                    CLASSIC ROOM
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="list-group-item list-group-item-action"
                    href="/Roomsuits#room3"
                  >
                    LUXURY ROOM
                  </Link>
                </li>
                <li className="">
                  <Link
                    className="list-group-item list-group-item-action"
                    href="/Roomsuits#room4"
                  >
                    DELUXE ROOM
                  </Link>
                </li>
              </div>
            </div>

            <div
              className="scrollspy-example col-md-10 offset-md-2"
              tabIndex="0"
            >
              <div id="room1" className="spy_section">
                <div className="about_hotel ">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                        <div className="about_hotel_image executive"></div>
                      </div>

                      <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                        <h2 className="common_title">
                          <span className="golden_color">EXECUTIVE</span>ROOM
                        </h2>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla.
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
              </div>

              <div id="room2" className="spy_section">
                <div className="about_hotel ">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                        <div className="about_hotel_image classic"></div>
                      </div>

                      <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                        <h2 className="common_title">
                          <span className="golden_color">CLASSIC</span>ROOM
                        </h2>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla.
                        </p>
                        <a
                          className="common_arrow"
                          href="/Roomsuits/Classic-room"
                        >
                          <img src="/arrow.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="room3" className="spy_section">
                <div className="about_hotel ">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                        <div className="about_hotel_image luxury"></div>
                      </div>

                      <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                        <h2 className="common_title">
                          <span className="golden_color">LUXURY</span>ROOM
                        </h2>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla.
                        </p>
                        <a
                          className="common_arrow"
                          href="/Roomsuits/Luxury-room"
                        >
                          <img src="images/arrow.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div id="room4" className="spy_section">
                <div className="about_hotel ">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-7 col-md-7 col-sm-12 about_hotel_right text-center">
                        <div className="about_hotel_image deluxe"></div>
                      </div>

                      <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                        <h2 className="common_title">
                          <span className="golden_color">DELUXE</span>ROOM
                        </h2>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla.
                        </p>
                        <a
                          className="common_arrow"
                          href="/Roomsuits/Deluxe-room"
                        >
                          <img src="images/arrow.svg" alt="Icon" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="empty_div">&nbsp;</div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Roomsuits;
