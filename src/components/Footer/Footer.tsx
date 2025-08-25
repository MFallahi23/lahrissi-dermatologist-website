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
                  <a className="footer__link" href="/">
                    +212 5XX XXX XXX
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    dr.lahrissi@cabinet.ma
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    123 Boulevard Mohammed V 20000 Casablanca, Maroc
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__services">
              <h3 className="footer__title">Services</h3>
              <ul className="footer__list">
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Consultation dermatologique
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Soins esthétiques
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Dépistage
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Affections capillaires
                  </a>
                </li>
                <li className="footer__item">
                  <a className="footer__link" href="/">
                    Prévention
                  </a>
                </li>
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
