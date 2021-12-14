import styles from "../styles/Header.module.css";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons"


const slideImages = [
    {
      url: '/slideTwo.jpg',
      caption: 'Slide 1'
    },
    {
      url: '/slideThree.jpg',
      caption: 'Slide 2'
    },
    {
        url: '/slideFour.jpg',
        caption: 'Slide 3'
      },
  ];

const Header = () => {
    return ( 
        <div className={styles["slider-frame"]}>
             <div className={styles["slider-overlay"]}>
                 <div className={styles["slider-overlay-content"]}>
                     <div className={`${styles['header-info']} ${styles.animateOnStart}`}>
                        <h1>Vedums Tandvård</h1>
                        <p>Vi erbjuder allmän vuxen- och barntandvård</p>
                     </div>
                     <div className={styles["phone"]}>
                        <span> <FontAwesomeIcon icon={faPhoneAlt}/> 0512-40630</span>
                    </div>
                 </div>
             </div>
             
            <Slide duration={4000} arrows={false}>
                {slideImages.map((slideImage, index)=> (
                    <div className={styles["slider-image"]} key={index}>
                        <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                            {/* <span>{slideImage.caption}</span> */}
                        </div>
                    </div>
                ))} 
            </Slide>
            {/* <div className={styles['headerhome-wrapper']}>
                <div className={styles['headerhome-container']}>
                   
                </div>
            </div> */}
        </div>
     );
}
 
export default Header;