import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";


const MainLayOut = () => {
    return (
        <div className="max-w-[1440px] overflow-hidden px-4 mx-auto">       
            <Navbar></Navbar>
            <Outlet></Outlet> 
        </div>
    );
};

export default MainLayOut; 