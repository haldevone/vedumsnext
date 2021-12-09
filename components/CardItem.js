import styles from "../styles/Cards.module.css";
import Image from "next/image";

const CardItem = (props) => {
    return ( 
        <li className={styles["cards-item"]}>
            <div className={styles["cards-item-link"]}>
                <div className={styles["cards-item-info"]}>
                    <h3>
                        {props.text}
                    </h3>
                </div>
                <Image className={styles["cards-item-img"]} src={props.src} alt="" />
            </div>
            
        </li>
     );
}
 
export default CardItem;