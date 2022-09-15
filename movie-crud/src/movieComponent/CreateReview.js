import { useState } from "react";
import { useParams } from "react-router-dom";

const CreateReview = () => {
  const [textbody, setTextBody] = useState("");
  const [author, setAuthor] = useState("");
  const { id } = useParams();
  const [movie, setMovies] = useState(null);

  const handleSubmit = (e) => {
    let newReview = { review_text: textbody, author: author };
    let review = movie.reviews.push(newReview);

    let putData = {
      id: id,
      title: movie.title,
      release_year: movie.release_year,
      distributor: movie.distributor,
      locations: movie.locations,
      favorite: movie.favorite,
      reviews: review,
    };

    //왜 안되는것? 개별 영화에 맞게 리뷰 추가하려고 하는디..
    fetch(`http://localhost:3001/movies/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: review.push(JSON.stringify(putData)),
    })
      .then(() => {
        console.log("new review posted");
      })
      .catch(() => {
        console.log("error!");
      });
  };
  return (
    <div className="create">
      <h2>Add a review</h2>
      <form onSubmit={handleSubmit}>
        <label>리뷰 쓰기</label>
        <input
          type="text"
          required
          value={textbody}
          onChange={(e) => setTextBody(e.target.value)}
          placeholder="리뷰를 입력해주세요"
        ></input>
        <label>작성자</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="작성자를 입력해주세요"
        ></input>
        <button>등록</button>
      </form>
    </div>
  );
};

export default CreateReview;
