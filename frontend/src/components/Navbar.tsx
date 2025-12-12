import Link from "next/link";
import React from "react";

function Navbar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Leaderboard", href: "/leaderboard" },
    { name: "Profile", href: "/profile" },
  ];
  return (
    <div className="bg-neutral-800">
      <nav className="flex w-full justify-between p-3">
        <div>
          <h1 className="text-2xl font-bold">Quiz App</h1>
        </div>

        <div className="flex">
          {navItems.map((data) => (
            <Link key={data.name} href={data.href} className="mx-2 text-2xl ">
              {data.name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
