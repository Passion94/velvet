
import './index.css';
import Navbar from "./Components/Navbar";
import Banner1 from "./Components/Banner1"
import Livechatsection from "./Components/Livechatsection";
import Topcategories from "./Components/Topcategories";
import Experts from "./Components/Experts";
import All from "./Components/All";
import Popular from "./Components/Popular";
import Form from "./Form";
import Feautured from "./Feautured";
import Publications from "./Publications";
import Recent from "./Recent";
import Review from "./Review";

function App() {
  return (
    <div className='maincontainer'>
    <div className="banner">
  <Navbar/>
  <Banner1/>
  </div>
  <Livechatsection/>
  <Topcategories/>
  <Experts/>
  <All/>
  <Popular/>
  <Form/>
  <Feautured/>
  <Publications/>
  <Recent/>
  <Review/>
  
    </div>
  );
}

export default App;
