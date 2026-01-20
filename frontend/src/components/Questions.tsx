import React, { useEffect, useState } from "react";
import { quizQuestions } from "../Questions";
import api from "../lib/axios";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function Questions({ data }) {
  const { level, tech } = data;
  const [selected, setSelected] = useState<number | null>(null);
  const [correct, setCorrect] = useState<number>(0);
  const [present, setPresent] = useState<number>(0);
  const [showres, setShowres] = useState(false);

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  if (!token) {
    return (
      <>
        <div className="flex justify-center items-center h-[92vh] flex-col gap-6 bg-slate-700 text-white text-2xl ">
          <h1>Please Login to Start the quiz</h1>
          <button
            className="p-3 rounded-2xl w-xs cursor-pointer text-white text-2xl bg-blue-700"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
        </div>
      </>
    );
  }

  const filterQuestions = quizQuestions.filter(
    (q) => q.technology.toLowerCase() == tech.toLowerCase() && q.level == level
  );
  const current = filterQuestions[present];
  const totalQuestions = filterQuestions.length;

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
          totalQuestions: filterQuestions.length,
          correct: correct,
          wrong: filterQuestions.length - correct,
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
    setSelected(ind);
    if (current.options[ind] == current.correctAnswer) {
      setCorrect((prev) => prev + 1);
    }

    setTimeout(() => {
      setSelected(null);
      if (present + 1 == filterQuestions.length) {
        setShowres(true);
      } else {
        setPresent(present + 1);
      }
    }, 300);
  };
  return (
    <>
      {showres ? (
        <>
          <div>
            <div className="h-screen w-full bg-slate-600 flex justify-center items-center text-white text-2xl">
              <div className=" max-w-2xl  bg-slate-900 px-20 p-5 rounded-2xl">
                <h1 className="text-center p-5">Results:</h1>

                <div className=" grid grid-cols-1 gap-4">
                  <h1 className="p-4 bg-slate-700 rounded-2xl">
                    <span className="font-bold text-cyan-400">
                      Technology :
                    </span>{" "}
                    {tech}
                  </h1>

                  <h1 className="p-4 bg-slate-700 rounded-2xl">
                    <span className="font-bold text-yellow-500">
                      TotalQuestions :
                    </span>{" "}
                    {totalQuestions}
                  </h1>
                  <h1 className="p-4 bg-slate-700 rounded-2xl">
                    <span className="font-bold text-green-500">Correct :</span>{" "}
                    {correct}
                  </h1>
                  <h1 className="p-4 bg-slate-700 rounded-2xl">
                    <span className="font-bold text-red-500">Wrong :</span>{" "}
                    {totalQuestions - correct}
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
                    className="p-3 bg-orange-400 rounded-2xl cursor-pointer hover:bg-orange-300 m-3 w-35 text-center"
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
            {current?<div>
              <h1 className="text-center text-3xl">{current.question}</h1>

              <div className="grid-cols-2 grid gap-4 text-2xl text-white m-8">
                {current.options.map((val, ind) => (
                  <motion.button
              
                    className={` p-4 rounded-2xl cursor-pointer ${
                      selected == ind
                        ? current.options[ind] == current.correctAnswer
                          ? "bg-green-500"
                          : "bg-red-500"
                        : "bg-neutral-800 hover:bg-neutral-600"
                    }`}
                    key={ind}
                    onClick={() => handelClick(ind)}
                  >
                    {val}
                  </motion.button>
                ))}
              </div>
            </div>:<div>NO Questions for the given input</div>}
            
          </div>
          )
        </div>
      )}
    </>
  );
}

export default Questions;
