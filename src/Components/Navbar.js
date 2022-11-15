import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Navbar(){
return (<div >
<div className="navbar">
    <div >
     <span id='bars-container'><MenuOutlinedIcon className='fas fa-bars' fontSize='30px'/><span id='fountain'>Fountain</span></span>
</div>
<div>
 <AccountCircleOutlinedIcon className='far fa-user-circle' fontSize='35px'/>
     </div> 
     <div className='hidden-Navbar-links' style={{width: '91vw'}}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <a className='navbar-links'><h1 id='name' style={{height: '32px', marginRight: '4rem'}}>Fountain</h1></a>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '30rem'}}>
                <a className=''>Home</a>
                <a className=''>Courses</a>
                <a className=''>Instructors</a>
                <a className=''>Schedules</a>
                <a className=''>Contact Us</a>
            </div>
        </div>
     
     
     
     <div className='second-navlink'>
     <a className=' navbar-links1' id='search'><SearchOutlinedIcon style={{margin:"0px",padding:"0px"}}/></a>
     <a className=' navbar-links1' id='login'>Login</a>
     <a className='navbar-links1' id='register'>Register</a>
     </div>
     </div>
     </div>
     </div>
);
}

export default Navbar;
