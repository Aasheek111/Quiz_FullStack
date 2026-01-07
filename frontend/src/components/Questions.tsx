import React, { useState } from "react";
import { quizQuestions } from "../Questions";
import Result from "./Result";
import api from "../lib/axios";

function Questions({ data }) {
  const { level, tech } = data;
  const [correct, setCorrect] = useState<number>(0);
  const [present, setPresent] = useState<number>(0);
  const [showres, setShowres] = useState(false);

const token=localStorage.getItem("token");
  const current = quizQuestions[present];

  const sendRes = async () => {
    try {
      const response = await api.post(
        "http://localhost:3001/results/create",
        {
          user:'currentuser',
          level: level,
          technology: tech,
          totalQuestions: 20,
          correct: correct,
          wrong: 20 - correct,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
        }
      );

      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  if (showres) {
    sendRes();
  }

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
        <Result />
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
