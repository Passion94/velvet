import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import React, { Component } from "react";
import Slider from "react-slick";
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';



function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        // style={{ ...style, display: "flex", background: "#F77E23",fontSize:"200px",height:"50px", width:"50px", borderRadius:"50%", alignItems:"center",color:"red" }}
        onClick={onClick}
      >
      <ChevronRightOutlinedIcon className=" Expandcircledown1"  fontSize="30px" />
      </div>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div className="expandCircledown-container"
        // className={className}
        style={{ ...style, display: "block", zIndex:"1" }}
        onClick={onClick}
      >
      <ChevronLeftOutlinedIcon  fontSize="70px" className=" Expandcircledown2 "/>
      </div>
    );
  }










export default class Responsive extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: false,
            
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className='lgreview-flex-section'>  <div><h2 id="smreview-header"> What Our <span className='student'>Students</span> <br/>Say About Us</h2> </div>  
 
         </div>

       <div> <h1 id="hidereview-header"> Reviews</h1>       </div>
<div className='review-flex-container'>
       <div className="one">
            <h2 id="lgreview-header"> What Our <br/><span className='student'>Students</span> Say<br/> About Us</h2>
            
            
            </div>
        </div> 

        <Slider className="review-flex-container" {...settings}>

       
          
         
        <div className="two">
       
               <div className="sub-flex-container">
       
                 <div>
                       <img className='review-image'  src="images/Reviews/image1.svg"/>
                   </div>
       
                 <div>
                       <p className="review-name"> Mohh Jumah<br/> <span className='reviewjob'>Senior Developer</span></p>
                       
                   </div>
       
               </div>
       
              
               <div>
                   <p className='review-para' > Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
               </div>
               </div>
         
               <div className="three">
        <div className="sub-flex-container">
        <div> 
        <img className='review-image' src="images/Reviews/image2.svg"/> 
        </div> 
        <div>
            <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p>         
            </div>        
            </div>
            <div>
            <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
            </div>
        </div>
          
        <div className="three">
        <div className="sub-flex-container">
        <div> 
        <img className='review-image' src="images/Reviews/image2.svg"/> 
        </div> 
        <div>
            <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p>         
            </div>        
            </div>
            <div>
            <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
            </div>
        </div>
          
        <div className="three">
        <div className="sub-flex-container">
        <div> 
        <img className='review-image' src="images/Reviews/image2.svg"/> 
        </div> 
        <div>
            <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p>         
            </div>        
            </div>
            <div>
            <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
            </div>
        </div>
          
        <div className="three">
        <div className="sub-flex-container">
        <div> 
        <img className='review-image' src="images/Reviews/image2.svg"/> 
        </div> 
        <div>
            <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p>         
            </div>        
            </div>
            <div>
            <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
            </div>
        </div>
          
        <div className="three">
        <div className="sub-flex-container">
        <div> 
        <img className='review-image' src="images/Reviews/image2.svg"/> 
        </div> 
        <div>
            <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p>         
            </div>        
            </div>
            <div>
            <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
            </div>
        </div>
          
        <div className="three">
        <div className="sub-flex-container">
        <div> 
        <img className='review-image' src="images/Reviews/image2.svg"/> 
        </div> 
        <div>
            <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p>         
            </div>        
            </div>
            <div>
            <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
            </div>
        </div>
          
        <div className="three">
        <div className="sub-flex-container">
        <div> 
        <img className='review-image' src="images/Reviews/image2.svg"/> 
        </div> 
        <div>
            <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p>         
            </div>        
            </div>
            <div>
            <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
            </div>
        </div>
        </Slider>
      </div>
    );
  }
}
               
              
 





















































// function Review (){
    
//     return(
//     <div>
//     <div className='lgreview-flex-section'>
//    <div><h2 id="smreview-header"> What Our <span className='student'>Students</span> <br/>Say About Us</h2> </div>
//     <div className='expandCircledown-container' >
//         <ExpandCircleDownOutlinedIcon className='Expandcircledown1' fontSize='50px'/>

//         <ExpandCircleDownOutlinedIcon className='Expandcircledown2' fontSize='50px' />
//     </div>
//     </div>


//         <div>
//             <h1 id="hidereview-header"> Reviews</h1>
//         </div>

//         <div className="review-flex-container">


//         <div className="one">
//             <h2 id="lgreview-header"> What Our <br/><span className='student'>Students</span> Say About Us</h2>
//             <div lgclassName="lgreview-icons">
//             <ExpandCircleDownOutlinedIcon className='Expandcircledown1' fontSize='50px' />
//             <ExpandCircleDownOutlinedIcon className='Expandcircledown2' fontSize='50px' />
//             </div>
//         </div> 



//         <div className="two">
       
//         <div className="sub-flex-container">

//             <div>
//                 <img className='review-image'  src="images/Reviews/image1.svg"/>
//             </div>

//             <div>
//                 <p className="review-name"> Mohh Jumah<br/> <span className='reviewjob'>Senior Developer</span></p>
                
//             </div>

//         </div>

       
//         <div>
//             <p className='review-para' > Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>
//         </div>
//         </div>

        
//         <div className="three">
//         <div className="sub-flex-container">
//         <div> 
//         <img className='review-image' src="images/Reviews/image2.svg"/> 
//         </div> 
//         <div>
//             <p className="review-name"> John Mark <br/><span className='reviewjob'> Data Analyst</span></p> 
            
//             </div>
            
//             </div>
//             <div>
//             <p className='review-para'> Lorem ipsum dolor sit amet, consectetur sfsg dfc adipiscing elit. Consectetur ac blandit nam massa massa  </p>

//             </div>
//         </div>
        
//         </div>
//         </div>
      
    
//     );
    
//     }
//     export default Review;