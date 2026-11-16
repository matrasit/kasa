import Banner from "../components/Banner";
import BannerHome from "../assets/images/banner-home.webp";
import Logements from "../data/logements.json";
import LogementCard from "../components/LogementCard";
const Home = () => {
    return (
        <>
            <Banner image={BannerHome} text="Chez vous, partout et ailleurs" />
            <section className="logements">
            {Logements.map((logement) => (
                <LogementCard
                    key={logement.id}
                    id={logement.id}
                    title={logement.title}
                    cover={logement.cover}
                />
            ))}
            </section>
        </>
    );
};
export default Home; 