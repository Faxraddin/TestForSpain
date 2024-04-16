import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full h-[100px] border flex justify-center items-center">
        <div className="w-[80%] flex-wrap gap-5 flex justify-between items-center">
            <Link className="p-3 py-2 w-[120px] border-2 border-black rounded-[10px] " to={'/'}>Example 1</Link>
            <Link className="p-3 py-2 w-[120px] border-2 border-black rounded-[10px] " to={'/'}>Example 1</Link>
            <Link className="p-3 py-2 w-[120px] border-2 border-black rounded-[10px] " to={'/'}>Example 1</Link>
        </div>
    </header>
  )
}
export default Navbar