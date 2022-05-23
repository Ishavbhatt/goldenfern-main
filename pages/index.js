import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import axios from "axios";
import Link from "next/link";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

import "react-datepicker/dist/react-datepicker.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const datenmonth = new Date().toLocaleDateString("en-MS", {
  day: "2-digit",
  month: "short",
});

let curruntDate = new Date().toLocaleDateString("en-us", {
  weekday: "long",
  month: "long",
  year: "numeric",
});

import Head from "next/head";

 const Home = ({token, ...props}) => {
  const [people, setPeople] = useState(1);
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [data, setData] = useState(null);
  const [feeds, setFeeds] = useState([]);
  const lat = 31.1048;
  const long = 77.1734;
  const weatherapiKey = process.env.API_KEY;
  const weatherapiLink = process.env.API_LINK;
  const weatherapiUrl = `${weatherapiLink}/?lat=${lat}&lon=${long}&units=metric&APPID=${weatherapiKey}`;

  const rooms = {
    items: 1,
  };

  const testmonials = {
    center: true,
    items: 3,
    autoplay: true,
    autoplayTimeout: 5000,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
        dots: true,
      },
      600: {
        items: 3,
        dots: true,
      },
      1000: {
        items: 3,
        dots: true,
        loop: true,
      },
    },
  };

  const blogs = {
    center: true,
    margin: 20,
    items: 3,
    loop: true,
    dots: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        // nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
      },
      600: {
        items: 3,
        dots: true,
      },
      1000: {
        items: 3,
        dots: true,
        loop: true,
      },
    },
  };

  const instaGallery = {
    stagePadding: 50,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  }; 

  // define handler change function on check-in date
  const handleCheckInDate = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  // define handler change function on check-out date
  const handleCheckOutDate = (date) => {
    setCheckOutDate(date);
  };

  // Increment People
  const incPeople = () => {
    setPeople(people + 1);
    console.log(weatherapiUrl)
  };

  // Decrement People
  const decPeople = () => {
    if (people === 1) {
      return;
    }
    setPeople(people - 1);
  };

  useEffect(() => {
    fetch(weatherapiUrl)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

    
  useEffect(() => {
      fetchFeeds()
    }, [])

  const fetchFeeds = () => {
      axios.get("https://graph.instagram.com/me/media?fields=id,media_type,media_url,caption&limit=12&access_token=IGQVJVRzNBY3JhMVpJOThLQkYzcHMyMG05UDRWbGpxRTJpUVZANOFg0dElnMERCYzdLUk9WTEt1c0pTbDlqRE9RLTlhRk1qWDNJcVJHeHo2R3FRbEFaaTNOaVNDRVdVcnZAvN1djWWVn")
        .then(res => {
          setFeeds(res.data.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

  return (
    <>
      <Head>
        <link rel="icon" href="favicon.png" />
        <title>Golden Fern</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
        <div className="container">
          {/* <div className="row"> */}
          <div className="bnr-booking">
            <div className="check-in-out-container">
              <div className="pick-dates">
                <label>Check-in</label>
                <DatePicker
                  wrapperClassName="date-picker"
                  placeholderText={datenmonth}
                  selected={checkInDate}
                  minDate={new Date()}
                  onChange={handleCheckInDate}
                />
                <span className="bkg-arrow-down">
                  <img src="/filter-down-arrow.svg" alt="" />
                </span>
              </div>
              <div className="pick-dates vr-left-rigth">
                <label>Check-out</label>
                <DatePicker
                  wrapperClassName="date-picker"
                  placeholderText={datenmonth}
                  selected={checkOutDate}
                  minDate={checkInDate}
                  onChange={handleCheckOutDate}
                />
                <span className="bkg-arrow-down">
                  <img src="/filter-down-arrow.svg" alt="" />
                </span>
              </div>
              <div className="pick-dates vr-left-rigth">
                <label>People</label>
                <div className="people-btn">
                  <p className="people">{people}</p>
                  <span>
                    <button className="bkg-arrow-btn" onClick={incPeople}>
                      <img src="/filter-up-arrow.svg" alt="" />
                    </button>
                    <button className="bkg-arrow-btn" onClick={decPeople}>
                      <img src="/filter-down-arrow.svg" alt="" />
                    </button>
                  </span>
                </div>
              </div>
              <div className="banner-book-btn pick-dates popup-book-btn">
                <div className="common_arrow">
                  <img src="/images/arrow.svg" alt="Icon" />
                </div>
              </div>
            </div>
          </div>
          <div className="fixedweather">
            <h6 className="weather-date">{curruntDate}</h6>
            {data && (
              <div>
                <h4 className="weather-status">
                  {data.weather[0].description}
                </h4>
                <h1 className="weather-temp">
                  {data.main.temp}
                  <span>&#176;</span>
                  <span>C</span>
                </h1>
                <h6 className="weather-name">{data.name}, India</h6>
              </div>
            )}
          </div>
          {/* </div> */}
        </div>
      </section>

      <section className="about_hotel">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
              <h2 className="common_title">
                <span className="golden_color">Golden Fern</span>Shimla
                  <a className="common_arrow" href="/Aboutus">
                    <img src="/arrow.svg" alt="Icon" />
                  </a>
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

      <section className="testimonials_section room_suites padding-t-b-40">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <h2 className="common_title">Rooms & Suites</h2>
              <p className="rooms-para">
                All rooms and suites are elegantly appointed and reflect
                unpretentious luxury and stylish className with wooden flooring.
              </p>
            </div>
            <div className="col-md-12 rooms_slider">
              <OwlCarousel className="gallery-owl-theme" {...rooms}>
                <div className="index-room-item">
                  <div className="rooms_slider_column row">
                    <div className="col-md-7 columns">
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
                        <h4>EXECUTIVE ROOM</h4>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla. All Executive rooms come with Extra
                          large rooms for additional space, a King-sized double
                          bed, and Large comfortable seating or sofa area.
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
                        <h4>Classic Room</h4>
                        <p>
                          Designed to the highest specifications and situated on
                          all floors, with a private balcony and city view the
                          executive rooms are spacious with all modern amenities
                          and furnishing to meet the desired level of the
                          satisfaction of the esteemed guests at Golden Fern
                          Resort Shimla. All Executive rooms come with Extra
                          large rooms for additional space, a King-sized double
                          bed, and Large comfortable seating or sofa area.
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
                        <a
                          className="common_arrow"
                          href="/Roomsuits/Luxury-room"
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
                        <a
                          className="common_arrow"
                          href="/Roomsuits/Deluxe-room"
                        >
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

      <section className="testimonials_section padding-t-b-40">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-12 text-center">
              <h2 className="test-title">What People Say?</h2>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="col-md-12 padding-t-b-40 testimonials-dots">
              <OwlCarousel {...testmonials}>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      One of the best boutique hotel we have in Shimla, I
                      recommend it to every traveler who is coming to Shimla if
                      they want to see history about how was Shimla they should
                      stay at Golden Fern Resort Shimla.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Bobby</h5>
                    <p>From Kerala</p>
                  </div>
                </div>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Amazing stay here. The room and bathroom were very neat
                      and clean. And the breakfast was also good. Good service
                      and they will provide you a clean towel and bed linen. Ac
                      and refrigerator also working properly.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Vicky</h5>
                    <p>From Kinnaur</p>
                  </div>
                </div>
                <div className="test-item">
                  <div className="testi_column text-center">
                    <img src="/comma.png" alt="Icon" />
                    <p>
                      Golden Fern Resort Shimla is a very amazing Hotel. I love
                      the food, room, room service, view, everything. When I
                      stay at Golden Fern Resort Shimla Hotel, I feel like I am
                      at home. So thank you so much, guys. You are amazing.
                    </p>
                  </div>
                  <div className="triangle"></div>
                  <div className="testi_profile text-center">
                    <img src="/user.png" alt="Image" />
                    <h5>Arun</h5>
                    <p>From Delhi</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
      </section>

      <section className="posts_section common_padding">
        <div className="container">
          <div className="row">
            <h2 className="common_title">
              Stay Update with <br /> Golden Fern
            </h2>
            <div className="flex-between">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <p>
                  All rooms and suites are elegantly appointed and reflect
                  unpretentious luxury and stylish className with wooden
                  flooring.
                </p>
              </div>
            </div>
            <div className="clearfix"></div>
            <OwlCarousel {...blogs}>
              <div className="post_column">
                <div className="post_column_image"></div>
                <p>on 22 Nov, 2021 / by admin</p>
                <h4>Disclosing the Secrets of Success in Golden fern</h4>
                <a href="/#">READ MORE</a>
              </div>

              <div className="post_column">
                <div className="post_column_image"></div>
                <p>on 22 Nov, 2021 / by admin</p>
                <h4>Disclosing the Secrets of Success in Golden fern</h4>
                <a href="/#">READ MORE</a>
              </div>

              <div className="post_column">
                <div className="post_column_image"></div>
                <p>on 22 Nov, 2021 / by admin</p>
                <h4>Disclosing the Secrets of Success in Golden fern</h4>
                <a href="/#">READ MORE</a>
              </div>
            </OwlCarousel>

            <div className="posts_section_btn">
              <a href="/#" className=" common_btn">
                VIEW ALL POSTS
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="posts_section common_padding">
        <div className="container">
          <div className="row insta-gallery">
        <h1 className="text-center">Instagram</h1>
        <Link href="https://instagram.com/goldenfernresort_" ><a className="text-center golden_color">@goldenfernresort_</a></Link>
        <OwlCarousel {...instaGallery}>
          {feeds.map((feed) => (
            <img key={feed.id} src={feed.media_url} alt="" />
          ))}
          </OwlCarousel>
          </div>
          
        </div>
      </section>
    </>
  );
}
export default Home;