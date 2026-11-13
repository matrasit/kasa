import logokasafooter from "../assets/logos/logo-kasa-footer.svg"; 
const Footer = () => {
    return (
        <footer className="footer">
            <img src={logokasafooter} alt="Kasa logo footer" />
            <p> © 2020 Kasa. All rights reserved</p>
        </footer>
    );
};

export default Footer;