import React from 'react';
import Logo from "./Logo";
import MoreDropdown from "./MoreDropDown";
import NavLinks from "./NavLink";
import Link from 'next/link';

function SideNav() {
  return (
    <div className="flex flex-col md:flex-row px-1 py-1 md:px-1">
    <div className="md:ml-1 bg-transparent dark:bg-neutral-950 h-3 justify-between fixed z-50 flex-1 w-20 lg:w-40 md:relative bottom-0 md:border-none md:justify-between space-x-2 md:flex-col md:space-x-0=2 md:space-y-2 p-1">
    <div className="h-[10dvh] flex items-center">
    <Link href="./">
    <Logo />
    </Link>
    </div>
    <NavLinks />
    </div>
    {/* Additional container for MoreDropdown outside the main container */}
    <div className="fixed bottom-0 md:relative md:mt-auto text-slate-800">
    <MoreDropdown />
    </div>
    </div>
    );
  }
  
  export default SideNav;
  