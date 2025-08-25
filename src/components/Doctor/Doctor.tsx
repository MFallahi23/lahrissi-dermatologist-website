import Image from "next/image";
import Button from "../Button/Button";
import Phone from "/public/icons/phone.svg";
import Deco from "/public/icons/doctor-deco.svg";
import "./Doctor.scss";

const Doctor = () => {
  return (
    <section className="doctor" id="doctor">
      <div className="container">
        <div className="doctor__wrapper">
          <h2 className="doctor__title">
            Rencontrez votre{" "}
            <span className="doctor__title--colored">médecin</span>
          </h2>
          <p className="doctor__desc">
            Faites connaissance avec Dr Mehdi Lahrissi, votre expert en
            dermatologie à Casablanca.
          </p>
          <div className="doctor__card">
            <div className="doctor__imgCtn">
              <Image
                className="doctor__img"
                src="/images/doctor-2.png"
                alt="Photo du docteur Mehdi Lahrissi"
                width={550}
                height={380}
              />
            </div>
            <div className="doctor__content">
              <h3 className="doctor__name">Dr. Mehdi Lahrissi</h3>
              <p className="doctor__content-text">
                Dr Mehdi Lahrissi est diplômé de la{" "}
                <span className="doctor__content-text--colored">
                  Faculté de Médecine et de Pharmacie de Casablanca (FMPC)
                </span>{" "}
                et a complété sa spécialisation en dermatologie au{" "}
                <span className="doctor__content-text--colored">
                  CHU Ibn Rochd
                </span>
                . Il a ensuite obtenu un{" "}
                <span className="doctor__content-text--colored">
                  Diplôme Universitaire (DU) en dermatologie esthétique et
                  lasers médicaux
                </span>{" "}
                à l’{" "}
                <span className="doctor__content-text--colored">
                  Université Paris Descartes
                </span>{" "}
                . Après plusieurs années d’exercice dans une clinique privée de
                Casablanca , il a fondé son propre cabinet, où il propose des
                soins dermatologiques personnalisés , alliant expertise clinique
                et technologies de pointe .
              </p>
              <Button
                className="doctor__btn"
                type="white"
                href="tel:0666666666"
              >
                {" "}
                Prendre RDV
                <Phone width={22} height={22} />
              </Button>
            </div>
            <Deco className="doctor__icon-top" width={116} height={60} />
            <Deco className="doctor__icon-bottom" width={116} height={60} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
