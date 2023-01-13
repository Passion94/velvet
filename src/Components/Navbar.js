import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar(){
return (<div>

<div className="navbar">
    
        <MenuOutlinedIcon className='fas fa-bars' fontSize='30px'/>
       <div>
       <p id='fountain'>Fountain</p> 
       <div className='fountain--dot--container'>
            <span className='fountain--dot1'></span>
            <span className='fountain--dot2'></span>
            </div>
            </div>
        <AccountCircleOutlinedIcon className='far fa-user-circle' fontSize='35px'/>
       
       
       
   
     


     <div className='hidden-Navbar-links' style={{width: '91vw'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <a className='navbar-links'><h1 id='name'>Fountain</h1></a>
            <div className='fountain--dot--container'>
            <span className='fountain--dot1'></span>
            <span className='fountain--dot2'></span>
            </div>
        
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '30rem'}}>
                <a className='navbar-links2'>Home</a>
                <a className='navbar-links2'>Courses</a>
                <a className='navbar-links2'>Instructors</a>
                <a className='navbar-links2'>Schedules</a>
                <a className='navbar-links2'>Contact Us</a>
            </div>
        </div>
     
     
     
     <div className='second-navlink'>
     <a className=' navbar-links1' > <img src='images/search.svg' id='search'/></a>
     <a className=' navbar-links1' id='login'>Login</a>
     <a className='navbar-links1' id='register'>Register</a>
     </div>
     </div>
     </div>
     </div>
);
}

export default Navbar;
