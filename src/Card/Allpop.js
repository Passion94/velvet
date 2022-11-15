import Card1 from "./Card1";
import Contactpop from "./Contactpop";


function createCard(Contactpop) {
  return (
    <Card1
      key={Contactpop.id}
      img={Contactpop.imgURL}
      attatchedtext={Contactpop. attatchedtext}
    />
  );
}

function Allpop() {
  return (
    <div> 
    {Contactpop.map(createCard)}
    </div>
   
  );
}

export default Allpop;
