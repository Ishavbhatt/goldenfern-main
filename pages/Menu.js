import React, { useState } from "react";
import Head from "next/head";
import menudata from "../styles/js/menudata";
import Singleitem from "./Singleitem";

function Menu() {
  const [items, setItems] = useState(menudata);

  return (
    <>
      <Head>
        <title>Menu at Golden Fern Resort</title>
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
              <section className="info">
                {items.map((item) => {
                  return <Singleitem key={item.id} {...item}></Singleitem>;
                })}
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Menu;
