//컴포넌트가 처음 렌더링될떄만 코드 실행하게 하려면?
//ex) API에서 데이터가져올때 처음 렌더링될때만 가져오고 그 이후 state변화될때 다시 데이터 또 가져오고 싶지 않을때

import Button from "./Button";
import { useState } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  // console.log("rendered"); //상태가 변할때마다 렌더링된다
  console.log("call an API");

  return (
    <div>
      <h1>Welcome </h1>
      <button onClick={onClick}>{counter}</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
