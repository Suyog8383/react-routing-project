import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Menu() {
  return (
    <div id="menu-bar">
      <div className="menu-content">
        <h1>MENU</h1>
        <div class="grid-container">
          <div class="grid-item-data">
            <p className="link">Pizza</p>
          </div>
          <div class="grid-item-data">
            <p className="link">Salads</p>
          </div>
          <div class="grid-item-data">
            <p className="link">Starter</p>
          </div>
          <div class="grid-item">
            Margherita
            <span>$10.50</span>
          </div>
          <div class="grid-item">
            Lasagna <span>$05.00</span>
          </div>
          <div class="grid-item">
            Today's Soup <span>$15.60</span>
          </div>
          <div class="grid-item">
            Pineapple'o'clock <span>$08.40</span>
          </div>
          <div class="grid-item">
            Ravioli <span>$07.80</span>
          </div>
          <div class="grid-item">
            Bruschetta <span>$12.50</span>
          </div>
          <div class="grid-item">
            Chicken <span>$18.20</span>
          </div>
          <div class="grid-item">
            Spaghetti Classica <span>$09.70</span>
          </div>
          <div class="grid-item">
            Garlic bread <span>$04.10</span>
          </div>
          <div class="grid-item">
            Formaggio <span>$14.70</span>
          </div>
          <div class="grid-item">
            Seafood pasta <span>$13.10</span>
          </div>
          <div class="grid-item">
            Tomozzarella <span>$03.50</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
