import React, { useState } from "react";
import image from "../images/image.png";
const SubHeading = () => {
  const languages = [
    { title: "RU |", id: "0" },
    { title: "ENG", id: "1" },
  ];
  const [isSelectedLang, setIsSelectedLang] = useState(0);

  return (
    <div className="subheading">
      <div className="subheading__wrapper">
        <ul className="subheading__list">
          <li>
            Denis <br /> Novik
          </li>
          <li>
            UX | UI designer <br /> 24 years old, Minsk
          </li>
          <li>
            {languages.map(function (obj, index) {
              return (
                <span onClick={() => setIsSelectedLang(obj.id)} className={`${isSelectedLang == obj.id ? 'active' : 'non-active'}`} key={index}>
                  {obj.title}
                </span>
              );
            })}
          </li>
        </ul>
        <div className="subheading__image">
          <img src={image} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default SubHeading;
