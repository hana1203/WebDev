//컴포넌트가 처음 렌더링될떄만 코드 실행하게 하려면?
//ex) API에서 데이터가져올때 처음 렌더링될때만 가져오고 그 이후 state변화될때 다시 데이터 또 가져오고 싶지 않을때
//언제 코드가 실행될지 결정하는 방법
//컴포넌트가 생성되는 처음에, 무언가가 업데이트될때

import Button from "./Button";
import { useState, useEffect } from "react";
//useEffect 1st argument: 실행시키고 싶은 코드
//2nd argument: dependencies. 리액트가 지켜봐야되는 것. 그게 변화할때 코드를 실행

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev) => prev + 1);
  // console.log("rendered"); //상태가 변할때마다 렌더링된다
  // console.log("call an API");
  const onChange = (event) => setKeyword(event.target.value);

  //컴포넌트가 맨처음 렌더될때만 코드 실행되고 그 다음엔 절대 실행되지 않게하기
  const runOnce = () => {
    console.log("I run only once.");
  };

  console.log("I run all the time"); //상태변화할때마다 실행되는 코드

  useEffect(runOnce, []); //useEffect가 컴포넌트의 맨 처음 렌더시점에 함수를 호출
  //no dependencies. 리액트가 지켜볼 대상없기때문에 코드는 한번만 실행

  useEffect(() => {
    console.log("Call the API");
  }, []); //이렇게 첫번째 인자에 바로 익명함수 넣어줘도 됨
  //useEffect function은 우리 코드가 딱 한번만 실행될 수 있도록 보호해준다.

  // console.log("search for", keyword); //상태변화할때마다 실행되는 코드
  //input 요소 keyword상태 변화할때만 실행했으면 좋겠는데, counter버튼 누를때도 실행된다.

  //The magic of useEffect
  //두번째 인자 dependencies 사용
  //keyword 상태 변화할때만 코드 실행하게하기
  useEffect(() => {
    //초기에 컴포넌트가 시작될때도 동작됨. input에 유저가 search를 시작할때만
    if (keyword !== "") {
      console.log("search for", keyword);
    }
  }, [keyword]); //keyword가 변화될때만 이 코드 실행해줘.
  //pls watch the keyword, and if it changes, execute the code.

  return (
    <div>
      <input
        value={keyword} /* input에 value를 줘서 keyword state와 연결하기 */
        onChange={onChange} /*eventlistener 연결 */
        type="text"
        placeholder="Search here"
      />
      <h1>Welcome </h1>
      <button onClick={onClick}>{counter}</button>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
