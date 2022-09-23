import React from "react";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";
import InputForm from "./InputForm";
import Backdrop from "./Backdrop";

const LandingPage = () => {
  const [formIsOpen, setFormIsOpen] = useState(false);

  function openForm() {
    setFormIsOpen(true);
  }

  function closeForm() {
    setFormIsOpen(false);
  }

  return (
    <div className="landing-page">
      <h1>NOTEBOOK</h1>
      <div className="underline"></div>
      <div className="plus" onClick={openForm}>
        <FaPlus />
      </div>
      {formIsOpen && <Backdrop />}
      {formIsOpen && <InputForm onCancel={closeForm} />}
    </div>
  );
};

export default LandingPage;
