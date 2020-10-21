import React from "react";
import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <>
      <Menu right>
        <a className="menu-item" href="/">
          Strona główna
        </a>

        <a className="menu-item" href="/sessions">
          Raporty
        </a>

        <a className="menu-item" href="/login">
          Logowanie
        </a>
      </Menu>
    </>
  );
};
