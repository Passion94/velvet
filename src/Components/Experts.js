
function Experts(){
    return(
       <div className="expert-backdrop">
    <div className='expert-container'>




    
        <div  className="experts-image-and-text-container">
        <div className="expert-circle-image " id="etab">
        <div className="dotted-circle"></div>
        <div className="close-circle"></div>
        <div className="experts-image-container" >
            <img id="experts-woman-image" src="images/Experts/image1.png" />
            <img className="expert-block-image"src="images/Experts/image3.svg"/>
            </div>
        </div>
            
            
        <div className="expert-textand-button ">
            
            <p> We are <span className="expert-word"> Experts</span> Learning institution</p>
            <p className="expert-textand-button-para"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit elit, bibendum volutpat platea mi, adipiscing eget magna. Eu nulla ut urna venenatis velit et tincidunt. Id vitae velit  </p>
            <button className=" buttons enroll-button "> Enrol Now</button>
        
        </div>
    </div>
    {/* <div> <img src="images/try.svg"/></div> */}
    
    </div>
    
    </div>
    
    );
    }
    
    export default Experts;