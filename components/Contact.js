
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import {faClock} from "@fortawesome/free-solid-svg-icons"


const Contact = () => {
    return ( 
        <>
        <div className="contact">
            <div className="contact-item">
                <h3><FontAwesomeIcon icon={faPhoneAlt}/> Kontakta Oss</h3>
                <p>Vedums Tandvård</p>
                <p>Bitternavögen 2</p>
                <p>53 460 Vedum</p>
                <p>Tel: 0512-40630</p>
            </div>
            <div className="contact-item">
                <h3><FontAwesomeIcon icon={faClock}/> Öppettider</h3>
                <p>Måndag-Torsdag - 08:00-18:00</p>
                <p>Fredag - 08:00-15:00</p>
                <p>Lördag-Söndag - Stängt</p>
            </div>    
        </div>
        </>
     );
}
 
export default Contact;