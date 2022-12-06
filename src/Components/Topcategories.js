import React, { Component } from "react";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";



  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "flex", background: "#F77E23",fontSize:"200px",height:"50px", width:"50px", borderRadius:"50%", alignItems:"center",color:"red" }}
        onClick={onClick}
      >
      <ChevronRightOutlinedIcon className="previous" fontSize="30px" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", zIndex:"1" }}
        onClick={onClick}
      >
      <ChevronLeftOutlinedIcon  fontSize="70px" className="next first-arrow"/>
      </div>
    );
  }







  export default function Topcategories()  {

    const settings = {
      classname:  "slider variable-width",
      dots: false,
      infinite: false,
      slidesToShow: 4,
      centerPadding: "60",
      slidesToScroll: 3,
      speed: 500,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      variableWidth: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                className: "center",
                centerMode: true,
                 
                slidesToScroll: 3,
                
                
                infinite: false,
                dots: false,
                
             
                

              },

                
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      initialSlide: 2,
                      variableWidth: true,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                      variableWidth: true,
                      centerPadding: "60",
                      
                    }
                  }
      ]
              }
  return (

    <div>
       <div className="top-categories-header" >
            <p> Top Categories</p>
         </div>
        <div className="see-all-container">
            <a  className="see-all"href="#"> See all</a>
        </div>

<div className=" top-categories-img-sm">
    <Slider {...settings} >
   
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
    </div>

<div className="trying">
    <Slider {...settings} >
   
    <div id="marketing-background-img">
    <div className="Top-image-content">
    <p className="mark">Marketing</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
      <div id="design-background-img">
    <div className="Top-image-content">
    <p className="mark">Design</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark">Programming</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
      <div id="technology-background-img">
        <div className="Top-image-content">
          <p className="mark">Technology</p>
          <p className="hidecontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
          </p>
        </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark">Cooking</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark">Health and Care</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark">Photography</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
 </Slider>
</div>

    </div>
  );
}



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