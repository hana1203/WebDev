import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
      <nav>
        <ul>
          <li className='home'>
            <Link to="/">Home</Link>{/* link 컴포넌트를 이용하여 경로를 연결합니다 */}
          </li>
          <li className='mypage'>
            <Link to="/mypage">MyPage</Link>
          </li>
          <li className='dashboard'>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
      {/* 주소 경로와 아까 만든 3개의 컴포넌트를 연결해 줍니다. */}
       {/* Routes 컴포넌트는 Route 컴포넌트들을 감싸고 있어야 합니다. */}
       <Routes>
          {/* 경로는 path로 컴포넌트는 element로 연결해 줍니다. */}
          <Route path="/" element={<Home />} /> 
          <Route path="/mypage" element={<MyPage />} /> 
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

// Home 컴포넌트
function Home() {
  return <h1>Home</h1>;
}

// MyPage 컴포넌트
function MyPage() {
  return <h1>MyPage</h1>;
}

// Dashboard 컴포넌트
function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default App;
