import "./App.css";
import { useState } from "react";

function Menu({ icon, name, storeMenu }) {
  // const [currentMenu, setCurrentMenu] = useState();
  // const onClick = (event) => {
  //   setCurrentMenu(event.target.textContent);
  // };
  // console.log(currentMenu);

  return (
    <div onClick={storeMenu} className="menu">
      <div>{icon}</div>
      <div>{name} </div>
    </div>
  );
}

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
  return (
    <div>
      <h1>Organic Smoothie Bar</h1>
      <h1>👩🏻‍🌾</h1>
      <h2>Customize Your Organic Smoothie</h2>
      <section className="menu_container">
        <Menu icon="🥬" name="Kale"></Menu>
        <Menu icon="🥕" name="Carrot"></Menu>
        <Menu icon="🥝" name="Kiwi"></Menu>
        <Menu icon="🍍" name="Pineapple"></Menu>
        <Menu icon="🫐" name="Blueberry"></Menu>
        <Menu icon="🍓" name="Strawberry"></Menu>
        <Menu icon="🍌" name="Banana"></Menu>
        <Menu icon="🍋" name="Lemon"></Menu>
        <Menu icon="🍊" name="Orange"></Menu>
      </section>
      {/* html 다 가져올 필요없고 컴포넌트로 만들어서 넣기  */}
      {/* <section className="menu_container">
        <div className="menu">
          <div>🥬</div>
          <div>Kale</div>
        </div>
        <div className="menu">
          <div>🥕</div>
          <div>Carrot</div>
        </div>
        <div className="menu">
          <div>🥝</div>
          <div>Kiwi</div>
        </div>
        <div className="menu">
          <div>🍍</div>
          <div>Pineapple</div>
        </div>
        <div className="menu">
          <div>🫐</div>
          <div>Blueberry</div>
        </div>
        <div className="menu">
          <div>🍓</div>
          <div>Strawberry</div>
        </div>
        <div className="menu">
          <div>🍌</div>
          <div>Banana</div>
        </div>
        <div className="menu">
          <div>🍋</div>
          <div>Lemon</div>
        </div>
        <div className="menu">
          <div>🍊</div>
          <div>Orange</div>
        </div>
      </section> */}

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
