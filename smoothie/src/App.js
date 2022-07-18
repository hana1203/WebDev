import "./App.css";
import { useState } from "react";

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
  const [clickedMenu, setClickedMenu] = useState([]);
  const [count, setCount] = useState(0);
  const click = (event) => {
    // setClickedMenu(event.target.textContent)
    // // event.preventDefault();
    //   console.log(clickedMenu)
    setCount(count+1);
    //3개만 고를 수 있으니까 3개만 담기. 
    if (count<=2) {
      let menu = [...clickedMenu];
      menu[count] = event.target.textContent
      setClickedMenu(menu)      
      // menu[0] = event.target.textContent
      // menu[1] = event.target.textContent
      //메뉴에 0,1 인덱스 줄때는 클릭할때 한꺼번에 세개 요소가 저장되더니.. count를 따로주니까 따로따로 잘 담긴다.
    }
  } 

  return (
    <div>
      <h1>Organic Smoothie Bar</h1>
      <h1 id="imoticon">👩🏻‍🌾</h1>
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
