import { useState, useEffect } from "react";

//Clean up function
//컴포넌트가 destroy될때에도 코드 실행할 수 있다.
//앱만들때 그렇게 자주 써야되는 경우는 x

//show누르면 created 콘솔에 출력하고 hide누르면 콘솔에 bye도 출력
// function Hello() {
//   function byeFn() {
//     console.log("bye");
//   }
//   function hiFn() {
//     console.log("created");
//     return byeFn;
//   }
//   useEffect(hiFn, []);
//   return <h1>Hello</h1>;
// }

//화살표 함수방식으로 더 짧게
function Hello() {
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
}

//show누르면 콘솔에 hello보여주고 hide누르면 화면에서 완전히 버튼 Hide 엘리먼트 사라짐
// function Hello() {
//   useEffect(() => {
//     console.log("hello!");
//   }, []);
//   return <h1>Hello</h1>;
// }

function AppCleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default AppCleanUp;
