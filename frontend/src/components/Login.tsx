import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { loginUser } from "../services/authService";
import { useState } from "react";

function Login() {

  const [email,setEmail]=useState<string>("");
  const [password,setPass]=useState<string>("");


  const handelLogin=async()=>{

    const res=await loginUser({email,password});
    console.log(res);
    

  }
  return (
    <div className="p-3 w-full flex justify-center items-center text-white  ">
      <div className=" bg-blue-900 flex items-center rounded-2xl flex-col p-10 shadow-md ">
        <h1 className="text-3xl  h-10 mb-10">Login</h1>
        <div className="flex flex-col gap-5 text-2xl ">
          <div>
            <input
              type="text"
              onChange={(e)=>setEmail(e.target.value)}
              placeholder="Email"
              className="bg-amber-50 rounded-xl text-lg w-90 text-black p-3 outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              onChange={(e)=>setPass(e.target.value)}
              placeholder="Password"
              className="bg-amber-50 text-lg rounded-xl w-90 text-black p-3 outline-none"
            />
          </div>

          <div className="text-blue-200 cursor-pointer text-lg">
            Forget password?
          </div>

          <div className="flex justify-center">
            <button className="bg-blue-600 w-full p-3 my-4 rounded-2xl" onClick={()=>handelLogin()}>
              Login
            </button>
          </div>

          <div className=" text-lg flex items-center flex-col">
            <div className="p-3 ">
              <hr className="items-center grow flex-1 " />
              or signin with
              <hr />
            </div>

            <div className=" flex gap-5 text-3xl m-1">
              <FaGoogle />
              <FaFacebook />
            </div>
          </div>

          <div className="text-xl text-blue-200 flex justify-center">
            <Link to={"/register"}>Register?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
