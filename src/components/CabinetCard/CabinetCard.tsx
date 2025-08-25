import Button from "../Button/Button";
import "./CabinetCard.scss";

interface CabinetCardProps {
  type: "map" | "text";
  title?: string;
  text?: string;
  IsDirection: boolean;
  className?: string;
}

const CabinetCard = ({
  type,
  title,
  text,
  IsDirection,
  className,
}: CabinetCardProps) => {
  return (
    <div
      className={`cabinet-card ${className ? className : ""} ${
        type === "map" ? "cabinet-card--map" : ""
      }`}
    >
      {type === "map" ? (
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3367.312590913572!2d-7.623248324254296!3d33.57854597333898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d2a35a02fe43%3A0xbe0ddb88845fc6d7!2sCHU%20Ibn%20Rochd!5e1!3m2!1sru!2sma!4v1756053498975!5m2!1sru!2sma"
          width={600}
          height={450}
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      ) : (
        <div className="cabinet-card__wrapper">
          {title && <h3 className="cabinet-card__title">{title}</h3>}
          {text && (
            <p
              className="cabinet-card__text"
              dangerouslySetInnerHTML={{ __html: text }}
            ></p>
          )}
          {IsDirection && (
            <Button
              className="cabinet-card__btn"
              type="blue"
              href="https://maps.app.goo.gl/hDRuNWvvwpysjDvm9"
              blank={true}
            >
              Itinéraire
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default CabinetCard;
