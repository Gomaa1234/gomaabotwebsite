import {BsPlus, BsFillLightningFill, BsGearFill} from 'react-icons/bs'
import {FaFire, FaPoo} from 'react-icons/fa'
const SideBar=()=>{
    return(
        <div className="fixed top-0 left-0 w-screen h-16 m-0 flex flex-row bg-primary text-white shadow-lg">
            <SideBarIcon icon={<FaFire size="32"/>} text={'Fire'}/>
            <SideBarIcon icon={<BsGearFill size="32"/>} text={'Settings'}/>
            <SideBarIcon icon={<BsPlus size="42"/>} text={'Plus'}/>
            <SideBarIcon icon={<BsFillLightningFill size="32"/>} text={'Lightning'}/>
            <SideBarIcon icon={<FaPoo size="32"/>} text={'Poop'}/>
        </div>
    );
}; 
const SideBarIcon = ({icon, text})=>(
    <div className='sidebar-icon group'>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
            {text}
        </span>
    </div>
)
export default SideBar;
