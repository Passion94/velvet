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







  export default function Topcategories()  {

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

    <div>
       <div className="top-categories-header" >
            <p> Popular Examinations</p>
         </div>
        <div className="see-all-container">
            <a  className="see-all"href="#"> See all</a>
        </div>

        <div className="popular-image-section">
    <Slider {...settings} >
   
   
<div className="popular-img-text">
<div><img className="popular-image popular-image1" src="images/Popular/image1.svg"/></div>
<p className="popular-image-text"> Nature of<br/>Science</p>
</div>
<div className="popular-img-text">
<div><img className="popular-image popular-image2" src="images/Popular/image2.svg"/></div>
<p className="popular-image-text nature-text"> 2022<br/> Astro Report</p>
</div>
<div className="popular-img-text">
<div><img className="popular-image popular-image3" src="images/Popular/image3.svg" style={{heigt:"20%"}}/></div>
<p className="popular-image-text data-text "> Data Analysis<br/> with Python</p>
</div>
<div className=" popular-advanced popular-img-text">
<div ><img className="popular-image popular-image4" src="images/Popular/image4.svg"/></div>
<p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
</div>
<div className=" popular-advanced popular-img-text">
<div ><img className="popular-image popular-image1" src="images/Popular/image1.svg"/></div>
<p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
</div>
<div className=" popular-advanced popular-img-text">
<div ><img className="popular-image popular-image2" src="images/Popular/image1.svg"/></div>
<p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
</div>
<div className=" popular-advanced popular-img-text">
<div ><img className="popular-image popular-image3" src="images/Popular/image1.svg"/></div>
<p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
</div>


    </Slider>
    </div>
    <p className=" competate"> Competate with various scholars around the globe</p>
</div>);}

{/* <div className="trying">
    <Slider {...settingss} >
   
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
    <p className="mark">Marketing</p>
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

 */}








































{/* function Popular(){


    return(
<div className="popular-section-container">
<h1 className="top-categories-header"> Popular Examinations</h1>
<div>
<div className="see-all-container">
<a className="see-all" href="#"> See all</a>
</div>
<div className="popular-image-section">
<div className="popular-img-text">
<div><img className="popular-image popular-image1" src="images/Popular/image1.svg"/></div>
<p className="popular-image-text"> Nature of<br/>Science</p>
</div>
<div className="popular-img-text">
<div><img className="popular-image popular-image2" src="images/Popular/image2.svg"/></div>
<p className="popular-image-text nature-text"> 2022<br/> Astro Report</p>
</div>
<div className="popular-img-text">
<div><img className="popular-image popular-image3" src="images/Popular/image3.svg" style={{heigt:"20%"}}/></div>
<p className="popular-image-text data-text "> Data Analysis<br/> with Python</p>
</div>
<div className=" popular-advanced popular-img-text">
<div ><img className="popular-image popular-image4" src="images/Popular/image4.svg"/></div>
<p className="popular-image-text advanced-text"> Advanced<br/> UX Designs</p>
</div>
<div >
 <img className="smbreaks"  src="images/Topcategories-images/image4.svg"/> 
 </div>


</div>
</div>
<h1 className="top-categories-header competate"> Competate with various scholars around the globe</h1>
</div>

    );

}
export default Popular; */}