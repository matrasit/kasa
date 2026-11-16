const Banner = ({ image, text }) => { 
    return ( 
         <div className={text ? "banner banner--with-text" : "banner"}>
            <img src={image} alt="" />
            
             {text && <h1>{text}</h1>}
            
         </div>
        );
    };
    export default Banner;