import React from "react";
import { navigation_container, navigation_h3, navigation_button } from "./Header.module.css";
const Header = () => {
  return (
    <header className={navigation_container}>
      <h3 className={navigation_h3}>Добавление товара</h3>
      <button className={navigation_button} type="button">
        По умолчанию<span>&or;</span>
      </button>
    </header>
  );
};

export default Header;
