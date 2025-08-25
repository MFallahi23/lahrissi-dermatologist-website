import WhatsappIcon from "/public/icons/whatsapp.svg";
import "./WhatsappLink.scss";

const WhatsappLink = () => {
  return (
    <a
      className="whatsapp-link"
      href="https://wa.me/212666926248?text=Bonjour%20Docteur%2C%20je%20voudrais%20r%C3%A9server%20un%20rendez-vous%20le%20%5Bdate%5D%20%C3%A0%20%5Bheure%5D"
      target="_blank"
      rel="noopener noreferrer"
    >
      <WhatsappIcon className="whatsapp-link__icon" width={50} height={50} />
    </a>
  );
};

export default WhatsappLink;
