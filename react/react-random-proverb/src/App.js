//리액트로 프로젝트 만들기? 
//터미널에서 저장할 디렉토리로 가기 cd WebDev
//npx create-react app 명령어치고 react-random-prov 원하는 폴더이름 치기
//새로운 리액트 프로젝트를 시작한것 - 여러가지 패키지 셋팅되고 Happy Hacking! 뜸
//이 리액트 폴더로 가서 cd react-random-prov
//npm start 한다. 


import logo from './logo.svg';
import './App.css';

function App() {
  const proverbs = ["산다는것 그것은 치열한 전투이다.", "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다. ", "언제나 현재에 집중할수 있다면 행복할것이다.", "행복은 습관이다,그것을 몸에 지니라"];
  const getRandomIndex = (length) => {
    return parseInt(Math.random() * length);
    //왜 parseInt를 쓰는것? 아.. 아마도 소숫점으로 나오니까 
  }

  //map으로 배열의 모든 요소를 화면에 나타내기 
  const proverbsToElement = (proverb) => {
    return <p>{proverb}</p>
  }
  const provsMaps = proverbs.map(proverbsToElement);
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>src/App.js</code> 명언제조기
        </p>
        {/* 하나씩 보여주기  */}
        {/* {proverbs[getRandomIndex(proverbs.length)]}  */}
        {/* 명언 모두 보여주기 */}
        {provsMaps}
      </header>
    </div>
  );
}

//map 실습
// const posts = [
//   { id : 1, title : 'Hello World', content : 'Welcome to learning React!' },
//   { id : 2, title : 'Installation', content : 'You can install React via npm.' },
//   { id : 3, title : 'reusable component', content : 'render easy with reusable component.' },
//   // ...
//   { id : 100, title : 'I just got hired!', content : 'OMG!' },
// ];

// function App() {
//   const postToElement = (post) => (
//     <div>
//       <h3>{post.title}</h3>
//       <p>{post.content}</p>
//     </div>
//   );

// return <div className="post-wrapper">{posts.map(postToElement)}</div>
// }

export default App;
