
import Avatar from "./Avatar";
import Details from "./Details";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

function Card(props) {
  return (
    
    
    <div className="card">
        
        <Avatar img={props.img} />
        <div className="header-name">
        <div id="head">
        <p >{props.name}</p>
        </div>
        <div className="rate" >
        <StarBorderIcon className="icons people" fontSize="10px"/>
        <Details detailInfo={props.rate} />
        </div>
      
        </div>
        <div className="npp-container">
        <Details detailInfo={props.weeks}/>
        <div className="numberofstudents" >
        <PeopleAltOutlinedIcon className="icons people" fontSize="15px"/> 
        <Details detailInfo={props.numberofstudents}/>
        </div>
        <div className="price">
        <Details detailInfo={props.price}/>
        </div>
        </div>
      </div>
      
  );
}

export default Card;

{/* <Avatar img={props.img} />

<p>{props.name}</p>

<StarBorderIcon />

<Details detailInfo={props.rate} />

<Details detailInfo={props.weeks}/>

<PeopleAltOutlinedIcon /> 

<Details detailInfo={props.numberofstudents}/>

<Details detailInfo={props.price}/> */}
