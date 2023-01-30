import React from "react";
import logo_in from "../images/in.svg";
import logo_ins from "../images/ins.svg";
import logo_be from "../images/be.svg";
import logo_sur from "../images/sur.svg";
const Contacts = () => {
  return (
    <div className="contacts">
      <h1 className="contacts__heading">Contacts</h1>
      <p className="contacts__subheading">
        Want to know more or just chat? You are welcome!
      </p>
      <button className="contacts__submit">Send message</button>
      <div className="contacts__logos">
        <img src={logo_in} alt="" />
        <img src={logo_ins} alt="" />
        <img src={logo_be} alt="" />
        <img src={logo_sur} alt="" />
      </div>
      <p className="contacts__footer">
        Like me on <br />
        LinkedIn, Instagram, Behance, Dribble
      </p>
    </div>
  );
};

export default Contacts;
