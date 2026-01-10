import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Login from "./Login";
import Register from "./Register";

const Navbar: React.FC = () => {
  const user = localStorage.getItem("user");
  const userdata = JSON.parse(user);

  const navigate = useNavigate();
  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-slate-800 text-white">
        <h1
          className="text-xl font-bold cursor-pointer flex gap-4"
          onClick={() => navigate("/")}
        >
          <img src="logo.png" alt="" className="rounded-2xl w-8" />
          QuizApp
        </h1>
        <div className="flex gap-5 text-2xl">
          <Link to="/">Home</Link>
          <Link to="/results">Results</Link>
          <Link to="/login" className="flex flex-col">
            Login
          </Link>
          <div className="flex flex-col justify-center items-center">
            <img src={userdata.avatar} className="w-10 rounded-2xl" alt="" />
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/results" element={<Result />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
    </>
  );
};

export default Navbar;
