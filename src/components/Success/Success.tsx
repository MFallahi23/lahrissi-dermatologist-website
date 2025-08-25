"use client";

import Check from "/public/icons/check-success.svg";
import { useState } from "react";
import Button from "../Button/Button";
import "./Success.scss";

interface SuccessProps {
  visible: boolean;
  onClose: () => void;
}

const Success = ({ visible, onClose }: SuccessProps) => {
  return (
    <>
      <div
        className={`success__bg ${!visible ? "success__bg--hide" : ""}`}
      ></div>
      <div className={`success ${!visible ? "success--hide" : ""}`}>
        <h2 className="success__title">
          Rendez-vous envoyé&nbsp;! <Check width={20} height={20} />
        </h2>
        <p>
          Merci pour votre demande. Le docteur recevra votre rendez-vous et vous
          contactera bientôt pour confirmer l'heure.
        </p>
        <p>
          <strong>Vérifiez votre téléphone :</strong> un message WhatsApp ou un
          appel pourra suivre.
        </p>
        <p>
          {" "}
          <strong>Pour toute modification</strong>, contactez le cabinet
          directement.
        </p>
        <Button className="success__btn" type="gradient" onClick={onClose}>
          J'ai compris
        </Button>
      </div>
    </>
  );
};

export default Success;
