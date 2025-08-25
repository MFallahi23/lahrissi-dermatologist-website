import User from "/public/icons/user.svg";
import Tel from "/public/icons/tel.svg";
import Date from "/public/icons/date.svg";
import "./CustomInput.scss";

interface CustomInputProps {
  type: "user" | "phone" | "date";
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({ type, value, onChange }: CustomInputProps) => {
  const config = {
    user: {
      Icon: User,
      label: "Nom complet",
      inputType: "text",
      placeholder: "Amine El Farissi",
      name: "fullName",
    },
    phone: {
      Icon: Tel,
      label: "Numéro de téléphone",
      inputType: "tel",
      placeholder: "0666666666",
      name: "phone",
    },
    date: {
      Icon: Date,
      label: "Date du rendez-vous",
      inputType: "datetime-local",
      placeholder: "",
      name: "date",
    },
  };

  const { Icon, label, inputType, placeholder, name } = config[type];
  return (
    <div className="custom-input">
      <label htmlFor={name} className="custom-input__label">
        <Icon width={32} height={32} />
        <span className="custom-input__label-text">{label}</span>
      </label>
      <input
        className="custom-input__field"
        type={inputType}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
