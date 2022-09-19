import React from "react";
import "../Header/header.css"
const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
          <p>V/G Academy</p>
      </div>

     <nav>
      <ul>
        <li><a href="#">Kurslar</a></li>
        <li><a href="#">Resurslar</a></li>
        <li><a href="#">Əlaqə</a></li>
        <li><a href="#">AZ</a></li>
      </ul>
      <a className="button-text" href="#"><button>Giriş</button></a>
     </nav>

    </div>
  )
};
export default Header;