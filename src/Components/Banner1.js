import ArrowUpwardOutlinedIcon from '@mui/icons-material/ArrowUpwardOutlined';

function Banner1(){
    return(
        <div className=" banner-text">


<p className="banner-text-header">A Classical Education <br/>for the Future</p>
<p className=" banner-text-paragraph">  We prepare you to engage in the world<br className="smbreaks"/> that is to and help bring<br className="lgbreaks"/>about a world<br className="smbreaks"/> that ought to be</p>
<button className=" buttons banner1-button"> Get started</button>
<div className='restart-container'>
        <ArrowUpwardOutlinedIcon className='restart' fontSize='50px' input type="reset"/>
        </div>
</div>
    );
}
export default Banner1;