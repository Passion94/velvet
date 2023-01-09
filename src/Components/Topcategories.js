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
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      variableWidth: true,
                      centerPadding: "10",
                      
                    }
                  },
                  {
                    breakpoint: 411,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      variableWidth:false,
                      centerPadding: "60",
                      // centerMode: false
                      
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



<div className="trying">
    <Slider {...settings} >
   
    <div id="marketing-background-img">
    <div className="Top-image-content">
    <p className="mark market">Marketing</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>

      <div id="technology-background-img">
        <div className="Top-image-content">
          <p className="mark tech">Technology</p>
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


      <div id="design-background-img">
    <div className="Top-image-content">
    <p className="mark desi">Design </p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
    
      
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark cook">Cooking</p>
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

      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark health">Health and <span id="care">Care</span> </p>
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


