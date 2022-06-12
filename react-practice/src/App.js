//리액트로 앱 만들기 npx create-react-app react-practice

import { useState } from "react";
function App() {
  //input value를 어떻게 컨트롤?
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setTodo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault(); //default는 form 안에 들어있는 버튼누르면 input한거 사라짐
    // console.log(todo);
    if (todo === "") {
      return; //todo가 비어있으면 kill the function 함수 작동안시킴
    }
    setTodo(""); //setTodo가 빈 문자열로 불렸으면 todo는 빈 문자열된다.
    setTodos((currentArray) => [todo, ...currentArray]);
    // todos array 수정하고 싶으면?
    //절대 state를 직접적으로 수정하지 않는다.
    //modifier function을 통해서 수정한다.
    //modifier 함수 사용시 두가지 옵션
    //opt1.단순한 값 보내기
    //opt2.함수 보내기
    //함수를 보낼땐 함수의 첫번째 인자를 현재 State로 둔다.
  };
  // console.log(todos);
  console.log(todos.map((item, index) => <li key={index}>{item}</li>));

  return (
    <div>
      <h1>My TO DO</h1>
      <h2>{"things to do: " + todos.length}</h2>
      <form onSubmit={onSubmit}>
        {" "}
        {/* form has submit event */}
        <input
          onChange={onChange}
          value={todo}
          type="text"
          plcaeholder="Write your to do"
        ></input>
        <button>Add TO-DO</button>
      </form>
      <hr />
      {todos.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
      {/* 같은 컴포넌트의 리스트를 렌더링할때 key prop넣어야된다. 리액트는 list에 있는 모든 아이템을 인식해서 */}
    </div>
  );
}

export default App;
