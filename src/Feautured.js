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







  export default function Featured()  {

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
                      variableWidth: false,
                      // centerPadding: "60",
                      
                    }
                  },
                  {
                    breakpoint: 411,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      variableWidth: false,
                      centerPadding: "60"
                      
                    }
                  }
      ]
              }
  return (

    <div>
       <div className="top-categories-header" >
            <p> Featured Competition</p>
         </div>
        <div className="see-all-container">
            <a  className="see-all"href="#"> See all</a>
        </div>

{/* <div className=" top-categories-img-sm slide-flex-topsm-image">
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
      <div className="top-image-text"><span className="top-image-marketing-text"> Design</span></div>
      </div>
      <div>
          <img src="images/Topcategories-images/image1.svg"/>
      <div className="top-image-text"><span className="top-image-marketing-text"> cooking</span></div>
      </div>
      <div>
          <img src="images/Topcategories-images/image1.svg"/>
      <div className="top-image-text"><span className="top-image-marketing-text"> Programming</span></div>
      </div>
      <div>
          <img src="images/Topcategories-images/image1.svg"/>
      <div className="top-image-text"><span className="top-image-marketing-text"> Health and Care</span></div>
      </div>

    </Slider>
    </div> */}

<div className="trying">
    <Slider {...settings} >
   
    <div id="marketing-background-img">
    <div className="Top-image-content ftic">
    <p className="mark ftic markc">Marketing Contest</p>
    <p className="hidecontent">
    <p> The Future Economy</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
    </div>
      </div>
      <div id="design-background-img">
    <div className="Top-image-content">
    <p className="mark ftic"> UI/UX Design Contest</p>
    <p className="hidecontent">
    <p> Accessibilty in design</p>
    
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
    </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark ftic">Programming Contest</p>
    <p className="hidecontent">
    <p> The Future of AI</p>
          
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
    </div>
      </div>
      <div id="technology-background-img">
        <div className="Top-image-content">
          <p className="mark ftic">Photography<br/> Contest</p>
          <p className="hidecontent">
          <p> The Beauty of Art</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
        </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark ftic">Biology <br/>Contest</p>
    <p className="hidecontent">
    <p> Our Nature</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
    </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark ftic">Data Analysis Contest</p>
    <p className="hidecontent">
    <p> Comparative Data</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
    </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark ftic">Content Writing<br/> Contest</p>
    <p className="hidecontent">
    <p> The Magic Pen</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
    </div>
      </div>
 </Slider>
</div>

    </div>
  );
}







{/* <div className=" top-categories-img-sm">
    <Slider {...settings} >
   
      <div>
          <img src="images/Topcategories-images/image1.svg"/>
       <div className="top-image-text"><span className="top-image-marketing-text"> Marketing </span></div>
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
    </div> */}

{/* <div className="trying">
    <Slider {...settings} >
   
    <div id="marketing-background-img">
    <div className="Top-image-content">
    <p className="mark">Marketing Contest</p>
    <p className="hidecontent">
    <p> The Future Economy</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>
    </div>
      </div>
      <div id="design-background-img">
    <div className="Top-image-content">
    <p className="mark">UI/Ux Design Contest</p>
    <p className="hidecontent">
    <p> Accessibilty in design</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>    
    </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark">Programming Contest</p>
    <p className="hidecontent">
    <p> The Future of AI</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>    
    </div>
      </div>
      <div id="technology-background-img">
        <div className="Top-image-content">
          <p className="mark">Technology Contest</p>
          <p className="hidecontent">
          <p> The Beauty of Art</p>
    <p><span>Eligibelity:</span>  for designers</p>
    <p><span>Price:</span> $60</p>
    <p><span>Deadline:</span>  26/8/2022</p>
    </p>   
        </div>
      </div>
      <div id="programming-background-img">
    <div className="Top-image-content">
    <p className="mark">Photography Contest</p>
    <p className="hidecontent">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim commodo lectus, ut convallis erat sodales eget. Aliquam malesuada est at hendrerit porttitor. Etiam placerat, sem non rhoncus laoreet, dolor nibh varius lectus, in dignissim nulla felis eget odio. Curabitur.
    </p>
    </div>
      </div>
 </Slider>
</div>
*/}
 


































// function Feautured(){
//     return (
// <div className="top-categories-section" >
//         <div className="top-categories-header" >
//             <h1 id="feat-head"> Featured Competition</h1>
//         </div>
//         <div className="see-all-container">
//             <a  className="see-all"href="#"> See all</a>
//         </div>
//         <div className="top-categories-img-lg">
//         <div className="top-large-images" id="marketing-background-img"><p className="featured-img-text">Marketing<br/> Contest</p><p className="featured-para-text">The Future Economy</p></div>
//         <div className="top-large-images" id="design-background-img"><p className="featured-img-text">UI/UX Design<br/> Contest</p><p className="featured-para-text">Accessibility in design</p></div>
//         <div className="top-large-images" id="programming-background-img"><p className="featured-img-text">Programming<br/> Contest</p><p className="featured-para-text">The Future of AI</p></div>
//         <div className="top-large-images" id="technology-background-img"><p className="featured-img-text">Photography<br/> Contest</p> <p className="featured-para-text">The Beauty of Art</p></div>
//         </div>

//     <div className="top-categories-image-container">


//         <div style={{position:"relative"}}>
//              <img src="images/Featured/image1.svg"/> 
//         <div className="top-image-text"><span className="marketing-contest"> Marketing Contest</span></div>
//         </div>
//         <div>
//             <img src="images/Featured/image2.svg"/> 
//         </div>
//         <div>
//             <img src="images/Featured/image3.svg"/> 
//         </div>
//         <div>
//         <img src="images/Topcategories-images/image4.svg"/> 
//         </div>
//         </div>


//         </div>


//     );
// }
// export default Feautured;