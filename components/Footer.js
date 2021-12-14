import Image from "next/image";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"


const Footer = () => {
    return ( 
        <div className="footer" id={"contact"}>
            <FontAwesomeIcon className={"contact-icon"} icon={faFacebook} onClick={() => window.open("https://sv-se.facebook.com/vedumstandvard/")}/>
            <img className={"contact-icon-logo"} src="/Logo.png"/>
            <p>© 2021 Vedums Tandvård</p>
        </div>
     );
}
 
export default Footer;