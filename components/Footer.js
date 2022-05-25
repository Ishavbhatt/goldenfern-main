import React, { useState } from "react";
import Link from "next/link";

function Footer() {
  

  const handleChange = (e) => {
    setEmail(e.target.value)
  }
  return (
    <>
      <section className="footer_section">
        <div className="footer_upper w-100">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-sm-4 col-xs-12 footer_address_left">
                <div className="footer_address_left_inner">
                  <div className="f_logo">
                    <img src="/logo-footer.png" alt="logo" />
                  </div>
                  <div className="f_newsletter">
                    <h4 className="text-uppercase">SUBSCRIBE OUR NEWSLETTER</h4>
                    <form>
                      <input type="email" placeholder="Email*" onChange={handleChange}/>
                      <button type="submit" className="common_arrow">
                        <img src="/arrow.svg" alt="Icon" />
                      </button>
                    </form>
                  </div>

                  <div className="f_icons">
                    <a  href="https://www.facebook.com/Golden-Fern-Resort-110187927124912/" target="_blank">
                      <img src="/facebook.svg" alt="Icon" />
                    </a>
                    <a href="https://www.instagram.com/goldenfernresort_/" target="_blank">
                      <img src="/instagram.svg" alt="Icon" />
                    </a>
                    <a href="https://www.youtube.com/channel/UCGC6GEnkBUDnNqN479Jp0OA" target="_blank">
                      <img src="/youtube.svg" alt="Icon" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8 col-sm-8 col-xs-12 footer_address_right">
                <div className="footer_address_right_inner">
                  <div>
                    <h4 className="text-uppercase">ADDRESS</h4>
                    <p>
                      Golden Fern Resort - Taradevi Rd, Bagh, Shimla, Himachal
                      Pradesh 171004
                    </p>
                  </div>
                  <div>
                    <h4 className="text-uppercase">PHONE NUMBER</h4>
                    <p>
                      <a href="tel:9805084000">+91 - 98050 84000</a>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-uppercase">RESERVATION</h4>
                    <p>
                      <a href="mailto:reservations@goldenfernresort.com">
                        reservations@goldenfernresort.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bottom w-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-9 col-sm-12 footer_bottom_column">
                <span>&#169; All Rights Reserved for Golden Fern Resort</span>
              </div>
              <div className="col-lg-7 col-md-9 col-sm-12 footer_bottom_column">
                <ul>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy </Link>
                  </li>
                  <li>
                    <Link href="/termsandconditions">Terms and Conditions </Link>
                  </li>
                  <li>
                    <Link href="/cancellation-policy">
                      Cancellation & Refund Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/disclaimer">Disclaimer</Link>
                  </li>
                  <li>
                    <Link href="/healthandsafety">Health & Safety</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-2 col-md-3 col-sm-12 footer_bottom_column text-right">
                <span>
                  Powered By:
                  <a target="blank" href="https://unmeteredtechnologies.com" to="https://unmeteredtechnologies.com/">
                    <img src="/unmetered-logo.gif" alt="icon" />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Footer;
