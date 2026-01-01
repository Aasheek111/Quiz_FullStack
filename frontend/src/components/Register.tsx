import { FaGoogle, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="p-5 w-full flex justify-center items-center text-white">
      <div className="bg-blue-900 flex items-center rounded-2xl flex-col p-6 px-20 shadow-md">
        <h1 className="text-3xl h-10 mb-10">Register</h1>

        <div className="flex flex-col gap-5 text-2xl">
          <input
            type="text"
            placeholder="Full Name"
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="bg-amber-50 rounded-xl text-lg w-80 text-black p-3 outline-none"
          />

          <div className="flex justify-center">
            <button className="bg-blue-600 w-full p-3 my-4 rounded-2xl">
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
              <FaGoogle />
              <FaFacebook />
            </div>
          </div>

          {/* Login redirect */}
          <div className="text-xl text-blue-200 flex justify-center cursor-pointer">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
