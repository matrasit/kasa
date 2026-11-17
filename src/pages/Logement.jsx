import {useParams} from "react-router";
import Logements from "../data/logements.json";
import Error from "../pages/NotFound";
import Slideshow from "../components/Slideshow";
const Logement = () => {
    const { id } = useParams();
    const logement = Logements.find(logement => logement.id === id);
        if (!logement) {
        return <Error />;
    }
    
    return (
        <div>
            <Slideshow pictures={logement.pictures}/> 
            <h1>{logement.title}</h1>
        </div>
    );
};

export default Logement;