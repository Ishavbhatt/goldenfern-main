import React from 'react'
import Slider from "react-slick";
import Head from 'next/head';



function Attractionactivities() {
  const attraction = {   
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    };

  const activty = {   
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };


    return (
        <>

         <Head>
          <title>Popular Places & Activities in Shimla | Golden Fern Resort</title>
          <meta property="og:title" content="Popular Places & Activities in Shimla | Golden Fern Resort" />
          <meta property="og:description" content="Check out the most popular and attractive locations within Shimla to visit and also some exciting sports and activities to take part in | Golden Fern Resort" />              
          </Head> 




<section className="common_page_header common_padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 col-md-10 col-sm-12 common_page_header_title">
              <h1 className="common_title  white">Attraction & Activities</h1>
              <p>There are not enough words to describe the charm that transpires in the hotel rooms and public areas. Make a tour, wherever you are.</p>
            </div>               
          </div>
        </div>setattractiontings
</section>

<section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
             <div className="col-md-12 col-sm-12 text-left">
               <h2 className="common_title color_white">Attraction</h2>
             </div>

              <div className="col-md-12">
            {/* <div className="owl-carousel owl-theme owl-loaded attraction_slider" >
              <div className="owl-stage-outer">
                <div className="owl-stage"> */}
               
<Slider {...attraction}>

                  
                    <div className="attraction_column item_1">
                      <div className="attraction_column_title">
                        <h3>The Ridge</h3>
                        <p>The Ridge road is a large open space, located in the center of Shimla. The Ridge is the hub of all cultural activities of Shimla. It runs east to west alongside Mall Road. It is only 18 minutes distance from us.</p>
                      </div>
                    </div>
                  

                  
                    <div className="attraction_column item_2">
                      <div className="attraction_column_title">
                        <h3>Jakhu Temple</h3>
                        <p>Jakhu Temple is Dedicated to Lord Hanuman, it houses a 108-foot-tall idol of the deity. It offers sweeping views of the Shivalik ranges. The temple is situated at Jakhu Hills about 2.5 km away from the Ridge in Shimla.</p>
                      </div>
                    </div>
                

                   <div className="owl-item">
                    <div className="attraction_column item_3">
                      <div className="attraction_column_title">
                        <h3>Fagu</h3>
                        <p>Fagu is Cuddling in the Majestic Himalayan Range. This place looks magical as it is always enveloped in snow & fog. The clouds are so close to the surface that at times it feels as if you are walking on clouds. </p>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="attraction_column item_2">
                      <div className="attraction_column_title">
                        <h3>Jakhu Temple</h3>
                        <p>Jakhu Temple is Dedicated to Lord Hanuman, it houses a 108-foot-tall idol of the deity. It offers sweeping views of the Shivalik ranges. The temple is situated at Jakhu Hills about 2.5 km away from the Ridge in Shimla.</p>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="attraction_column item_3">
                      <div className="attraction_column_title">
                        <h3>Fagu</h3>
                        <p>Fagu is Cuddling in the Majestic Himalayan Range. This place looks magical as it is always enveloped in snow & fog. The clouds are so close to the surface that at times it feels as if you are walking on clouds. </p>
                      </div>
                    </div>
                  </div>

                {/* </div>
              </div>
            </div> */}
            </Slider>
          </div>

          </div>
        </div>

</section>

<section className="attraction_section common_padding pt-0">
        <div className="container">
          <div className="row">
             <div className="col-md-12 col-sm-12 text-left">
               <h2 className="common_title color_white">Activities</h2>
             </div>

              <div className="col-md-12">
            {/* <div className="owl-carousel owl-theme owl-loaded activities_slider" >
              <div className="owl-stage-outer">
                <div className="owl-stage"> */}

<Slider {...activty}>

                  <div className="owl-item">
                    <div className="attraction_column item_4">
                      <div className="attraction_column_title">
                        <h3>Trekking Tour</h3>
                        <p>Himachal Pradesh is a state in Northern India. Literally translated it means in the Lap of Himalayas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="attraction_column item_5">
                      <div className="attraction_column_title">
                        <h3>Cycling Tour</h3>
                        <p>These biking routes cater congenial bike ride experience in the midst of arresting backdrop.</p>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="attraction_column item_4">
                      <div className="attraction_column_title">
                        <h3>Trekking Tour</h3>
                        <p>Himachal Pradesh is a state in Northern India. Literally translated it means in the Lap of Himalayas.</p>
                      </div>
                    </div>
                  </div>

                  <div className="owl-item">
                    <div className="attraction_column item_5">
                      <div className="attraction_column_title">
                        <h3>Cycling Tour</h3>
                        <p>These biking routes cater congenial bike ride experience in the midst of arresting backdrop.</p>
                      </div>
                    </div>
                  </div>

                {/* </div>
              </div>
            </div> */}
            </Slider>
          </div>

          </div>
        </div>

</section>


  
        </>
    )
}

export default Attractionactivities
