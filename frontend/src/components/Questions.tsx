import React, { useEffect, useState } from "react";
import { quizQuestions } from "../Questions";
import Result from "./Result";
import api from "../lib/axios";
import { Link } from "react-router-dom";

function Questions({ data }) {
  const { level, tech } = data;
  const [correct, setCorrect] = useState<number>(0);
  const [present, setPresent] = useState<number>(0);
  const [showres, setShowres] = useState(false);

  const token = localStorage.getItem("token");
if (!token) {
  console.log("No token found in localStorage");
  return;
}

  const current = quizQuestions[present];
  const totalQuestions=quizQuestions.length;
  const sendRes = async () => {
  if (!token) {
    console.log("No token found");
    return;
  }
  try {
    const response = await api.post(
      "http://localhost:3001/results/create",
      {
        level: level,
        technology: tech,
        totalQuestions: quizQuestions.length,
        correct: correct,
        wrong: quizQuestions.length - correct,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Result saved:", response.data);
  } catch (err) {
    console.error("Error saving result:", err.response?.data || err.message);
  }
};


  useEffect(() => {
  if (showres) {
    (async () => {
      await sendRes();
    })();
  }
}, [showres]);


  const handelClick = (ind: number) => {
    if (current.options[ind] == current.correctAnswer) {
      setCorrect(correct + 1);
    }

    if (present + 1 == quizQuestions.length) {
      setShowres(true);
    } else {
      setPresent(present + 1);
    }
  };
  return (
    <>
      {showres ? (
<>
<div>
   <div className="h-screen w-full bg-slate-600 flex justify-center items-center text-white text-2xl">
      <div className=" max-w-2xl  bg-slate-900 p-6 rounded-2xl">
        <h1>Results:</h1>

      
          <div  className=" grid grid-cols-3 gap-2">
            <h1 className="p-4 bg-slate-700 rounded-2xl">
              <span className="font-bold text-cyan-400">Technology :</span>{" "}
              {tech}
            </h1>
            
          
            <h1 className="p-4 bg-slate-700 rounded-2xl">
              <span className="font-bold text-yellow-500">
                TotalQuestions :
              </span>{" "}
              {
                totalQuestions
              }
              

            </h1>
            <h1 className="p-4 bg-slate-700 rounded-2xl">
              <span className="font-bold text-green-500">Correct :</span>{" "}
{correct}
            </h1>
            <h1 className="p-4 bg-slate-700 rounded-2xl">
              <span className="font-bold text-red-500">Wrong :</span>{" "}
{totalQuestions-correct}
            </h1>
          </div>
        
        <div className="flex justify-center">
<Link
  to="/"
  onClick={() => {
    setCorrect(0);
    setPresent(0);
    setShowres(false);
  }}
  className="p-3 bg-orange-400 rounded-2xl cursor-pointer hover:bg-orange-300"
>
  Retry
</Link>
        </div>
      </div>

    </div>
</div>
</>
      ) : (
        <div className="w-full h-[90vh] flex justify-center  flex-col">
          <div className="p-20 ">
            <div>
              <h1 className="text-center text-3xl">{current.question}</h1>

              <div className="grid-cols-2 grid gap-4 text-2xl text-white m-8">
                {current.options.map((val, ind) => (
                  <button
                    className="bg-neutral-800 p-4 rounded-2xl cursor-pointer hover:bg-neutral-600"
                    key={ind}
                    onClick={() => handelClick(ind)}
                  >
                    {val}
                  </button>
                ))}
              </div>
            </div>
            
          </div>
          )
        </div>
      )}
    </>
  );
}

export default Questions;
