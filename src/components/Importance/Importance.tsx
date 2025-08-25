import Image from "next/image";
import Button from "../Button/Button";
import "./Importance.scss";

const Importance = () => {
  return (
    <section className="importance">
      <div className="container">
        <div className="importance__wrapper">
          <h2 className="importance__title">
            Pourquoi{" "}
            <span className="importance__title--colored">
              prendre soin de votre peau
            </span>{" "}
            avec un dermatologue ?
          </h2>
          <div className="importance__content">
            <div className="importance__imgWrapper">
              <Image
                className="importance__img"
                src="/images/skin-1.jpg"
                alt="Photo d'une femme qui prend soin de sa peau"
                fill
              />
            </div>
            <div className="importance__text">
              <p className="importance__desc">
                La peau est le reflet de votre santé et mérite une attention
                experte à chaque étape de la vie. Consulter un dermatologue
                permet de prévenir et traiter efficacement les maladies
                cutanées, l’acné, les problèmes capillaires et les signes du
                vieillissement. Le Dr. Mehdi Lahrichi, dermatologue à
                Casablanca, vous accompagne avec des traitements personnalisés
                et un suivi attentif. Il prend le temps d’écouter vos
                préoccupations, d’examiner minutieusement chaque zone et de vous
                fournir des conseils pratiques pour préserver votre peau, vos
                cheveux et vos ongles au quotidien, tout en favorisant votre
                bien-être général.
              </p>
              <Button
                className="importance__btn"
                type="blue"
                href="#appointment"
              >
                Prendre RDV
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Importance;
