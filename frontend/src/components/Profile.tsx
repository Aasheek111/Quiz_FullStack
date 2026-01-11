import React from "react";

function Profile() {
  const user = localStorage.getItem("user");
  const profile = JSON.parse(user);
  console.log(profile);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user")
  };

  return (
    <div className="flex justify-center items-center ">
      <div>
        <h1>Profile</h1>

        <div className="flex justify-center">
          <img src={profile.avatar} alt="pp" className="rounded-full" />
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
