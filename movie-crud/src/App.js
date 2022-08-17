import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./component/Footer";
import Navibar from "./component/Navibar";
import Home from "./Home";
import CreateReview from "./movieComponent/CreateReview";
import MovieDetail from "./movieComponent/MovieDetail";

function App() {
  const [movies, setMovies] = useState(null);
  const [isPending, setIsPending] = useState(true);
  
  useEffect(()=> {
    setTimeout(() => {
      fetch('http://localhost:3001/movies')
      .then(res => {
        if (!res.ok) {
          throw Error('cannot fetch data')
        }
        return res.json();
      })
      .then(data => {
        setIsPending(false);
        setMovies(data);
      })
    }, 1000);
  }, []);


  return (
    <BrowserRouter>
    <div className="App">
      <Navibar />
      <div className="Content">
        <Routes>
          <Route exact path="/" element={<Home movies={movies} isPending={isPending}/>}/>
          <Route path="/movies/:id" element={<MovieDetail />} />
          <Route path="/movies/:id/create" element={<CreateReview />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
