
import './index.css';
import Navbar from "./Navbar";
import Banner1 from "./Banner1"
import Livechatsection from "./Livechatsection";

function App() {
  return (
    <div className='maincontainer'>
    <div className="banner">
  <Navbar/>
  <Banner1/>
  </div>
  <Livechatsection/>
    </div>
  );
}

export default App;
