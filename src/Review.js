import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';




function Review (){
    
    return(
    <div>
    <div className='lgreview-flex-section'>
   <div><h2 id="smreview-header"> What Our <span className='student'>Students</span> <br/>Say About Us</h2> </div>
    <div className='expandCircledown-container' >
        <ExpandCircleDownOutlinedIcon className='Expandcircledown1' fontSize='50px'/>

        <ExpandCircleDownOutlinedIcon className='Expandcircledown2' fontSize='50px' />
    </div>
    </div>


        <div>
            <h1 id="hidereview-header"> Reviews</h1>
        </div>

        <div className="review-flex-container">


        <div className="one">
            <h2 id="lgreview-header"> What Our <br/><span className='student'>Students</span> Say About Us</h2>
            <div lgclassName="lgreview-icons">
            <ExpandCircleDownOutlinedIcon className='Expandcircledown1' fontSize='50px' />
            <ExpandCircleDownOutlinedIcon className='Expandcircledown2' fontSize='50px' />
            </div>
        </div> 



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
        
        </div>
        </div>
      
    
    );
    
    }
    export default Review;