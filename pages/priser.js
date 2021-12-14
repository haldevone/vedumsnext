import Contact from '../components/Contact';
import styles from '../styles/Price.module.css';

const Priser = () => {
    return (
      <div className={styles["pricehome"]}>
            <div className={styles["pricehome-top"]}>
                <div className={`container  ${styles["pricehome-wrapper"]}`}>
                    <h1>Våra Priser</h1>
                    <p>
                        Här är några av våra prisexempel som jämförs med Försäkringskassans 
                        referensprislista. Vi värderar att du som patient kan lita på 
                        att vi håller det vi lovar – rimliga priser.
                    </p>
                    <p>
                        Kliniken är också knuten till Försäkringskassan. Det betyder att 
                        ditt högkostnadsskydd/ersättning från Försäkringskassan även gäller 
                        hos oss.
                    </p>
                    <p>Vi tar emot kort, swish eller faktura.</p>
                </div>
            </div>
            <div className={`container  ${styles["pricehome-wrapper-table"]}`}>
                <table className={styles["pricehome-table"]}>
                    <tr>
                        <td>Basundersökning</td>
                        <td>---kr</td>
                    </tr>
                    <tr>
                        <td>Lagning</td>
                        <td>---kr</td>
                    </tr>
                    <tr>
                        <td>Rotfyllning</td>
                        <td>---kr</td>
                    </tr>
                    <tr>
                        <td>Krona</td>
                        <td>---kr</td>
                    </tr>
                    <tr>
                        <td>Implantat</td>
                        <td>---kr</td>
                    </tr>
                </table>
                <p>
                    Eftersom kostnaden varierar beroende på om det är en eller flera 
                    tänder som ska lagas eller ersättas är priserna ungefärliga. 
                    <br />
                    <br />
                    Efter en första undersökning kan vi presentera kostnaden för just 
                    din behandling, med utgångspunkt från dina förutsättningar och behov.
                </p>
               
            </div>
            <Contact />
      </div>
      );
}
 
export default Priser;