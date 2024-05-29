import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const 학교이름들 = ["경기고","성수고","창동고","숭신여고","양명여고"];
  return (
    <div>
     {학교이름들.map((학교이름) =>(
      <><h1>{학교이름}</h1>
      <Count></Count></>
     ))}
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
