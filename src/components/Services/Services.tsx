import ServiceCard from "../ServiceCard/ServiceCard";
import ConsultationIcon from "/public/icons/consultations.svg";
import WaveIcon from "/public/icons/wave.svg";
import FaceIcon from "/public/icons/face.svg";
import LoupeIcon from "/public/icons/loupe.svg";
import NurseIcon from "/public/icons/nurse.svg";
import ShieldIcon from "/public/icons/shield.svg";
import "./Services.scss";

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__wrapper">
          <h2 className="services__title">
            Nos <span className="services__title--colored">services</span>{" "}
            dermatologiques
          </h2>
          <p className="services__desc">
            Dans un monde où le temps est précieux, votre peau mérite une
            attention experte et un suivi personnalisé. Le Dr. Mehdi Lahrichi
            vous propose des soins dermatologiques complets, adaptés à chaque
            patient, avec confort et professionnalisme.
          </p>
          <div className="services__cards">
            <ServiceCard
              className="service-card--xl"
              icon={<ConsultationIcon width={26} height={26} />}
              title="Consultation dermatologique générale"
              text="Évaluation complète de la peau, des cheveux et des ongles pour adultes et adolescents. Le Dr. Mehdi Lahrichi écoute vos préoccupations et propose un plan de traitement personnalisé pour prévenir les complications futures."
            />
            <ServiceCard
              className="service-card--l"
              icon={<FaceIcon width={26} height={26} />}
              title="Soins esthétiques & acné"
              text="Traitements personnalisés pour l’acné, les cicatrices et le vieillissement cutané, adaptés à votre peau pour des résultats durables."
            />
            <ServiceCard
              className="service-card--m"
              icon={<LoupeIcon width={26} height={26} />}
              title="Dépistage"
              text="Détection et suivi des pathologies courantes pour un diagnostic rapide et une prise en charge efficace."
            />
            <ServiceCard
              className="service-card--m"
              icon={<NurseIcon width={26} height={26} />}
              title="Affections capillaires"
              text="Prise en charge personnalisée de la perte de cheveux, pellicules et autres problèmes du cuir chevelu."
            />
            <ServiceCard
              className="service-card--m"
              icon={<ShieldIcon width={26} height={26} />}
              title="Prévention"
              text="Recommandations sur mesure pour protéger votre peau au quotidien et éviter les irritations ou complications futures."
            />
            <WaveIcon className="services__wave" width={142} height={38} />
            <WaveIcon
              className="services__wave services__wave--inverted"
              width={142}
              height={38}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
