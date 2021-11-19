import { useState } from "react";
// import imgLogo from "../Images/Logo.png";
import Link from "next/link";



function Navbar(){

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
        <>
        <div className="nav">
            <div className="nav-container">
                {/* <Link href="/" onClick={closeMobileMenu}> */}
                    {/* {<img src={imgLogo} alt="" />} */}
                {/* </Link> */}
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                     <li className="nav-item">
                        <Link href="/" onClick={closeMobileMenu}>
                            <a className="nav-links">Hem</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/treatments" onClick={closeMobileMenu}>
                            <a className="nav-links">Behandlingar</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  href="/price" onClick={closeMobileMenu}>
                           <a className="nav-links">Priser</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className="nav-links" onClick={closeMobileMenu}>
                            <a className="nav-links">Om Oss</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;