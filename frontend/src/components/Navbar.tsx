import { Link, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Home";
import Result from "./Result";
import Login from "./Login";
import Register from "./Register";
import Profile from "./Profile";

const DEFAULT_AVATAR =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99-ZMZeEtYlFVdT-HN3Hz0f_i64Zf76D67g&s";

const Navbar: React.FC = () => {
  const navigate = useNavigate();

  const user = localStorage.getItem("user");
  const userdata = user ? JSON.parse(user) : null;

  const avatar = localStorage.getItem("avatar") || DEFAULT_AVATAR;

  return (
    <>
      <nav className="flex items-center justify-between px-8 py-4 bg-slate-800 text-white">
        <h1
          className="text-xl font-bold cursor-pointer flex gap-4"
          onClick={() => navigate("/")}
        >
          <img src="logo.png" alt="logo" className="rounded-2xl w-8" />
          QuizApp
        </h1>

        <div className="flex gap-5 text-2xl items-center">
          <Link to="/">Home</Link>
          <Link to="/results">Results</Link>

          {!userdata && <Link to="/login">Login</Link>}

          <img
            src={avatar}
            className="w-10 h-10 rounded-full cursor-pointer object-cover"
            onClick={() => navigate("/profile")}
            alt="profile"
            onError={(e) => {
              e.currentTarget.src = DEFAULT_AVATAR;
            }}
          />
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default Navbar;
