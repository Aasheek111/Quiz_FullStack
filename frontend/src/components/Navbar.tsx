import { Link, Route, Routes } from "react-router-dom";
import Home from './Home'
import Result from "./Result";
import Login from "./Login";
import Register from "./Register";

const Navbar: React.FC = () => {
  return (

    <>
    <nav className="flex items-center justify-between px-8 py-4 bg-slate-800 text-white">
      <h1 className="text-xl font-bold">QuizApp</h1>
      <div className="flex gap-5 text-xl">
        <Link to="/">Home</Link>
        <Link to="/results">Results</Link>
        <Link to="/login">Login</Link>
      </div>
     

    </nav>

<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/results" element={<Result/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
</Routes>
    </>

    
  );
};

export default Navbar;
