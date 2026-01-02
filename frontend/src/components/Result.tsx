import React, { useState } from "react";
import axios from "axios";

function Result() {
  interface Result {
    technology: string;
    level: string;
    totalQuestions: number;
    correct: number;
    wrong: number;
    score: number;
    performance: string;
  }

  interface Api_res {
    data: Result[];
  }
  const [data, setData] = useState<Result[]>([]);

  const getData = async () => {
    const res = await axios.get<Api_res>(
      "http://localhost:3001/result/displayall"
    );
    setData(res.data.data);
  };

  return (
    <div>
      <h1>Results:</h1>

      {data.map((val, ind) => (
        <div key={ind}>
          <h1>{val.technology}</h1>
          <h1>{val.score}</h1>
        </div>
      ))}
    </div>
  );
}

export default Result;
