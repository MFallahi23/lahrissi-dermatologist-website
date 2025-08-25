import CabinetCard from "../CabinetCard/CabinetCard";
import "./Cabinet.scss";
const Cabinet = () => {
  return (
    <section className="cabinet" id="cabinet">
      <div className="container">
        <div className="cabinet__wrapper">
          <h2 className="cabinet__title">
            Retrouvez notre{" "}
            <span className="cabinet__title--colored">cabinet</span>{" "}
          </h2>
          <p className="cabinet__desc">
            Le cabinet du Dr Mehdi Lahrissi est situé au cœur de Casablanca,
            facilement accessible et conçu pour vous offrir un accueil
            confortable et professionnel.
          </p>
          <div className="cabinet__cards">
            <CabinetCard
              type="text"
              IsDirection={true}
              title="Adresse du Cabinet"
              text="Cabinet Médical Dr. Lahrissi
123 Boulevard Mohammed V
20000 Casablanca, Maroc"
            />
            <CabinetCard type="map" IsDirection={false} />
            <CabinetCard
              type="text"
              IsDirection={false}
              title="Horaires d'Ouverture"
              text=" Lundi – Vendredi : 09h00 – 18h00<br>
  Samedi : 09h00 – 14h00<br>
  Dimanche : fermé"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cabinet;
