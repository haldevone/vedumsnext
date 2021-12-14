import Head from 'next/head'
import Cards from '../components/Cards';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Image from 'next/image';
import Link from "next/link";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBolt} from "@fortawesome/free-solid-svg-icons"
import {faTooth} from "@fortawesome/free-solid-svg-icons"
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons"
import { useInView } from 'react-intersection-observer';

export default function Home() {
  const { ref, inView, entry } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <>
    <Header />
    <div className={"welcome"} >
      <div className={"container"} ref={ref}>
        <div className={inView ? "welcome-wrapper fadeIn" : "welcome-wrapper hide"} >
          <div className='welcome-wrapper-child'>
            <h1>Välkommen till Vedums Tandvård</h1>
            <p>
              På Vedums Tandvård erbjuds ett komplett tandvårdsutbud - från traditionella 
              undersökningar och förebyggande tandvård, till mer avancerat specialisttandvård. 
              Du hittar våran klinik i Vedum. Du kan enkelt boka en tid genom att kontakta oss på 
              <span> <FontAwesomeIcon icon={faPhoneAlt}/> 0512-40630</span>. 
            </p>
          </div>
         <div className='welcome-wrapper-child'>
          <img src={'/brush.png'} width={400} height={305}/>
         </div>
          
        </div>
      </div>

    </div>
    <div className={"container"}>
      <div className={"index-behandlingar card"} >
        <img className={"index-behandlingar-img"} src={"/allman.jpg"} width={500} height={380}/>
        <div>
          <h1>Behandlingar <FontAwesomeIcon icon={faTooth}/></h1>
          <p>
            Här hittar du mer information om de behandlingar som vi erbjuder.
          </p>
          <Link href="/behandlingar">
            <button className={"btn"} >Läs mer</button>
          </Link>
        </div>  
      </div>
    </div>
    <div className={"welcome"}>
      <div className={"container"}>
          <h1>Akut Tandvård <FontAwesomeIcon icon={faBolt}/></h1>
          <p>
            För dig som söker akut tandvård kan vi snabbt och enkelt hjälpa dig. Det 
            är viktigt att du så snabbt som möjligt uppsöker tandvård vid akuta besvär
            då tandvärken kan bli värre ju längre du går med problemen obehandlade.
            Ta kontakt med oss direkt så ordnar vi en akuttid.
          </p>
      </div>
      </div>
    <Contact />
    </>
  )
}
