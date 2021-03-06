import "./App.css";
import { useState } from "react";

function App() {
  const allIngredients = [
    { icon: "π₯¬", name: "Kale" },
    { icon: "π₯", name: "Carrot" },
    { icon: "π₯", name: "Kiwi" },
    { icon: "π", name: "Pineapple" },
    { icon: "π«", name: "Blueberry" },
    { icon: "π", name: "Strawberry" },
    { icon: "π", name: "Banana" },
    { icon: "π", name: "Lemon" },
    { icon: "π", name: "Orange" },
  ];
  const [clickedMenu, setClickedMenu] = useState([]);
  const [count, setCount] = useState(0);
  const click = (event) => {
    // setClickedMenu(event.target.textContent)
    // // event.preventDefault();
    //   console.log(clickedMenu)
    setCount(count+1);
    //3κ°λ§ κ³ λ₯Ό μ μμΌλκΉ 3κ°λ§ λ΄κΈ°. 
    if (count<=2) {
      let menu = [...clickedMenu];
      menu[count] = event.target.textContent
      setClickedMenu(menu)      
      // menu[0] = event.target.textContent
      // menu[1] = event.target.textContent
      //λ©λ΄μ 0,1 μΈλ±μ€ μ€λλ ν΄λ¦­ν λ νκΊΌλ²μ μΈκ° μμκ° μ μ₯λλλ.. countλ₯Ό λ°λ‘μ£ΌλκΉ λ°λ‘λ°λ‘ μ λ΄κΈ΄λ€.
    }
  } 

  return (
    <div>
      <h1>Organic Smoothie Bar</h1>
      <h1 id="imoticon">π©π»βπΎ</h1>
      <h2>Customize Your Smoothie</h2>
      <section className="menu_container">
        {allIngredients.map((ingre) => (
          <div className="ingredient" onClick={(event)=>click(event)}>
            <span onClick={(e)=>e.stopPropagation()}>{ingre.icon}</span>
            <span onClick={(e)=>e.stopPropagation()}>{ingre.name}</span>
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

        <h2>Selected ingredients</h2>
        {/* <div>{clickedMenu}</div> */}
        {clickedMenu.map((eachMenu, idx) => <div>{eachMenu}</div>)}
        {/* {clickedMenu.slice(0,3).map((eachMenu, idx) => <div>{eachMenu}</div>)} */}
        
        
        {/* <div>{clickedMenu2}</div>
        <div>{clickedMenu3}</div> */}

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
