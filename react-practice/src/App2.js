import { useEffect, useState } from "react";

function App2() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  const [currentCoin, setCurrentCoin] = useState();

  const [dollars, setDollars] = useState();

  const onChange = (event) => {
    setDollars(event.target.value);
  };

  const saveCurrentCoin = (event) => {
    setCurrentCoin(event.target.value);
  };
  console.log(currentCoin);
  // console.log(currentCoin.split("$")[1]);

  //컴포넌트가 초기에 처음으로 렌더될때 API 가져오는 함수를 실행시키기
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10 ")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json); //coin state변경
        setLoading(false); //loading state변경
      });
  }, []); //useEffect 한번만 실행
  return (
    <div>
      <h1>The Coins ({coins.length})</h1>
      <h2>Select a coin!</h2>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={saveCurrentCoin}>
          <option>select a coin</option>
          {coins.map((coin) => (
            <option
              name={coin.name}
              value={coin.quotes.USD.price}
              symbol={coin.symbol}
            >
              {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      {/* <ul>
        {coins.map((coin) => (
          <li>
            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price}
          </li>
        ))}
      </ul> */}
      {/* select만들어서 코인 선택하고 코인가격 -usd 변환하게 하기 */}
      <h2>how many coins can I buy?</h2>
      <input
        value={dollars}
        onChange={onChange}
        placeholder="Enter USD amount"
        type="number"
        id="dollars"
      ></input>
      {/* {coins.map((coin) => (
        <input placeholder={coin.name}></input>
      ))} */}
      <input
        // value={onChange() ? dollars / currentCoin : "w"}
        // 뭔가 onChange발생하면? 참이면 환산된 값 띄우고 그게 아니라면 input 플레이스홀더에 원하는 값 띄우고 싶은데 처음엔 NaN나옴
        value={dollars / currentCoin}
        placeholder={currentCoin}
        disabled
      ></input>
    </div>
  );
}

export default App2;
