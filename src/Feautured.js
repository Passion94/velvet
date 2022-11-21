

function Feautured(){
    return (
<div className="top-categories-section" >
        <div className="top-categories-header" >
            <h1 id="feat-head"> Featured Competition</h1>
        </div>
        <div className="see-all-container">
            <a  className="see-all"href="#"> See all</a>
        </div>
        <div className="top-categories-img-lg">
        <div className="top-large-images" id="marketing-background-img"><p className="featured-img-text">Marketing Contest</p><p className="featured-para-text1">The Future Economy</p></div>
        <div className="top-large-images" id="design-background-img"><p className="featured-img-text">UI/UX Design Contest</p><p className="featured-para-text">Accessibility in design</p></div>
        <div className="top-large-images" id="programming-background-img"><p className="featured-img-text">Programming Contest</p><p className="featured-para-text">The Future of AI</p></div>
        <div className="top-large-images" id="technology-background-img"><p className="featured-img-text">Photography Contest</p> <p className="featured-para-text">The Beauty of Art</p></div>
        </div>

    <div className="top-categories-image-container">


        <div style={{position:"relative"}}>
             <img src="images/Featured/image1.svg"/> 
        <div className="top-image-text"><span className="marketing-contest"> Marketing Contest</span></div>
        </div>
        <div>
            <img src="images/Featured/image2.svg"/> 
        </div>
        <div>
            <img src="images/Featured/image3.svg"/> 
        </div>
        <div>
        <img src="images/Topcategories-images/image4.svg"/> 
        </div>
        </div>


        </div>


    );
}
export default Feautured;