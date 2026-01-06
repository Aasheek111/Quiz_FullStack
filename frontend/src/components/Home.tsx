import React, { useState } from "react";

function Home() {
  const [level, setLevel] = useState<string>("");
  const [tech, setTech] = useState<string>("");

  const tec = ["HTML", "JS", "CSS", "REACT", "NEXT"];
  const levels = ["Begineer", "Intermediate", "Pro"];

  return (
    <div className="min-h-screen w-full bg-slate-700 flex justify-center items-center text-white">
      <div className="min-w-md  bg-slate-900  p-10 rounded-2xl text-2xl">
        <h1 className="text-center bold text-3xl p-4">QUIZ</h1>

        <div className="">
          <h1 className="w-full p-3">Technology</h1>
          <div className="grid grid-cols-2 gap-3">
            {tec.map((val, i) => (
              <button className="bg-slate-500 rounded-lg p-3" key={i}>
                {val}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="p-3">Levels</h1>
          <div className="grid grid-cols-3 gap-3">
            {levels.map((val, i) => (
              <button className="bg-slate-500 rounded-lg p-3" key={i}>
                {val}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center">
          <button className="p-3 bg-slate-400 mt-7 min-w-50 rounded-2xl">
            Submit
          </button>
          <div>
            {}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
