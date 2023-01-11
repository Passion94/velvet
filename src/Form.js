

function Form(){


    return(
        <div className="form-section">


       
        
<div className="form-images">
<div className="form-dotted-circle"></div>
        <div className="form-close-circle"></div>
<img src ="images/Form-image/image1.svg" className="form-image" />
<img src="images/Form-image/image2.svg" className="form-block-image" />
</div>

<div  className="container">
           
            <form className="form">
                <div className=" name">
                <h1 className="enroll">Enroll For A Course Now.</h1>
                <h1 className="enroll1"> Registration to get notified about new competition and article we publish</h1>
                    <label className="label"  id="nameLabel" ></label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className=" placeholders firstName" 
                        placeholder="Full name"
                        tabIndex="1" 
                    />
                    </div>
                    <div>
                    
                    <label></label>
                    <input  
                        type="email" 
                        id="email" 
                        className=" placeholders email" 
                        placeholder="Email"
                        tabIndex="2"  
                    />
                </div>
                <div>
                <label ></label>
                <input 
                type="placeholder number" 
                name="number"
                id="number"
                className="number"
                placeholder="Phone number"
                
                tabIndex="3" 
                />
                </div>
                <select id="rolldown" value="list">
                    <option className="placehol" value="list"><p><img src="https://media.istockphoto.com/id/1368262824/photo/blurred-motion-of-blue-ocean-wave-crashing-in-golden-light.jpg?s=612x612&w=is&k=20&c=E5S9wmdveERoNGPHLxXD6eKj6K9yc7OGG6TjDVTDEiE=" width="30px" height="30px"/>List of courses goes here</p></option>
                    <option className="placehol" value="arts">Arts Studies</option>
                    <option className="placehol" value="education"> Education Studies</option>
                    <option className="placehol" value="computer"> Computer Science</option>
                    <option className="placehol" value="management"> Management Education</option>
                    <option className="placehol" value="health"> Health Sciences</option>
                    <option className="placehol" value="engineering"> Enginerring</option>
                </select>

                <input type="submit" value="Register" />
            </form>
        </div>
</div>




    );
}
export default Form;