import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div className="max-w-[1140px] px-6 mx-auto">       
            <Navbar></Navbar>
            <Outlet></Outlet> 
        </div>
    );
};

export default MainLayOut; 