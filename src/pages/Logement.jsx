import {useParams} from "react-router";
import Logements from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import starIcon from "../assets/icons/star.svg";
import starActiveIcon from "../assets/icons/star-active.svg"
import { Navigate } from "react-router";
const Logement = () => {
    const { id } = useParams();
    const logement = Logements.find(logement => logement.id === id);
        if (!logement) {
        return <Navigate to="/404" replace />;
    }
    
    return (
        <div className="logement">
            <div>
                <Slideshow pictures={logement.pictures}/> 
            </div> 
            <div className="logement_info">
                <div className="logement_details">
                    <div className="logement_titrelocation">
                        <h1>{logement.title}</h1>
                        <p>{logement.location}</p>
                    </div>
                    <div className="logement_tags">
                        {logement.tags.map((tag) => {
                            return <span key={tag}> {tag} </span>
                            }
                        )}
                    </div>
                </div>
                <div className="logement_aside">
                    <div className="logement_host">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={`Portrait de ${logement.host.name}`}></img>
                    </div>
                    <div className="logement_rating" role="img" aria-label={`Note de logement ${logement.rating} sur 5`}>
                        
                        {[1,2,3,4,5].map((star) =>{
                            return <span key= {star}> 
                            <img className="logement__star"src={star <= Number(logement.rating) ? starActiveIcon : starIcon} alt=""/>
                            </span>
                            }
                        )}
                    </div>
                </div>
            </div>
            <div className="logement_collapse">
                <Collapse title="Description" content={logement.description}/>
                <Collapse title="Équipement" content={<ul>{logement.equipments.map((equipment) =>{
                    return <li key={equipment}>{equipment}</li>
                })}
                </ul>}/>
            </div>

        </div>
    );
};

export default Logement;