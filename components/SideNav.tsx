
import React from 'react';
import Logo from "./Logo"
import MoreDropdown from "./MoreDropDown"
import NavLinks from "./NavLink"
function SideNav() {
  return <div className="flex md:flex-col px-3 py-2 md:px-2">
  <div className="border-l border-cyan-400 -ml-3 md:ml-0 bg-transparent dark:bg-neutral-950 h-8 justify-between fixed z-50 flex-1 w-full md:relative md:h-full bottom-0 md:border-none flex flex-row md:justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2 p-2 items-center">
  <a href="./">
  <Logo />
  </a>
  </div>
  <div className="justify-between flex">
  <NavLinks />
  <div className="hiddenflex relative md:mt-auto flex-1 place-items-end text-slate-800">
  <MoreDropdown />
  </div> 
  </div>
  </div>
}
export default SideNav