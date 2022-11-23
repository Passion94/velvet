

function Topcategories(){
    return (
<div className="top-categories-section" >
        <div className="top-categories-header" >
            <h1> Top Categories</h1>
        </div>
        <div className="see-all-container">
            <a  className="see-all"href="#"> See all</a>
          
            
        </div>
        <div className="  carousal-section">
        <div>
        <img className="carousal carousal1" src="images/carousal1.svg"/>
        </div>
        <div>
        <img className="carousal carousal2" src="images/carousal2.svg"/> 
        </div>
        </div>
        
        <div className="top-categories-img-lg">
        <div className="top-large-images" id="marketing-background-img"><p className="marketing-img-text">Marketing</p> </div>
        <div className="top-large-images" id="design-background-img"><p className="marketing-img-text">Design</p></div>
        <div className="top-large-images" id="programming-background-img"><p className="marketing-img-text">Programming</p></div>
        <div className="top-large-images" id="technology-background-img"> <p className="marketing-img-text technology-img">Technology</p></div>
        </div>
        
        
    <div className="top-categories-image-container">


        <div className="marketing-image-section">
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
        <img src="images/Topcategories-images/image4.svg"/> 
        </div>
        </div>


        </div>


    );
}
export default Topcategories;