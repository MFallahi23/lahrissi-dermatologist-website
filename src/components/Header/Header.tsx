import Button from "../Button/Button";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <p className="header__contact">
          Prendre rendez-vous : <span> 📞 +212 6 66 66 66 66</span>
        </p>
      </div>
      <div className="container">
        <div className="header__wrapper">
          <a className="header__logo" href="/">
            Dr. Lahrissi
          </a>
          <ul className="header__list">
            {/* <li className="header__item">
              <a className="header__link" href="/">
                Accueil
              </a>
            </li> */}
            <li className="header__item">
              <a className="header__link" href="#services">
                Services
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#doctor">
                À propos du médecin
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#cabinet">
                Cabinet
              </a>
            </li>
            <li className="header__item">
              <a className="header__link" href="#cabinet">
                Horaires
              </a>
            </li>
          </ul>
          <Button className="header__btn" type="gradient" href="#appointment">
            Prendre RDV
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
