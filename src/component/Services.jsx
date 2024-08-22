import "./Services.css";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function Sercvices(){
    return(
        <>
        <div className="service-head">
               <p>Services Offering</p>
            </div>
            <div className="servce-icon">
             <span className="font-icon"><i class="fa-brands fa-react"></i></span>
             <span className="font-icon"><i class="fa-brands fa-react"></i></span>
             <span className="font-icon"><i class="fa-brands fa-react"></i></span>
             <span className="font-icon"><i class="fa-brands fa-react"></i></span>
            </div>
            <div className="icon-name">
                <span>SAAD</span>
                <span>SAAD</span>
                <span>SAAD</span>
                <span>SAAD</span>
            </div>
            <div className="service-good">
               <p>Things I'm Good In <i class="fa-regular fa-thumbs-up fa-2xl"></i></p>
            </div>
            <div className="all-service">
               <p>All Services</p>
               <ArrowForwardIcon/>
            </div>
        </>
    )
}