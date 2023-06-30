import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'
import React from "react";
import {useNavigate} from 'react-router-dom';
const NavBar=()=>{
    return(
        <div className="fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-primary text-white shadow-lg">
            <NavBarIcon icon={<FaFire size="32"/>} text={'Fire'} page={'/pages/Fire'}/>
            <NavBarIcon icon={<BsGearFill size="32"/>} text={'Settings'} page={'/pages/Settings'}/>
            <NavBarIcon icon={<BsPlus size="42"/>} text={'Plus'} page={'/pages/Plus'}/>
            <NavBarIcon icon={<BsFillLightningFill size="32"/>} text={'Lightning'} page={'/pages/Lightning'}/>
            <NavBarIcon icon={<FaPoo size="32"/>} text={'Poop'} page={'/pages/Poop'}/>
        </div>
    );
}; 
const NavBarIcon = ({icon, text, page})=>{
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
