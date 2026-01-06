import React, { useEffect, useState } from "react";
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
  // const getData = async () => {
  //   const res = await axios.get<Api_res>(
  //     "http://localhost:3001/result/displayall"
  //   );
  //   setData(res.data.data);
  // };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get<Api_res>(
          "http://localhost:3001/result/displayall"
        );
        setData(res.data.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full bg-slate-600 flex justify-center items-center text-white text-2xl">
      <div className=" max-w-2xl  bg-slate-900 p-6 rounded-2xl">
        <h1>Results:</h1>

        {data.map((val, ind) => (
          <div key={ind} className="flex">
            <h1>{val.technology}{" = "}</h1>
            <h1>{val.score}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Result;
