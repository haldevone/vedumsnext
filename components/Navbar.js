import { useState } from "react";
// import imgLogo from "../Images/Logo.png";
import Link from "next/link";
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {faBars} from "@fortawesome/free-solid-svg-icons";


function Navbar(){

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
        <>
        <div className="nav">
            {/* <i><FontAwesomeIcon icon={faTimes}/></i> */}
            <div className="nav-container">
                <div className="nav-logo" onClick={closeMobileMenu}>
                    <Link href="/">
                        <Image src="/Logo.png" width={200} height={60} onClick={closeMobileMenu}/>
                    </Link>
                    
                </div>
                <div className="menu-icon" onClick={handleClick}>
                   {click ? <FontAwesomeIcon icon={faTimes}/>
                    : <FontAwesomeIcon icon={faBars}/>}
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                     <li className="nav-item">
                        <Link href="/">
                            <a className="nav-links" onClick={closeMobileMenu}>Hem</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/behandlingar">
                            <a className="nav-links" onClick={closeMobileMenu}>Behandlingar</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  href="/priser">
                           <a className="nav-links" onClick={closeMobileMenu}>Priser</a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link href="/about" className="nav-links">
                            <a className="nav-links" onClick={closeMobileMenu}>Om Oss</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;