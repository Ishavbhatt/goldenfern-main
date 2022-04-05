import React from 'react'
import Slider from "react-slick";
import Head from 'next/head';
import Link from "next/link";
function LuxuryRoom() {

    const Bannerslider = {   
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1 
      }; 


      const otherroom = {   
          infinite: true,
          speed: 500,
          slidesToShow: 2,
          slidesToScroll: 1 
        }; 


    return (
        <>
              <Head>
          <title>Unbeatable Luxury Room | Golden Fern Resort</title>
          <meta property="og:title" content="Executive Room On Budget | Golden Fern Resort" />
          <meta property="og:description" content="Luxury Suites cover 750 square feet area and consist of two bedrooms both with King size beds, a comfortable sitting area, an en suite | Golden Fern Resort" />              
          </Head> 

<section className="banner single_room_banner">
{/* 
<div className="owl-carousel owl-theme owl-loaded single_room_banner_slider" >
                <div className="owl-stage-outer">
                  <div className="owl-stage"> */}

<Slider {...Bannerslider}>

                    <div className="owl-item">
                     
                      <div className="single_room_banner_column" style={{ backgroundImage: "url('/banner.jpg')" }}>
                      </div>
                   
                    </div>

                    <div className="owl-item">
                       
                      <div className="single_room_banner_column" style={{ backgroundImage: "url('/banner.jpg')" }}>
                      </div>
                    
                    </div>
                    </Slider>

                  {/* </div>
                </div> 
              </div> */}

</section>

  <section className="about_hotel room_page_desc common_padding pb-0">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-12 about_hotel_text">
                <div className="room_price">
                            <p>rates from</p>
                            <h2>₹ 7400 /</h2>
                            <span>per night + 12% Tax</span>
                          </div>
                <h2 className="common_title"><span className="golden_color">Luxury</span>Room 
                </h2>
                <p>Luxury Suites at Golden Fern Resort Shimla cover 750 square feet area and consist of two bedrooms both with King size beds, a comfortable sitting area, an en suite marble bathroom with shower cubical hairdryer, and all modern fittings along with a separate bathroom with WC. These family suites offer plenty of space and luxury for four guests while allowing them equal amounts of privacy and comfort.</p>
              </div>


               <div className="col-lg-6 offset-lg-1 col-md-6 offset-md-1 col-sm-12 about_hotel_right room_aminities text-center row">
                

                  <div className="col-md-12 col-sm-12 text-center">
                 <h2 className="common_title color_white">Room Facilities</h2>
               </div>

                <div className="col-md-4 col-sm-6">
                 <div className="facilities_column text-center">
                   <span><img src="/ketttle.svg" alt="Icon" /></span>
                   <p>BOOK NOW</p>                   
                 </div>
               </div>

               <div className="col-md-4 col-sm-6">
                 <div className="facilities_column text-center">
                   <span><img src="/room-service.svg" alt="Icon" /></span>
                   <p>ROOM SERVICE</p>                   
                 </div>
               </div>

               <div className="col-md-4 col-sm-6">
                 <div className="facilities_column text-center">
                   <span><img src="/wifi.svg" alt="Icon" /></span>
                   <p>FREE WIFI</p>                   
                 </div>
               </div>

               <div className="col-md-4 col-sm-6">
                 <div className="facilities_column text-center">
                   <span><img src="/bed.svg" alt="Icon" /></span>
                   <p>SPACIOUS GUEST ROOM</p>                   
                 </div>
               </div>

               <div className="col-md-4 col-sm-6">
                 <div className="facilities_column text-center">
                   <span><img src="/tv.svg" alt="Icon" /></span>
                   <p>LCD WITHOUT HD CHANNEL</p>                   
                 </div>
               </div>

               <div className="col-md-4 col-sm-6">
                 <div className="facilities_column text-center">
                   <span><img src="/breakfast.svg" alt="Icon" /></span>
                   <p>BREAK-FAST</p>                   
                 </div>
               </div>

               </div>


            </div>
          </div>
  </section>

  <section className="attraction_section other_room_section common_padding ">
          <div className="container">
            <div className="row">
               <div className="col-md-12 col-sm-12 text-left">
                 <h2 className="common_title color_white">Other Room Types</h2>
               </div>

                <div className="col-md-12">
              {/* <div className="owl-carousel owl-theme owl-loaded activities_slider" >
                <div className="owl-stage-outer">
                  <div className="owl-stage"> */}

<Slider {...otherroom}>

                    <div className="owl-item">
                     
                      <div className="attraction_column" style={{ backgroundImage: "url('/deluxe-room.jpg')" }}>
                         <a href="/Roomsuits/Deluxe-room">
                        <div className="attraction_column_title">
                          <h3>DELUXE ROOM</h3>
                        </div>
                        </a>
                      </div>
                   
                    </div>

                    <div className="owl-item">
                       
                      <div className="attraction_column" style={{ backgroundImage: "url('/classic-room.jpg')" }}>
                        <a href="/Roomsuits/Executive-room">
                        <div className="attraction_column_title">
                          <h3>EXECUTIVE ROOM</h3>
                        </div>
                        </a>
                      </div>
                    
                    </div>


                    <div className="owl-item">
                       
                       <div className="attraction_column" style={{ backgroundImage: "url('/classic-room.jpg')" }}>
                         <a href="/Roomsuits/Classic-room">
                         <div className="attraction_column_title">
                           <h3>CLASSIC ROOM</h3>
                         </div>
                         </a>
                       </div>
                     
                     </div>
                    </Slider>

                  {/* </div>
                </div>
              </div> */}
            </div>

            </div>
          </div>

  </section>
            
        </>
    )
}

export default LuxuryRoom