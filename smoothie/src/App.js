import "./App.css";
import { useState } from "react";

function Selected() {
  const [storedMenu, setStoredMenu] = useState();
  const storeMenu = (event) => {
    setStoredMenu(event.target.textContent);
  };
  console.log(storedMenu);
  return (
    <div className="selected">
      <div className="selected_menu">selected menu</div>
      <div className="selected_menu_icon">{storedMenu}</div>
      <div className="selected_menu_name">{storedMenu}</div>
    </div>
  );
}

function App() {
  const allIngredients = [
    { icon: "🥬", name: "Kale" },
    { icon: "🥕", name: "Carrot" },
    { icon: "🥝", name: "Kiwi" },
    { icon: "🍍", name: "Pineapple" },
    { icon: "🫐", name: "Blueberry" },
    { icon: "🍓", name: "Strawberry" },
    { icon: "🍌", name: "Banana" },
    { icon: "🍋", name: "Lemon" },
    { icon: "🍊", name: "Orange" },
  ];
  return (
    <div>
      <h1>Organic Smoothie Bar</h1>
      <h1>👩🏻‍🌾</h1>
      <h2>Customize Your Organic Smoothie</h2>
      <section className="menu_container">
        {allIngredients.map((ingre) => (
          <div className="ingredient">
            <div>{ingre.icon}</div>
            <div>{ingre.name}</div>
          </div>
        ))}
      </section>
      <section className="order_container">
        {/* <div className="selected">
          <div>Selected ingredients</div>
          <div className="selected_menu"></div>
          <div className="selected_menu_icon"></div>
          <div className="selected_menu_name"></div>
        </div> */}

        <div>Selected ingredients</div>
        <Selected></Selected>

        <div className="order_detail">
          <div className="order_size">
            <span className="label">Size</span>
            <input type="radio" value="small" /> small
            <input type="radio" value="medium" /> medium
            <input type="radio" value="large" /> large
          </div>
          <div className="order_sweet">
            <span className="label">Sweet Level</span>
            <input type="radio" value="0" /> 0%
            <input type="radio" value="25" /> 25%
            <input type="radio" value="50" /> 50%
            <input type="radio" value="75" /> 75%
            <input type="radio" value="100" /> 100%
          </div>
          <div className="order_quantity">
            <span className="label">Quantitiy</span>
            <input type="number"></input>
            <button>Order</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
