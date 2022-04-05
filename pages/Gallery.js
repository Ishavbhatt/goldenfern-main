import React from 'react'
import Slider from "react-slick";
import Head from 'next/head';
import Link from 'next/link';
function Gallery() {  

  const settings = {   
    infinite: true,
    speed: 500,
    slidesToShow: 1.1,
    slidesToScroll: 1 
  };    

    return (
        <>

         <Head>
          <title>Golden's Photo Gallery | Golden Fern Resort</title>
          <meta property="og:title" content="Golden's Photo Gallery | Golden Fern Resort" />
          <meta property="og:description" content="Check out the photo gallery of Golden Fern Resort. Rooms & Suites, Restaurant & Bar and the Hotel Area Photos are there to get the | Golden Fern Resort" />              
          </Head> 

<section className="common_page_header common_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title">
              <h1 className="common_title white">Gallery</h1>
              <p>There are not enough words to describe the charm that transpires in the hotel rooms and public areas. Make a tour, wherever you are.</p>
            </div>               
          </div>
        </div>
</section>

<section className="attraction_section common_padding pt-0 scrool_section" id="rooms_suits">
     
<div className="container">
<div className="row">
  
      <div className="panel_sidebar">
<div id="sidebar" className="list-group room_suit_left">
<li > <a className="list-group-item list-group-item-action " href="#room1">ROOMS</a></li>
<li ><a className="list-group-item list-group-item-action" href="#room2">RESTAURANT & BAR</a></li>
<li ><a className="list-group-item list-group-item-action" href="#room3">HOTEL AREA</a></li>
</div>
</div>

<div className="scrollspy-example col-md-10 offset-md-2" tabIndex="0">


<div id="room1" className="gallery_section">

        <div className="container">
          <div className="row">

            <div className="col-md-12">

              <h2 className="golden_color">Rooms</h2>
{/* 
            <div className="owl-carousel owl-theme owl-loaded gallery_slider" >
              <div className="owl-stage-outer">
                <div className="owl-stage"> */}

<Slider {...settings}>


                  <div className="owl-item">

                   
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-1.jpg')" }}>
                    </div>
                 
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-2.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-3.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-4.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-5.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-6.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-7.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-8.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url ('/gallery-room-9.jpg')" }}>
                    </div>
                  
                  </div>
                  </Slider>

                {/* </div>
              </div>
            </div> */}

            </div>
            
          </div>
        </div>
  
</div>

  <div id="room2" className="gallery_section">
 
        <div className="container">
          <div className="row">

            <div className="col-md-12">

              <h2 className="golden_color">Restaurant & Bar</h2>
{/* 
            <div className="owl-carousel owl-theme owl-loaded gallery_slider" >
              <div className="owl-stage-outer">
                <div className="owl-stage"> */}
                <Slider {...settings}>


                  <div className="owl-item">
                   
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/gallery-restaurant-1.jpg')" }}>
                    </div>
                 
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/gallery-restaurant-2.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/gallery-restaurant-3.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/gallery-restaurant-4.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/gallery-restaurant-5.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage:  "url('/gallery-restaurant-6.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                      
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/gallery-restaurant-7.jpg')" }}>
                    </div>
                  
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/gallery-restaurant-8.jpg')" }}>
                    </div>
                  
                  </div>
                  </Slider>

                {/* </div>
              </div>
            </div> */}

            </div>

          </div>
        </div>
 
</div>

  <div id="room3" className="gallery_section">
 
        <div className="container">
          <div className="row">

              <div className="col-md-12">

              <h2 className="golden_color">Hotel Area</h2>
{/* 
            <div className="owl-carousel owl-theme owl-loaded gallery_slider" >
              <div className="owl-stage-outer">
                <div className="owl-stage"> */}

<Slider {...settings}>


                  <div className="owl-item">
                   
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-1.jpg')" }}>
                    </div>
                 
                  </div>

                  <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-2.jpg')" }}>
                    </div>
                  
                  </div>

                   <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-3.jpg')" }}>
                    </div>
                  
                  </div>

                   <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-4.jpg')" }}>
                    </div>
                  
                  </div>

                   <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-5.jpg')" }}>
                    </div>
                  
                  </div>

                   <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-6.jpg')" }}>
                    </div>
                  
                  </div>

                   <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-7.jpg')" }}>
                    </div>
                  
                  </div>

                   <div className="owl-item">
                     
                    <div className="gallery_slider_column" style={{ backgroundImage: "url('/outdoor-gallery-8.jpg')" }}>
                    </div>
                  
                  </div>
                  </Slider>


                {/* </div>
              </div>
            </div> */}

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
    )
}

export default Gallery
