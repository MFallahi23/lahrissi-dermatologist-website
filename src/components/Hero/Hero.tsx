import Button from "../Button/Button";
import "./Hero.scss";
import ArrowR from "/public/icons/arrow-r.svg";
import Star from "/public/icons/star.svg";
import HalfStar from "/public/icons/half-star.svg";
import BlueStar from "/public/icons/blue-star.svg";
import Line from "/public/icons/dotted-line.svg";
import Quotes from "/public/icons/quotes.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <h1 className="visually-hidden">
        Dr. Mehdi Lahrissi, Dermatologue à Casablanca
      </h1>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="hero__title">
              Une <span className="hero__title-colored">peau saine</span>{" "}
              commence par une écoute attentive.
            </h2>
            <p className="hero__text">
              <span className="hero__text-colored">
                Le Dr. Mehdi Lahrichi, dermatologue à Casablanca
              </span>{" "}
              , vous accueille pour le diagnostic, le traitement et le suivi des
              maladies de la peau, des cheveux et des ongles avec une approche à
              la fois <span className="hero__text-colored">scientifique</span>{" "}
              et <span className="hero__text-colored">humaine</span>.
            </p>
            <Button className="hero__btn" type="gradient" href="#appointment">
              Prendre RDV <ArrowR width={12} height={18} />
            </Button>
          </div>
          <div className="hero__visual">
            <Line className="hero__line" />

            <div className="hero__visual-bg">
              <div className="hero__visual-rectangle">
                <Image
                  className="hero__img"
                  src="/images/doctor-2.png"
                  alt="Photo du docteur Mehdi Lahrissi"
                  width={330}
                  height={300}
                />
              </div>
              <div className="hero__reviews">
                <div className="hero__patients">
                  <div className="hero__profiles">
                    <div className="hero__profile hero__profile--blue">M</div>
                    <div className="hero__profile hero__profile--steelblue">
                      P
                    </div>
                    <div className="hero__profile hero__profile--lavender">
                      L
                    </div>
                    <div className="hero__profile hero__profile--darkslategray">
                      A
                    </div>
                  </div>
                  <div className="hero__number">
                    2000<span className="hero__plus">+</span>{" "}
                  </div>
                </div>
                <span className="hero__review-text">Patients satisfaits</span>
                <div className="hero__rating">
                  <ul className="hero__stars">
                    <li className="hero__stars-item">
                      <Star width={16} height={14} />
                    </li>
                    <li className="hero__stars-item">
                      <Star width={16} height={14} />
                    </li>
                    <li className="hero__stars-item">
                      <Star width={16} height={14} />
                    </li>
                    <li className="hero__stars-item">
                      <Star width={16} height={14} />
                    </li>
                    <li className="hero__stars-item">
                      <HalfStar width={16} height={14} />
                    </li>
                  </ul>
                  <span className="hero__rating-text">(4.7 Étoiles)</span>
                </div>
              </div>
              <div className="hero__simple">
                <BlueStar width={28} height={28} />
                Rendez-vous simple
              </div>
              <div className="hero__quote">
                <Quotes className="hero__quote-icon" width={62} height={50} />
                Votre peau mérite toute mon attention spécialisée
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
