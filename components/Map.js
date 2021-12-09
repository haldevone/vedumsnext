import Image from "next/image";
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons"

const Map = () => {
    return ( 
        <div className={"map-info"}>
            <div className={"map-container"}>
                <div className={"container"}>
                    <h1>Hitta hit <FontAwesomeIcon icon={faMapMarkerAlt}/></h1>
                    <p>Vi finns mittemot.....</p>
                </div>

            </div>
            <Image src="/map.png" width={1500} height={730} />
        </div>
     );
}
 
export default Map;