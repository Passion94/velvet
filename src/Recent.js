
function Recent(){


    return(
<div className="recent">

<h1 className="top-categories-header"> Recent Publications</h1>
<div>
<div className="see-all-container">
<a className="see-all" href="#"> See all</a>
</div>
<div className="popular-image-section">
<div className="popular-img-text">
<div><img className="popular-image popular-image1" src="images/Popular/image1.svg"/></div>
<p className="popular-image-text"> Nature of<br/> Science</p>
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
</div>

    );

}
export default Recent;