
import React, {useState} from 'react';
import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';


function Banner1(){
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
        

    return(
        <div className=" banner-text">


<p className="banner-text-header">A Classical Education <br/>for the Future</p>
<p className=" banner-text-paragraph">  We prepare you to engage in the world<br className="smbreaks"/> that is to and help bring<br className="lgbreaks"/>about a world<br className="smbreaks"/> that ought to be</p>
<button className=" buttons banner1-button"> Get started</button>
<div className='restart-container'>
        {/* <ArrowUpwardOutlinedIcon    fontSize='50px'  /> */}
        <img className='restart-button' src='images/restart.svg' onClick={scrollToTop}/>
        </div>
</div>
    );
}

export default Banner1;