import Image from "next/image";
import "./Info.scss";

const Info = () => {
  return (
    <section className="info">
      <div className="container">
        <div className="info__wrapper">
          <h2 className="info__title">
            Comment prendre{" "}
            <span className="info__title--colored">rendez-vous</span> facilement
          </h2>
          <p className="info__desc">
            Prendre soin de votre peau n’a jamais été aussi simple. Suivez ces
            étapes pour réserver votre consultation dermatologique avec le Dr.
            Mehdi Lahrichi. Pour plus de détails, consultez notre section FAQ.
          </p>
          <div className="info__content">
            <ul className="info__list">
              <li className="info__item">
                <div className="info__item-title">
                  <span className="info__item-number">1</span>
                  <h3 className="info__item-text">
                    Remplissez vos informations
                  </h3>
                </div>
                <p className="info__item-desc">
                  Entrez votre nom, numéro de téléphone et la date souhaitée
                  pour la consultation. Ces informations nous permettent de
                  préparer votre dossier et de mieux comprendre vos besoins.
                </p>
              </li>
              <li className="info__item">
                <div className="info__item-title">
                  <span className="info__item-number">2</span>
                  <h3 className="info__item-text">
                    Confirmez votre rendez-vous
                  </h3>
                </div>
                <p className="info__item-desc">
                  Recevez une confirmation par téléphone ou SMS. Vous pouvez
                  ajuster la date ou l’heure si nécessaire, pour une
                  planification flexible et sans stress.
                </p>
              </li>
              <li className="info__item">
                <div className="info__item-title">
                  <span className="info__item-number">3</span>
                  <h3 className="info__item-text">
                    Rencontrez le Dr. Lahrichi
                  </h3>
                </div>
                <p className="info__item-desc">
                  Le jour du rendez-vous, venez au cabinet à Casa, détendu et
                  prêt à bénéficier d’une consultation personnalisée, adaptée à
                  vos besoins dermatologiques.
                </p>
              </li>
            </ul>
            <Image
              className="info__img"
              src="/images/cabinet.jpg"
              alt="Photo du cabinet de Dr. Lahrissi"
              width={319}
              height={284}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Info;
