import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';



function Footer(){
    return (
        <footer>
        <div className='footer'>
        <div className="">
        <h5 className="sub-update"> Subscribe to get latest Updates</h5>
<div className="form-sub-section">
      <input type="text" placeholder="Your Email address" name="Subscribe" className='sminputfoot'/>
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

<div className='down-footer'>
<p className='footer-name'> Fountain</p>
<div className='footer-link'>
<a href=""><FacebookOutlinedIcon className='fa'/></a>
<a href=""><i class="fa fa-twitter w3-hover-opacity"></i></a>
<a href=""> <CameraAltOutlinedIcon className='fa'/></a>
<a href=""><i class="fa fa-linkedin w3-hover-opacity"></i></a>
</div>
</div>

<div className='smcontentionarylogo-flex'>
<div>
<img className='smcontentionarylogo' src='images/Contentionarylogo.png'/>
</div>
<div>
<p className='smcontentionarylogoname'> Contentionary</p>
</div>
</div>
<div>
    <p className='powered'>Powered By Contentionary</p>
</div>
</div>









<div className='bgfooter'>


<div className="bgfooter-sub-section">



<div className='bgdown-footer'>
<p className='bgfooter-name'> Fountain</p>
<p className="bgfooter-para"> We are not here to sell you <br/> products, we sell value through<br/> our expertise.</p>
<div className='footer-link'>
<a href=""><FacebookOutlinedIcon className='fa'/></a>
<a href=""><i class="fa fa-twitter w3-hover-opacity"></i></a>
<a href=""> <CameraAltOutlinedIcon className='fa'/></a>
<a href=""><i class="fa fa-linkedin w3-hover-opacity"></i></a>
</div>
</div>




<div className="bgfooter-sub-section-one">
<p><span className="bgaddress"> Address:</span><br/>38 opebi Road, Ikeja, Lagos <br/>State, Nigeia.</p>
<p><span className="bgaddress">Phone:</span><br/> +2349022396389</p>
<p><span className="bgaddress">Email:</span><br/>contact@contentionary.com</p>
</div>



<div>
<p className='bgaddress'> Company</p>
<a className="sub-link" href="#"> About</a>
<a className="sub-link" href="#">Features</a>
<a className="sub-link" href="#">Pricing</a>
</div>
</div>


<div className="bgform-suband-form" >
<div className="bgsub-update">
<h5> Subscribe to get latest Updates</h5>
        </div>
<div className="bgform-sub-section">

      <input type="text" placeholder="Your Email address" name="Subscribe" className='lgfooter-input' style={{color:"#F77E23"}} />
      <button className="bgsmsub-button">Subscribe</button>
    </div>
</div>

<div className='last-footer-side'>

<img class="smcontentionarylogo" src="images/Contentionarylogo.png"/>
<p className='bglogoname'> Contentionary</p>
<p className='bgpowered'> Powered By Contentionary</p>
</div>

</div>

        </footer>
    );
}
export default Footer;