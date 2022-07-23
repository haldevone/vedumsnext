import Contact from '../components/Contact';
import Map from '../components/Map';
import styles from '../styles/About.module.css';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUsers} from "@fortawesome/free-solid-svg-icons"
import { useInView } from 'react-intersection-observer';


const About = () => {
    const { ref, inView, entry } = useInView({
        threshold: 0.4,
        triggerOnce: true,
      });

    return (
        <> 
        <div className={styles.about}>
            <img src={"/about.jpg"}/>
            <div className={styles["about-content"]} ref={ref}>
                <div className={inView ? "container fadeIn" : "container hide"}>
                    <h2>Om Oss <FontAwesomeIcon icon={faUsers}/></h2>
                    <p>Vi är en liten klinik med två allmäntandläkare som är nischade inom estetisk 
                        tandvård, en specialisttandläkare inom tandlossning och en 
                        specialisttandläkare inom käkkirurgi.
                    </p>
                    <p>
                        Vi utför alla vanliga behandlingar så som lagningar, rotfyllning, 
                        kronor, broar, proteser, tandstensborttagning och tandblekning, 
                        men även vissa specialist behandlingar som kirurgi och implantat.
                    </p>
                    <p>Varmt välkommen in till oss!</p>
                    <div>

                    </div>
                </div>
               
            </div>
           
        </div>
        <Map />
        <Contact/>
        </>
     );
}
 
export default About;