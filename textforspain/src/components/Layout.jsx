import React from "react";
import { Outlet} from "react-router-dom";
import Navbar from "./Navbar";

const Layout = ({children, className=""}) => {

  return (
    <div className={`w-full flex-col h-full flex justify-center items-center ${className}`}>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
export default Layout