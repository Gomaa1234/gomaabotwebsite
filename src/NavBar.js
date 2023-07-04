import React from "react";
import { BsPlusLg, BsGearFill, BsHouse, BsDownload } from "react-icons/bs";
import { FaDAndD } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="left-0 top-32 m-0 flex h-16 flex-row bg-gray-500 text-white shadow-lg">
      <NavBarIcon 
        icon={<BsHouse size="32" />} 
        text={"Home Page"} 
        page={"/"} 
      />
      <NavBarIcon
        icon={<FaDAndD size="32" />}
        text={"D&D"}
        page={"/Lightning"}
      />
      <NavBarIcon 
        icon={<BsPlusLg size="32" />} 
        text={"Plus"} 
        page={"/Plus"} 
        />
      <NavBarIcon
        icon={<BsDownload size="32" />}
        text={"Download"}
        page={"/Download"}
      />
      <NavBarIcon
        icon={<BsGearFill size="32" />}
        text={"Settings"}
        page={"/Settings"}
      />
    </div>
  );
};
const NavBarIcon = ({ icon, text, page }) => {
  const navigate = useNavigate();
  const changePage = () => navigate(page);
  return (
    <button
      className="group relative mx-auto mb-2 mt-2 flex h-12 w-64 cursor-pointer items-center justify-center rounded-2xl bg-gray-700 text-white shadow-md transition-all duration-100 ease-linear hover:rounded-lg hover:bg-gray-800"
      onClick={changePage}
    >
      {icon}
      <span className="absolute top-14 z-10 m-2 w-auto min-w-full origin-bottom scale-0 rounded-md bg-gray-800 p-2 text-xs font-bold text-white shadow-md transition-all duration-100 group-hover:scale-100">
        {text}
      </span>
    </button>
  );
};
export default NavBar;
