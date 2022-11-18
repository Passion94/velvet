

function Form(){


    return(
        <div className="form-section">


        <div className="form-dotted-circle"></div>
        <div className="form-close-circle"></div>
        
<div classname="form-images">
<img src ="images/Form-image/image1.svg" className="form-image" />
<img className="form-block-image"src="images/Experts/image3.svg"/>
</div>

<div  className="container">
           
            <form className="form" >
                <div className="name">
                <h1 className="enroll">Enroll For A Course Now.</h1>
                <h1 className="enroll1"> Registration to get notified about new competition and article we publish</h1>
                    <label className="label"  id="nameLabel" ></label>
                    <input
                     
                        type="text" 
                        id="firstName" 
                        name="firstName"
                        className="firstName" 
                        placeholder="Full name"
                        tabIndex="1" 
                    />
                    </div>
                    <div>
                    
                    <label></label>
                    <input  
                        type="email" 
                        id="email" 
                        className="email" 
                        placeholder="Email"
                        tabIndex="2"  
                    />
                </div>
                <div>
                <label ></label>
                <input 
                type="number" 
                name="number"
                id="number"
                className="number"
                placeholder="Phone number"
                
                tabIndex="3" 
                />
                </div>
                <select id="rolldown">
			<option value= "list"> List of courses goes here</option>
			<option value= "arts">Arts Studies</option>
			<option value= "education"> Education Studies</option>
			<option value= "computer"> Computer Science</option>
			<option value= "management"> Management Education</option>
			<option value= "health"> Health Sciences</option>
			<option value= "engineering"> Enginerring</option>
</select>

                <input type="submit" value="Register" className=" register"/>
            </form>
        </div>
</div>




    );
}
export default Form;