import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';



function Footer(){
    return (
        <footer>
        <div className="footer">
        <h5 className="sub-update"> Subscribe to get latest Updates</h5>
<div className="form-sub-section">
      <input type="text" placeholder="Your Email address" name="Subscribe"/>
      <button className="smsub-button">Subscribe</button>
    </div>
</div>


<div className="footer-sub-section">

<div className="footer-sub-section-one">
<p><span className="address"> Address:</span><br/>38 opebi Road, Ikeja, Lagos <br/>State, Nigeia.</p>
<p><span className="address">Phone:</span><br/> +2349022396389</p>
<p><span className="address">Email:</span><br/>contact@contentionary.com</p>
</div>



<div>
<p> Company</p>
<a className="sub-link" href="#"> About</a>
<a className="sub-link" href="#">Features</a>
<a className="sub-link" href="#">Pricing</a>
</div>
</div>

<div>
<p> Fountain</p>
<a href=""><FacebookOutlinedIcon/></a>
<a href=""><i class="fa fa-twitter w3-hover-opacity"></i></a>
<a href=""> <CameraAltOutlinedIcon/></a>
<a href=""></a>

</div>


        </footer>
    );
}
export default Footer;