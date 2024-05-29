import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div>
      <Count></Count>
      <Count></Count>
      <Count></Count>
    </div>
  );
}

function Count() {
  const 리턴값 = useState(0);
  const count = 리턴값[0];
  const setCount = 리턴값[1];
  let 초기화;
  if (count != 0) {
    초기화 = <button onClick={() => setCount(0)}>초기화</button>;
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => setCount((현재카운트) => 현재카운트 + 1)}>
        증가
      </button>
      <button onClick={() => setCount((현재카운트) => 현재카운트 - 1)}>
        감소
      </button>
      {초기화}
    </div>
  );
}
export default App;
