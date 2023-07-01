import React from "react";
import {BsPlusLg, BsFillLightningFill, BsGearFill, BsHouse, BsDownload} from 'react-icons/bs'
import {useNavigate} from 'react-router-dom';
const NavBar=()=>{
    return(
        <div className="fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-primary text-white shadow-lg">
            <NavBarIcon icon={<BsHouse size="32"/>} text={'Home Page'} page={'/'}/>
            <NavBarIcon icon={<BsGearFill size="32"/>} text={'Settings'} page={'/Settings'}/>
            <NavBarIcon icon={<BsPlusLg size="32"/>} text={'Plus'} page={'/Plus'}/>
            <NavBarIcon icon={<BsFillLightningFill size="32"/>} text={'Lightning'} page={'/Lightning'}/>
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