
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
      <ChevronRightOutlinedIcon className="previous popular-arrow" fontSize="30px" />
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
      <ChevronLeftOutlinedIcon  fontSize="70px" className="next first-arrow popular-left-arrow popular-arrow"/>
      </div>
    );
  }










export default class Responsive extends Component {
  render() {
    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        centerPadding: "60",
        slidesToScroll: 1,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              className: "center",
              centerMode: true,
             
              slidesToScroll: 1,
              slidesToShow: 4,
              infinite: false,
              dots: false,
  
            },
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
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
      };


  
    return (
      <div className="everything-recent">
        <p className="top-categories-header recent-header"> Recent Publications </p>
        <div className="see-all-container">
         <a className="see-all" href="#"> See all</a>
         </div>
        <Slider className="recent-container" {...settings}>
        <div className="popular-img-text">
    <div><img className="popular-image recent-image" src="images/Popular/image1.svg"/></div>
    <p className="popular-image-text "> Nature of<br/> Science</p>
    </div>
    <div className="popular-img-text">
    <div><img className="popular-image recent-image" src="images/Popular/image2.svg"/></div>
    <p className="popular-image-text nature-text"> 2022<br/> Astro Report</p>
    </div>
    <div className="popular-img-text">
    <div><img className="popular-image recent-image" src="images/Popular/image3.svg" style={{heigt:"20%"}}/></div>
    <p className="popular-image-text data-text "> Data Analysis<br/> with Python</p>
    </div>
    <div className="  popular-img-text">
    <div ><img className="popular-image recent-image" src="images/Popular/image4.svg"/></div>
    <p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
    </div>
    <div className="popular-img-text">
     <div><img className="popular-image recent-image" src="images/Popular/image2.svg"/></div>
     <p className="popular-image-text nature-text"> 2022<br/> Astro Report</p>
     </div>
     <div className="popular-img-text">
     <div><img className="popular-image recent-image" src="images/Popular/image3.svg" style={{heigt:"20%"}}/></div>
     <p className="popular-image-text data-text "> Data Analysis<br/> with Python</p>
     </div>
     <div className="  popular-img-text">
     <div ><img className="popular-image recent-image" src="images/Popular/image4.svg"/></div>
     <p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
     </div>
     <div className="popular-img-text">
     <div><img className="popular-image recent-image" src="images/Popular/image2.svg"/></div>
     <p className="popular-image-text nature-text"> 2022<br/> Astro Report</p>
     </div>
     <div className="popular-img-text">
     <div><img className="popular-image recent-image" src="images/Popular/image3.svg" style={{heigt:"20%"}}/></div>
     <p className="popular-image-text data-text "> Data Analysis<br/> with Python</p>
     </div>
     <div className="  popular-img-text">
     <div ><img className="popular-image recent-image" src="images/Popular/image4.svg"/></div>
     <p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
     </div>
        </Slider>
      </div>
    );
  }
}



























// function Recent(){


//     return(
// <div className="recent">

// <h1 className="top-categories-header"> Recent Publications</h1>
// <div>
// <div className="see-all-container">
// <a className="see-all" href="#"> See all</a>
// </div>
// <div className="popular-image-section">
// <div className="popular-img-text">
// <div><img className="popular-image recent-image" src="images/Popular/image1.svg"/></div>
// <p className="popular-image-text "> Nature of<br/> Science</p>
// </div>
// <div className="popular-img-text">
// <div><img className="popular-image recent-image" src="images/Popular/image2.svg"/></div>
// <p className="popular-image-text nature-text"> 2022<br/> Astro Report</p>
// </div>
// <div className="popular-img-text">
// <div><img className="popular-image recent-image" src="images/Popular/image3.svg" style={{heigt:"20%"}}/></div>
// <p className="popular-image-text data-text "> Data Analysis<br/> with Python</p>
// </div>
// <div className=" popular-advanced popular-img-text">
// <div ><img className="popular-image recent-image" src="images/Popular/image4.svg"/></div>
// <p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
// </div>



// </div>
// </div>
// </div>

//     );

// }
// export default Recent;