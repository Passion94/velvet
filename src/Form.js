

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
                    <option className="placeholders" value="list"> List of courses goes here</option>
                    <option className="placeholders" value="arts">Arts Studies</option>
                    <option className="placeholders" value="education"> Education Studies</option>
                    <option className="placeholders" value="computer"> Computer Science</option>
                    <option className="placeholders" value="management"> Management Education</option>
                    <option className="placeholders" value="health"> Health Sciences</option>
                    <option className="placeholders" value="engineering"> Enginerring</option>
                </select>

                <input type="submit" value="Register" />
            </form>
        </div>
</div>




    );
}
export default Form;