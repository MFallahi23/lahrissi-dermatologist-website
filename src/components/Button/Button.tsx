import "./Button.scss";

interface ButtonProps {
  children: React.ReactNode;
  type: "gradient" | "blue" | "white";
  className?: string;
  submit?: boolean;
  href?: string;
  blank?: boolean;
  onClick?: () => void;
}

const Button = ({
  children,
  type,
  className,
  submit,
  href,
  blank,
  onClick,
}: ButtonProps) => {
  if (href) {
    return (
      <a
        className={`btn btn--${type} ${className || ""}`}
        href={href}
        target={blank ? "_blank" : undefined}
        rel={blank ? "noopener noreferrer" : undefined}
      >
        {children}
      </a>
    );
  } else if (onClick) {
    return (
      <button
        className={`btn btn--${type} ${className || ""}`}
        type="button"
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={`btn btn--${type} ${className || ""}`}
      type={submit ? "submit" : "button"}
    >
      {children}
    </button>
  );
};

export default Button;
