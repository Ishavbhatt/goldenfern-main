import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isactive, setIsactive] = useState(false);

  const handleIsActive = () => {
    setIsactive(!isactive);
  };

  return (
    <>
      <script src="/"></script>

      <body data-bs-spy="scroll" data-bs-target="#navbar-example" />
      {/* <!-- <div className="se-pre-con"></div> --> */}

      <section className="header">
        <div className="header_bottom w-100">
          <div className="container">
            <div className="row">
              <div className=" col-lg-3 col-md-3 col-sm-12 logo">
                <Link className="navbar-brand" href="/#">
                  <img src="/logo.png" alt="Logo" className="logo img-fluid" />
                </Link>
              </div>
              <div className="col-lg-9 col-md-9 col-sm-12 header_right">
                <nav className="navbar navbar-expand-md">
                  <div className="navbar-collapse" id="navbarNav">
                    <div id="bs-example-navbar-collapse-1" className="collapse">
                      <ul id="menu-header-menu" className="nav navbar-nav">
                        <li>
                          <Link href="/#">home</Link>
                        </li>
                        <li>
                          <Link href="/Roomsuits">room & suits</Link>
                        </li>
                        <li>
                          <Link href="/Attractionactivities">
                            Attraction & Activities
                          </Link>
                        </li>
                        <li>
                          <Link href="/Healthsafety">health & safety</Link>
                        </li>
                        <li>
                          <Link href="/Gallery">gallery</Link>
                        </li>
                        <li>
                          <Link href="/Contactus">contact us</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <span className="header_toggle">
                    <img alt="logo" src="/toggle.svg" />
                  </span>
                </nav>

                <div className="book_appointment text-capitalize">
                  <Link
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    href="#/"
                  >
                    Book Now
                  </Link>
                  <div className="common_arrow">
                    <img src="/images/arrow.svg" alt="Icon" />
                  </div>
                </div>
              </div>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleIsActive}
              >
               <img alt="logo" src="/list.png" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {isactive ? (
        <section className="header-trans">
          <div className="mobile-header">
            <div className="mobile-header-div">
              <div className=" col-lg-3 col-md-3 col-sm-12 logo">
                <Link className="navbar-brand" href="/#">
                  <img src="/logo.png" alt="Logo" className="logo img-fluid" />
                </Link>
              </div>
              <div>
                <button className="navbar-cut-btn" onClick={handleIsActive}>
                  <img alt="logo" src="/cancel.png" />
                </button>
              </div>
            </div>
            <div>
              <nav>
                <div>
                  <div>
                    <ul className="mobile-view-ul">
                      <li className="mobile-view-lists">
                        <Link href="/#">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Home
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/Roomsuits">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Room & Suits
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/Attractionactivities">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Attraction & Activities
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/Healthsafety">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Health & Safety
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="/Gallery">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Gallery
                          </a>
                        </Link>
                      </li>
                      <li className="mobile-view-lists">
                        <Link href="/Contactus">
                          <a
                            onClick={handleIsActive}
                            className="mobile-view-lists-clr"
                          >
                            Contact Us
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
              <div className="book-now-btn">
                <Link
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                  href="#/"
                >
                  <a className="book-now">Book Now</a>
                </Link>
                <div className="common_arrow">
                  <img src="/images/arrow.svg" alt="Icon" />
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
};

export default Navbar;
