import { useState } from "react";
import arrowCollape from "../assets/icons/arrow_back.svg";
const Collapse = ({ title, content }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    };

    return (
        <div className="collapse">
            <h2 className="collapse__title" >
                <button className="collapse__button" onClick={toggleCollapse} aria-expanded={isOpen}>
                    {title}
                    <img src={arrowCollape} alt="" className={`collapse__icon ${isOpen ? "collapse__icon--open" : ""}`} /> 
                </button>
            </h2>
            <div className={`collapse__content ${isOpen ? "collapse__content--open" : ""}`}>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default Collapse;