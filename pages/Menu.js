import React, { useState } from "react";
import Head from "next/head";

function Menu() {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <Head>
        <title>About Golden Fern Resort</title>
        <meta property="og:title" content="About Golden Fern Resort" />
        <meta
          property="og:description"
          content="Golden Fern Resort Shimla ideally located on Shimla Kalka Highway at Kachi Ghati, just 4 km away from the city Centre The Mall Road."
        />
      </Head>
      <section className="common_page_header top_banner about_page_banner">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title pages-info">
              <h1 className="common_title white">Our Special Menu</h1>
              <p className="about-subtitle">
                The rooms at Golden Fern are designed with simple, timeless
                lines. Here you may find all the commodities needed for a
                comfortable stay. All rooms are non-smoking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="common_padding">
        <div className="container">
          <div className="row justify-center">
            <div className="col-md-10">
              <div className="question">
                <div>
                  <h4 className="golden_color">Hello</h4>
                  <button
                    className="show-more-btn"
                    onClick={() => setShowInfo(!showInfo)}
                  >
                    {showInfo ? (
                      <img src="/arrow-up.png" alt="" />
                    ) : (
                      <img src="/arrow-down.png" alt="" />
                    )}
                  </button>
                </div>
                {showInfo && <p>Hy</p>}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
