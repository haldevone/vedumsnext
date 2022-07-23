import Image from "next/image";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import Link from "next/link";


const Footer = () => {
    return ( 
        <div className="footer" id={"contact"}>
                <FontAwesomeIcon 
                    className={"contact-icon"}
                    size="5x" 
                    icon={faFacebook} onClick={() => 
                    window.open("https://sv-se.facebook.com/vedumstandvard/")}/>
            <Link href={"/"}>
                <img className={"contact-icon-logo"} src="/Logo.png"/>
            </Link>
            <div className="footer-bottom">
                <p>© Made by Haldevone</p>
                <p>{`${new Date().getFullYear()}  Vedums Tandvård`}</p>
            </div>
        </div>
     );
}
 
export default Footer;