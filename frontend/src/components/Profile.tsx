import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const profile = user ? JSON.parse(user) : null;
  localStorage.setItem("avatar",profile.avatar);
  const avatar=localStorage.getItem("avatar");

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    navigate("/login");
  };
  if (!profile) {
    return (
      <div className="text-2xl flex justify-center items-center h-screen flex-col gap-5 bg-slate-700 text-white">
        <h1 className="text-center">Please login to view your profile.</h1>

        <button
          className="p-4 bg-blue-700 rounded-2xl w-xs cursor-pointer "
          onClick={() => navigate("/login")}
        >
          {" "}
          Login
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center  bg-slate-700 h-[92vh] text-white">
      <div className="bg-slate-900 p-8 rounded-2xl">
        <h1 className="text-2xl text-center font-bold">Profile</h1>

        <div className="flex justify-center p-8 ">
          <img
            src={
              avatar ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR99-ZMZeEtYlFVdT-HN3Hz0f_i64Zf76D67g&s"
            }
            alt="pp"
            className="rounded-full"
          />
        </div>
        <div className="text-xl"><span className="font-bold m-3">Name: {" "}
            </span>{profile.name}</div>

        <div><span className="font-bold m-3 text-xl">Email: {" "}
            </span>{profile.email}</div>

        <div className="cursor-pointer text-center" >
            <button onClick={logout} className="bg-red-600 p-3 m-3 rounded-2xl cursor-pointer">
          LOGOUT
            </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
