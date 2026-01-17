import axios from "axios";
import React, { useState } from "react";
import Questions from "./Questions";
import { div } from "motion/react-client";

function Home() {
  const [level, setLevel] = useState<string>("");
  const [tech, setTech] = useState<string>("");
  const [selected,setSelected]=useState(false);

  const submitVal=()=>{
    setSelected(true);
  }

  const tec = ["HTML", "JS", "CSS", "REACT", "NEXT","NODE"];
  const levels = ["Begineer", "Intermediate", "Pro"];

  return (

     selected?<div>
      <Questions data={{level,tech}}/>
      </div>
      :

    <div className="min-h-[92vh] w-full bg-slate-700 flex justify-center items-center text-white">
      <div className="min-w-2xl  bg-slate-900  p-10 rounded-2xl text-2xl">
        <h1 className="text-center bold text-3xl p-4">QUIZ</h1>

        <div className="">
          <h1 className="w-full p-3">Technology</h1>
          <div className="grid grid-cols-2 gap-3 ">
            {tec.map((val, i) => (

              <button
                className={` cursor-pointer rounded-lg p-3 ${tech==val?" bg-green-600":"bg-slate-500  hover:bg-slate-400 "} hover:scale-105 transition-all `}
                key={i}
                onClick={() => setTech(val)}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="p-3">Levels</h1>
          <div className="grid grid-cols-3 gap-3">
            {levels.map((val, i) => (
              <button
                className={`rounded-lg transition-all p-3 cursor-pointer hover:scale-105 ${level==val?"bg-red-600":"bg-slate-500  hover:bg-slate-400 "}`}
                key={i}
                onClick={() => setLevel(val)}
              >
                {val}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <button
            disabled={!level || !tech}
            className="p-3  mt-7 cursor-pointer min-w-50 rounded-2xl bg-orange-500 transition-all hover:scale-105 hover:bg-orange-500 m-4 disabled:bg-orange-300"
            onClick={()=>submitVal()}
          >
            Start
          </button>
          <div className="text-lg">
            -- You selected {" "}
            <span className="font-extrabold text-green-600">{tech}</span>{" "}Technology and <span className="font-extrabold text-red-600">{level}</span>{" "} level
          </div>
        </div>
      </div>
    </div>
  
  );


}

export default Home;
