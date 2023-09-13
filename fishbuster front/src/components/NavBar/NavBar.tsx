import React from "react";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from "../../store";


export default function NavBar() {
  const {domain, setDomain} = useStore();
  return (
    <div className="w-full h-28 bg-blue-500">
      <nav className="flex items-center justify-around flex-wrap">
      
        <div className="w-5/6 flex items-center justify-around md:w-2/3">
        <Link 
            to="/" 
            className="text-white text-xl py-4 transition duration-500 ease-in-out hover:underline"
          >
            Logo
          </Link>
          <Link 
            to="/fisbuster" 
            className="text-white text-xl py-4 transition duration-500 ease-in-out hover:underline"
          >
            Fishbuster
          </Link>
          <Link 
            to="/about" 
            className="text-white text-xl py-4 transition duration-500 ease-in-out hover:underline"
          >
            À propos
          </Link>
        </div>
      </nav>
    </div>
  );
}
