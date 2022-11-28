
function Experts(){
    return(
    <div className='expert-container'>




    
        <div  className="experts-image-and-text-container">
        <div>
        <div className="dotted-circle"></div>
        <div className="close-circle"></div>
        <div className="experts-image-container">
            <img id="experts-woman-image" src="images/Experts/image1.png" />
            <img className="expert-block-image"src="images/Experts/image3.svg"/>
            </div>
        </div>
            
            
        <div className="expert-textand-button">
            
            <p> We are <span className="expert-word"> Experts</span><br/> Learning institution</p>
            <p className="expert-textand-button-para"> Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Sit elit, bibendum volutpat<br/> platea mi, adipiscing eget magna. </p>
            <button className=" buttons expert-button"> Enroll Now</button>
        
        </div>
    </div>
    {/* <div> <img src="images/try.svg"/></div> */}
    
    </div>
    
    
    
    );
    }
    
    export default Experts;