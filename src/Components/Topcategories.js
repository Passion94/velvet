import React, { Component } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";





function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }







  export default class CustomArrows extends Component {
    render() {
      const settings = {
        
        infinite: true,
        
        slidesToShow: 2,
        speed: 500,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                className: "center",
                centerMode: true,
            //    centerPadding: "-120px",
                slidesToScroll: 1,
                
                infinite: true,
                dots: false,
                nextArrow: <SampleNextArrow />,
                prevArrow: <SamplePrevArrow />,
                
                

              },

                
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 2,
                      initialSlide: 2
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                    }
                  }
      ]
              }
  return (

    <div>
       <div className="top-categories-header" >
            <h1> Top Categories</h1>
         </div>
        <div className="see-all-container">
            <a  className="see-all"href="#"> See all</a>
        </div>


    <Slider {...settings} className="top-categories-image-container">
   
      <div>
       <img src="images/Topcategories-images/image1.svg"/>
       <div className="top-image-text"><span className="top-image-marketing-text"> Marketing</span></div>
      </div>
      <div>
      <img src="images/Topcategories-images/image2.svg"/>
      </div>
      <div>
      <img src="images/Topcategories-images/image3.svg"/>
      </div>
      <div>
      <img src="images/Topcategories-images/image1.svg"/>
      <div className="top-image-text"><span className="top-image-marketing-text"> Marketing</span></div>
      </div>
      <div>
      <img src="images/Topcategories-images/image2.svg"/>
      </div>

    </Slider>

<div className="trying">
    <Slider {...settings} >
   
    <div id="marketing-background-img">
    <h1 className="marketing-img-text">Marketing</h1>
      </div>
      <div id="design-background-img">
      <p>Marketing</p>
      </div>
      <div id="programming-background-img">
      <p>Marketing</p>
      </div>
      <div id="technology-background-img">
      <p>Marketing</p>
      </div>
      <div id="programming-background-img">
      
      </div>
 </Slider>
</div>

    </div>
  );
}}




//     function Topcategories(){
//      return (
//     <div className="top-categories-section" >
//         <div className="top-categories-header" >
//             <h1> Top Categories</h1>
//         </div>
//         <div className="see-all-container">
//             <a  className="see-all"href="#"> See all</a>
          
            
//         </div>
//         <div className="  carousal-section">
//         <div>
//         <img className="carousal carousal1" src="images/carousal1.svg"/>
//         </div>
//         <div>
//         <img className="carousal carousal2" src="images/carousal2.svg"/> 
//         </div>
//         </div>
        
//         <div className="top-categories-img-lg">
//         <div className="top-large-images" id="marketing-background-img"><p className="marketing-img-text">Marketing</p> </div>
//         <div className="top-large-images" id="design-background-img"><p className="marketing-img-text">Design</p></div>
//         <div className="top-large-images" id="programming-background-img"><p className="marketing-img-text">Programming</p></div>
//         <div className="top-large-images" id="technology-background-img"> <p className="marketing-img-text technology-img">Technology</p></div>
//         </div>
        
        
//     <div className="top-categories-image-container">


//         <div className="marketing-image-section">
//              <img src="images/Topcategories-images/image1.svg"/> 
//         <div className="top-image-text"><span className="top-image-marketing-text"> Marketing</span></div>
//         </div>
//         <div>
//             <img src="images/Topcategories-images/image2.svg"/> 
//         </div>
//         <div>
//             <img src="images/Topcategories-images/image3.svg"/> 
//         </div>
//         <div>
//         <img src="images/Topcategories-images/image4.svg"/> 
//         </div>
//         </div>


//         </div>


//     );
// }
// export default Topcategories;