import React from "react";
import { BsPlusLg, BsGearFill, BsHouse, BsDownload } from "react-icons/bs";
import { FaDAndD } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="top-32 left-0 h-16 m-0 flex flex-row bg-gray-500 text-white shadow-lg">
      <NavBarIcon 
        icon={<BsHouse size="32" />} 
        text={"Home Page"} 
        page={"/"} 
      />
      <NavBarIcon
        icon={<BsGearFill size="32" />}
        text={"Settings"}
        page={"/Settings"}
      />
      <NavBarIcon 
        icon={<BsPlusLg size="32" />} 
        text={"Plus"} 
        page={"/Plus"} 
      />
      <NavBarIcon 
        icon={<FaDAndD size="32" />}
        text={"D&D"}
        page={"/Lightning"}
      />
      <NavBarIcon
        icon={<BsDownload size="32" />}
        text={"Download"}
        page={"/Download"}
      />
    </div>
  );
};
const NavBarIcon = ({ icon, text, page }) => {
  const navigate = useNavigate();
  const changePage = () => navigate(page);
  return (
    <button
      className="relative flex items-center justify-center h-12 w-64 mt-2 mb-2 mx-auto shadow-md bg-gray-700 text-white rounded-2xl hover:bg-gray-800 hover:rounded-lg transition-all duration-100 ease-linear cursor-pointer group"
      onClick={changePage}
    >
      {icon}
      <span className="absolute w-auto p-2 m-2 min-w-full top-14 rounded-md shadow-md text-white bg-gray-800 text-xs font-bold transition-all duration-100 scale-0 origin-bottom z-10 group-hover:scale-100">
        {text}
      </span>
    </button>
  );
};
export default NavBar;
