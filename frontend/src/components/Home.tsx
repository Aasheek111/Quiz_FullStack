import React, { useState } from "react";
import { quizQuestions } from "../Questions";

function Home() {
  const [correct, setCorrect] = useState<number>(0);
  const [present, setPresent] = useState<number>(0);
  const [showres, setShowres] = useState(false);

  const current = quizQuestions[present];

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
       


       <div className=" w-full h-[90vh] text-3xl flex justify-center items-center">
        <div className="h-100 w-100 bg-blue-900 p-20 text-white">
        <h1>
          You Scored {correct}
        </h1>
        </div>

       </div>
      ) : (
        <div className="w-full h-[90vh] flex justify-center  flex-col">
          <div className="p-20 ">
            <div>
              <h1 className="text-center text-3xl">{current.question}</h1>

              <div className="grid-cols-2 grid gap-4 text-2xl text-white m-8">
                {current.options.map((val, ind) => (
                  <button
                    className="bg-neutral-800 p-4 rounded-2xl cursor-pointer"
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

export default Home;
