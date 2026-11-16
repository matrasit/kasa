import { Link } from "react-router";
const LogementCard = ({ id, title, cover }) => {
  return (
    <Link to={`/logement/${id}`} className="logement-card">
      <img src={cover} alt={""} />
      <h2>{title}</h2>
    </Link>
  );
};
export default LogementCard;