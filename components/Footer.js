// import logoImg from "../Images/Logo.png";


const Footer = () => {
    return ( 
        <div className="footer" id={"contact"}>
            <div className="footer-wrapper">
                <div className="footer-img">
                    {/* <img src={logoImg} alt="" /> */}
                </div>
                <div className="footer-item">
                    <h3>Kontakta Oss</h3>
                    <p>Vedums Tandvård</p>
                    <p>Bitternavögen 2</p>
                    <p>53 460 Vedum</p>
                    <p>Tel: 0512-40630</p>
                </div>
                <div className="footer-item">
                    <h3>Öppettider</h3>
                    <p>Måndag-Torsdag - 08:00-18:00</p>
                    <p>Fredag - 08:00-15:00</p>
                    <p>Lördag-Söndag - Stängt</p>
                </div>    
            </div>
            <p>© 2021 Vedums Tandvård</p>
        </div>
     );
}
 
export default Footer;