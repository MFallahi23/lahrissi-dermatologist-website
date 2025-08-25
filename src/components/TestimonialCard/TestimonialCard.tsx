import "./TestimonialCard.scss";

interface TestimonialCardProps {
  profilePic: string;
  text: string;
  color: "blue" | "steelblue" | "darkslategray" | "primary-blue";
}

const TestimonialCard = ({ profilePic, text, color }: TestimonialCardProps) => {
  return (
    <div className="testimonial-card">
      <div
        className={`testimonial-card__picture testimonial-card__picture--${
          color ? color : ""
        }`}
      >
        {profilePic}
      </div>
      <p className="testimonial-card__text">{text}</p>
    </div>
  );
};

export default TestimonialCard;
