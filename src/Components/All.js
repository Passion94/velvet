import Card from "./Card";
import contacts from "./contacts";
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';

function createCard(contacts) {
  return (
    <Card
      key={contacts.id}
      img={contacts.imgURL}
      name={contacts.name}
      rate={contacts.rate}
      weeks={contacts.weeks}
      numberofstudents={contacts.numberofstudents}
      price={contacts.price}
    />
  );
}

function All() {
  return (
    <div> 
    <h1 id="all-main-header"> Explore Our Popular Course</h1>
    <div id="sortby-container">
    <a id="sortby"><ExpandMoreOutlinedIcon/> Sort by</a>
    </div>
    <div className="all-cards" >
    
    {contacts.map(createCard)}
    
    
   
     
      

      {/* <Card
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
    </div>
  );
}

export default All;
