import { useState } from "react";
import { FaGoogle} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../services/authService";
import { useGoogleLogin } from "@react-oauth/google";
import api from "../lib/axios";

function Register() {
  const [email, setEmail] = useState<string>("");
  const [password, setPass] = useState<string>("");
  const [name, setName] = useState<string>("");
  const navigate= useNavigate()

  const googleRegister = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const res = await api.post("/api/auth/google", {
        access_token: tokenResponse.access_token,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/");
    },
  });
  const handelSubmit = async () => {
    const res = await registerUser({ email, password, name });
    console.log(res);
  };

  return (
    <div className="p-5 w-full h-screen bg-slate-600 flex justify-center items-center text-white">
      <div className="bg-slate-900 flex items-center rounded-2xl flex-col p-6 px-20 shadow-md">
        <h1 className="text-3xl h-10 mb-10">Register</h1>

        <div className="flex flex-col gap-5 text-2xl">
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <div className="flex justify-center">
            <button
              className="bg-blue-600 w-full p-3 my-4 rounded-2xl"
              onClick={() => handelSubmit()}
            >
              Register
            </button>
          </div>

          <div className="text-lg flex items-center flex-col">
            <div className="p-3 text-center">
              <hr />
              or signup with
              <hr />
            </div>

            <div className="flex gap-5 text-3xl m-1">
              <FaGoogle onClick={()=>{googleRegister()}}/>
            </div>
          </div>

          <div className="text-xl text-blue-200 flex justify-center cursor-pointer">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
