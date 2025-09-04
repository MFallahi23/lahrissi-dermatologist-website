"use client";

import Check from "/public/icons/check.svg";
import Deco from "/public/icons/square-deco.svg";
import Button from "../Button/Button";
import "./Appointment.scss";
import CustomInput from "../CustomInput/CustomInput";
import { useState } from "react";
import toast from "react-hot-toast";
import Success from "../Success/Success";

const Appointment = () => {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const nameTrimmed = fullName.trim();
    const phoneTrimmed = phone.trim();
    const dateTrimmed = appointmentDate.trim();

    if (!nameTrimmed || !phoneTrimmed || !dateTrimmed) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    const cleanedPhone = phoneTrimmed.replace(/[\s()-]/g, "");

    const phoneRegex = /^(?:\+212|0)?[5-7][0-9]{8}$/;

    if (!phoneRegex.test(cleanedPhone)) {
      toast.error("Numéro de téléphone invalide.");
      return;
    }

    const appointmentTime = new Date(dateTrimmed);
    const now = new Date();
    if (isNaN(appointmentTime.getTime()) || appointmentTime < now) {
      toast.error("Veuillez choisir une date et heure valide dans le futur.");
      return;
    }

    await toast.promise(
      fetch("/api/appointment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, appointmentDate }),
      }),
      {
        loading: "Envoi en cours...",
        success: "Rendez-vous envoyé !",
        error: "Erreur, veuillez réessayer",
      }
    );

    setSubmitted(true);
    setFullName("");
    setPhone("");
    setAppointmentDate("");
  };
  return (
    <section className="appointment" id="appointment">
      <div className="container">
        <div className="appointment__wrapper">
          <div className="appointment__card">
            <h2 className="appointment__card-title">
              Prenez rendez-vous en 3 étapes simples.
            </h2>
            <form
              action="#"
              className="appointment__form"
              onSubmit={handleSubmit}
            >
              <div className="appointment__inputs">
                <CustomInput
                  type="user"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
                <CustomInput
                  type="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <CustomInput
                  type="date"
                  value={appointmentDate}
                  onChange={(e) => setAppointmentDate(e.target.value)}
                />
              </div>
              <Button className="appointment__btn" type="blue" submit={true}>
                Prendre RDV <Check width={20} height={20} />
              </Button>
            </form>
            <Deco className="appointment__deco" width={140} height={70} />
          </div>
        </div>
      </div>
      {submitted && (
        <Success visible={submitted} onClose={() => setSubmitted(false)} />
      )}
    </section>
  );
};

export default Appointment;
