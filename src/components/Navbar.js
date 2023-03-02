import { useState } from "react";
import { NavLink } from "react-router-dom";


function Navbar(props) {
    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
      };
    return (
        <nav className="z-50 font-nunito bg-white w-full shadow">
          <div className="max-w-7xl mx-auto flex items-center justify-between p-6 md:p-4">
            <div className="text-2xl font-bold">
             <NavLink to="/">BookApp</NavLink>
            </div>
            <div>
                <div className="relative">
                  <div>
                    <button type="button" onClick={toggleDropdown} className="flex text-sm bg-gray-200 rounded-full focus:ring-4 focus:ring-gray-300" aria-expanded="false">
                      <span className="sr-only">Open user menu</span>
                      <img className="w-8 h-8 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user"/>
                    </button>
                  </div>
                  {/* User-dropdown */}
                  <div className={`${showDropdown ? "block" : "hidden"} z-50 absolute left-3/4 -translate-x-full md:left-1/2 md:-translate-x-1/2  my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow`}>
                    <div className="px-4 py-3" role="none">
                      <p className="text-sm text-gray-900" role="none">
                        Neil Sims
                      </p>
                      <p className="text-sm font-medium text-gray-900 truncate" role="none">
                        neil.sims@flowbite.com
                      </p>
                    </div>
                    <ul className="py-1" role="none">
                      <li>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Dashboard</a>
                      </li>
                      <li>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Profile</a>
                      </li>
                      <li>
                        <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
          </div>
      </nav>
      
    );
}

export default Navbar;