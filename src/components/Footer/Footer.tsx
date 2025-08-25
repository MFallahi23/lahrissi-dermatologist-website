import "./Footer.scss";
import IgIcon from "/public/icons/ig.svg";
import FbIcon from "/public/icons/facebook.svg";
import LinkdIcon from "/public/icons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__doctor">
              <span className="footer__doctor-name">Dr. Lahrissi</span>
              <p className="footer__doctor-desc">
                Dr Mehdi Lahrissi, dermatologue expérimenté, offre des soins
                personnalisés et de qualité.
              </p>
            </div>
            <div className="footer__contact">
              <h3 className="footer__title">Contact</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__link" href="tel:0666666666">
                    +212 666 666 666
                  </a>
                </li>
                <li className="footer__item">
                  <a
                    className="footer__link"
                    href="mailto:mohcinefallahi23@gmail.com"
                  >
                    dr.lahrissi@cabinet.ma
                  </a>
                </li>
                <li className="footer__item">
                  123 Boulevard Mohammed V 20000 Casablanca, Maroc
                </li>
              </ul>
            </div>
            <div className="footer__services">
              <h3 className="footer__title">Services</h3>
              <ul className="footer__list">
                <li className="footer__item">Consultation dermatologique</li>
                <li className="footer__item">Soins esthétiques</li>
                <li className="footer__item">Dépistage</li>
                <li className="footer__item">Affections capillaires</li>
                <li className="footer__item">Prévention</li>
              </ul>
            </div>
            <div className="footer__schedule">
              <h3 className="footer__title">Horaires</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  Lun - Ven : 09:00 - 18:00 Samedi : 09:00 - 14:00 Dimanche :
                  Fermé
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <ul className="footer__social-list">
              <li className="footer__social-item">
                <a
                  href="https://www.instagram.com/fallahimouhcine/"
                  className="footer__social-link"
                  target="_blank"
                >
                  <IgIcon width={24} height={24} />
                </a>
              </li>
              <li className="footer__social-item">
                <a
                  href="https://www.linkedin.com/in/mouhcine-fallahi-256686243/"
                  className="footer__social-link"
                  target="_blank"
                >
                  <LinkdIcon width={24} height={24} />
                </a>
              </li>
              <li className="footer__social-item">
                <a href="#" className="footer__social-link" target="_blank">
                  <FbIcon width={26} height={26} />
                </a>
              </li>
            </ul>
            <p className="footer__copy">
              © 2025 Projet de démonstration. Site vitrine fictif, non médical.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
