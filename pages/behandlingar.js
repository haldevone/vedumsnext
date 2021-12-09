import styles from '../styles/About.module.css';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTooth} from "@fortawesome/free-solid-svg-icons"
import Contact from '../components/Contact';


const Behandlingar = () => {
    return ( 
        <div className={styles.about}>
            <img src={"/akut.jpg"}/>
            <div className={styles["about-content"]}>
                <div className={"container"}>
                <h1>Behandlingar <FontAwesomeIcon icon={faTooth}/></h1>
                <p>
                    Vedums Tandvård är en modern kliniker som erbjuder kompetenta och professionella 
                    tandläkare och tandhygienister med lång erfarenhet inom tandvården. 
                </p>
                <p>
                Vi erbjuder allt från rutinundersökningar och akuttandvård till specialisttandvård
                    och estetisk tandvård som till exempel tandreglering och tandblekning.
                </p>
                </div>
               
            </div>
            
            <h3>Vi kan hjälpa dig med</h3>
            <div className={styles["behandlingar"]}>
                <div className={styles["behandlingar-container"]}>
                    <ul>
                        <li>Allmän tandvård</li>
                        <li>Akuttandvård</li>
                        <li>Avtagbara proteser</li> 
                        <li>Behandling av tandvårdsrädda</li>
                        <li>Estetisk tandvård</li>
                        <li>Konserverande behandling</li>
                    </ul>
                </div>
               <div className={styles["behandlingar-container"]}>
                <ul>
                        
                        <li>Kronor och broar</li>
                        <li>Implantatbehandlingar</li>
                        <li>Käkleds- och muskulär behandling</li>
                        <li>Rotbehandling</li>
                        <li>Tandlossningsbehandling</li>
                    </ul>
               </div>
               
            </div>
            <Contact />    
        </div>
     );
}
 
export default Behandlingar;