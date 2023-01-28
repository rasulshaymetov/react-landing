import React, { useState, useEffect } from "react";
import icom from "../images/icon.png";
const nav = [
  { title: "Home", id: "0" },
  { title: "About me", id: "1" },
  { title: "Skills", id: "2" },
  { title: "Portfolio", id: "3" },
  { title: "Contacts", id: "4" },
];
const Header = () => {
  const [isSelectedNav, setIsSelectedNav] = useState(0);
  useEffect(() => {
    console.log(isSelectedNav);
  }, [isSelectedNav]);

  return (
    <div className="header">
      <div className="header__wrapper">
        <ul className="header__list">
          {nav.map(function (obj, index) {
            return (
              <li
                onClick={() => setIsSelectedNav(obj.id)}
                className={`header__list-obj ${
                  isSelectedNav == obj.id ? "active" : "non-active"
                } `}
                key={index}
              >
                {obj.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
