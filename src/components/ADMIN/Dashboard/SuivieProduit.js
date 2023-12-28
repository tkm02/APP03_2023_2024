import React from "react";
import "../../../styles/ADMIN/SuivieProduit.css";

const SuivieProduit = ({ currentStep }) => {
  const steps = ["commande réçu", "En cours", "En route", "Livré"];
  console.log(currentStep);


  return (
    <div className="order-tracker">
      {steps.map((step,index) => (
        <div
          key={index}
          className={`step ${index <= currentStep ? "completed" : ""}`}
        >
          <div className="circle">{index + 1}</div>
          <div
            className={`step-label ${index <= currentStep ? "completed" : ""}`}
          >
            {step}
          </div>
          {index < steps.length - 1 && (
            <div
              className={`progress-bar ${
                index < currentStep ? "completed" : ""
              }`}
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SuivieProduit;
