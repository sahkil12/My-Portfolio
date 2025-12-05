import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
     const [open, setOpen] = useState(false);
     const [active, setActive] = useState("home");
     const navItems = [
          { name: "Home", id: "home" },
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Projects", id: "projects" },
          { name: "Contact", id: "contact" },
     ];
     const scrollToSection = (id) => {
          setActive(id);
          const section = document.getElementById(id);
          console.log(section);
          section.scrollIntoView({ behavior: "smooth" });
     };

     return (
          <>
               {/* MAIN NAVBAR */}
               <div className="w-full py-5 px-5 flex items-center justify-between">
                    <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-base-200 ">
                         Mustafa .
                    </h1>
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-3 bg-base-100 px-3 py-2 rounded-full border border-[#1C2029]">
                         {navItems.map((item) => (
                              <Link
                                   key={item.name}
                                   onClick={() => scrollToSection(item.id)}
                                   to={item.path}
                                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all
                                             ${active === item.id
                                             ? "bg-gradient-to-r from-primary to-base-200 text-white shadow-lg"
                                             : "text-gray-300 hover:text-white hover:bg-[#1a1e28ae]"
                                        }
                                        `}
                              >
                                   {item.name}
                              </Link>
                         ))}
                    </div>

                    {/* Desktop Hire Me */}
                    <Link
                         to="/contact"
                         className="hidden text-sm lg:flex px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium hover:opacity-90 transition-all"
                    >
                         Hire Me
                    </Link>
                    {/* Mobile Menu Button */}
                    <button
                         className="lg:hidden rounded-full p-2 bg-base-100 border border-base-300/5  text-white text-2xl"
                         onClick={() => setOpen(true)}
                    >
                         <IoMenu />
                    </button>
               </div>
               {/* MOBILE FULLSCREEN MENU */}
               {open && (
                    <div className="fixed inset-0 bg-[#0B0E13] bg-opacity-80 backdrop-blur-xl z-50 p-5 flex flex-col">
                         {/* Top Bar */}
                         <div className="flex items-center justify-between mb-6">
                              <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-base-200">
                                   Mustafa .
                              </h1>
                              <button
                                   className="text-primary p-2 rounded-full bg-base-300/10 text-2xl"
                                   onClick={() => setOpen(false)}
                              >
                                   <IoClose />
                              </button>
                         </div>

                         {/* Menu Box */}
                         <div className="h-[410px] bg-[#12151D] rounded-2xl p-6 border border-[#1C2029] space-y-4 overflow-y-auto">
                              {navItems.map((item) => (
                                   <Link
                                        key={item.name}
                                        to={item.path}
                                        onClick={() => {
                                             setOpen(false)
                                             scrollToSection(item.id)
                                        }}
                                        className={
                                             `block px-4 py-3 text-base font-medium rounded-lg hover:bg-base-100 transition-all $ ${active === item.id
                                                  ? "bg-gradient-to-r from-base-300 to-base-200 text-white shadow-lg"
                                                  : "text-gray-300 hover:text-white"
                                             }`
                                        }
                                   >
                                        {item.name}
                                   </Link>
                              ))}
                         </div>

                         {/* Bottom Hire Me Button */}
                         <Link
                              to="/contact"
                              onClick={() => setOpen(false)}
                              className="mt-6 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center font-medium transition-all"
                         >
                              Hire Me
                         </Link>
                    </div>
               )}
          </>
     );
};

export default Navbar;
