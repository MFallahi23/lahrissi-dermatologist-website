import "./ServiceCard.scss";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  className?: string;
}

const ServiceCard = ({ icon, title, text, className }: ServiceCardProps) => {
  return (
    <div className={`service-card ${className ? className : ""}`}>
      <div className="service-card__wrapper">
        {icon && <span className="service-card__icon">{icon}</span>}
        {title && <h3 className="service-card__title">{title}</h3>}
        {text && <p className="service-card__text">{text}</p>}
      </div>
    </div>
  );
};

export default ServiceCard;
