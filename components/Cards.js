import CardItem from "./CardItem";
import allman from "../public/allman.jpg";
import akut from "../public/akut.jpg";
import styles from "../styles/Cards.module.css";

const Cards = () => {
    return ( 
        <div className={styles.cards} id={"services"}>
            <div className={styles["cards-container"]}>
                <div className={styles["cards-wrapper"]}>
                    <h1 className={styles["cards-wrapper-h1"]}>Behandlingar</h1>
                    <ul className={styles["cards-list"]}>
                        <CardItem
                        src={allman}
                        text="Allmän Tandvård"
                        path="/" />
                        <CardItem
                        src={akut}
                        text="Akut Tandvård"
                        path="/" />
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Cards;