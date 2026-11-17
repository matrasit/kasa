import { useState } from "react";
import arrowLeft from "../assets/icons/arrow_left.svg";
import arrowRight from "../assets/icons/arrow_right.svg"
const Slideshow = ({pictures, titre}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1);
    };
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => prevIndex === 0 ? pictures.length -1 : prevIndex - 1);
    };
    return (
        <div className="slideshow">
            <img src={pictures[currentIndex]} alt={titre}  /> 
            {pictures.length >1 &&(
                <>
                    
                    <button className="slideshow_prev" onClick={prevSlide} aria-label="Image précédente" type="button">
                        <img src={arrowLeft} alt=""/>
                    </button>
                    <span className="slideshow_counter">{currentIndex+1}/{pictures.length}</span>
                    <button className="slideshow_next" onClick={nextSlide} aria-label="Image suivant" type="button">
                        <img src={arrowRight} alt=""/>
                    </button>
                </>
            )};
                
        </div>   
    )};
    
export default Slideshow;