import React from "react";
import {BsPlusLg, BsGearFill, BsHouse, BsDownload} from 'react-icons/bs'
import { FaDAndD } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom';
const NavBar=()=>{
    return(
        <div className="top-32 left-0 h-16 m-0 flex flex-row bg-primary text-white shadow-lg">
            <NavBarIcon icon={<BsHouse size="32"/>} text={'Home Page'} page={'/'}/>
            <NavBarIcon icon={<BsGearFill size="32"/>} text={'Settings'} page={'/Settings'}/>
            <NavBarIcon icon={<BsPlusLg size="32"/>} text={'Plus'} page={'/Plus'}/>
            <NavBarIcon icon={<FaDAndD size="32"/>} text={'D&D'} page={'/Lightning'}/>
            <NavBarIcon icon={<BsDownload size="32"/>} text={'Download'} page={'/Download'}/>
        </div>
    );
};
const NavBarIcon=({icon, text, page}) => {
    const navigate = useNavigate();
    const changePage = () => navigate(page);
    return(
       <button className='navbar-icon group' onClick={changePage}>
            {icon}
            <span className='navbar-tooltip group-hover:scale-100'>
                {text}
            </span>
        </button>
    )
}
export default NavBar;