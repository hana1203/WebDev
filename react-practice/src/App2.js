import { useEffect, useState } from "react";

function App2() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  //컴포넌트가 초기에 처음으로 렌더될때 API 가져오는 함수를 실행시키기
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); //coin state변경
        setLoading(false); //loading state변경
      });
  }, []); //useEffect 한번만 실행
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App2;
