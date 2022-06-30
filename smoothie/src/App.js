import "./App.css";

function App() {
  return (
    <div>
      <h1>Organic Smoothie Bar</h1>
      <h1>👩🏻‍🌾</h1>
      <h2>Customize Your Organic Smoothie</h2>
      <section className="menu_container"></section>
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
      <section className="order_container">
        <div className="selected">
          <div>Selected ingredients</div>
          <div className="selected_menu"></div>
          <div className="selected_menu_image"></div>
          <div className="selected_menu_name"></div>
        </div>
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
