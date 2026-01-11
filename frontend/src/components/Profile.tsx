import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const profile = user ? JSON.parse(user) : null;

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
  if (!profile) {
    return (
      <div className="text-2xl flex justify-center items-center h-screen flex-col gap-5 bg-slate-700 text-white">
        <h1 className="text-center">Please login to view your profile.</h1>

        <button
          className="p-4 bg-blue-600 rounded-2xl w-34 cursor-pointer "
          onClick={() => navigate("/login")}
        >
          {" "}
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center ">
      <div>
        <h1>Profile</h1>

        <div className="flex justify-center">
          <img
            src={
              profile.avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99-ZMZeEtYlFVdT-HN3Hz0f_i64Zf76D67g&s"
            }
            alt="pp"
            className="rounded-full"
          />
        </div>
        <div>Name:{profile.name}</div>

        <div>Email:{profile.email}</div>

        <div className="cursor-pointer" onClick={logout}>
          LOGOUT
        </div>
      </div>
    </div>
  );
}

export default Profile;
