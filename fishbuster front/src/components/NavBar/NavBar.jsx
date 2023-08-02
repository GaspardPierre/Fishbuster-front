import React from "react";
import { Search } from "lucide-react";
import logo from "../../assets/Fishbuster.png";

export default function NavBar() {
  return (
    <div className=" w-full h-28 bg-zinc-950">
      <nav className="flex items-center justify-around flex-wrap ">
        <div className=" mt-5 flex justify-evently w-5/6 md:w-1/3">
          {/* Search icon*/}
          <Search color="white" size={24} />
          {/* Search bar */}
          <div className=" w-full ml-3 py-4 flex-col bg-slate-100 h-8 rounded-2xl  md:flex-row md:w-2/3 md:ml-6"></div>
        </div>
        <div className=" w-5/6 flex items-center justify-between md:w-1/3">
          <span className="text-white text-lg  py-4">Fishbuster</span>
          <span className="text-white text-lg  py-4">A propos</span>
        </div>
      </nav>
    </div>
  );
}
