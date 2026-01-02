import React, { useState } from "react";

function Home() {
  const [technology, setTechnology] = useState("");
  const [level, setLevel] = useState("");

  const techs = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
  const levels = ["Beginner", "Intermediate", "Pro"];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white px-4">
      <div className="w-full max-w-md bg-slate-900/80 backdrop-blur rounded-2xl p-8 shadow-2xl space-y-8">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center">
          Choose Your Path 🚀
        </h1>

        {/* Technology */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Technology</h2>
          <div className="grid grid-cols-2 gap-3">
            {techs.map((tech) => (
              <button
                key={tech}
                onClick={() => setTechnology(tech)}
                className={`py-2 rounded-lg border transition
                  ${
                    technology === tech
                      ? "bg-blue-600 border-blue-500"
                      : "border-slate-600 hover:bg-slate-700"
                  }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Level */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Level</h2>
          <div className="grid grid-cols-3 gap-3">
            {levels.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setLevel(lvl)}
                className={`py-2 rounded-lg border transition
                  ${
                    level === lvl
                      ? "bg-green-600 border-green-500"
                      : "border-slate-600 hover:bg-slate-700"
                  }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Start Button */}
        <button
          disabled={!technology || !level}
          className="w-full py-3 rounded-xl font-semibold text-lg
          bg-gradient-to-r from-blue-500 to-green-500
          disabled:opacity-40 disabled:cursor-not-allowed
          hover:scale-[1.02] transition"
        >
          Start Learning
        </button>

        {/* Selected Info */}
        {technology && level && (
          <p className="text-center text-sm text-slate-300">
            You selected <span className="font-semibold">{technology}</span> —{" "}
            <span className="font-semibold">{level}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default Home;
