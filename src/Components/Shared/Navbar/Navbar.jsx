import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Navbar = ({ scrollTop }) => {
     const [open, setOpen] = useState(false);
     const [activeMobile, setActiveMobile] = useState("home");

     const navItems = [
          { name: "Home", id: "home" },
          { name: "About", id: "about" },
          { name: "Skills", id: "skills" },
          { name: "Projects", id: "projects" },
          { name: "Contact", id: "contact" },
     ];
     return (
          <div className={`w-full transition-all duration-400 ${scrollTop
               ? "bg-[#0B0E13]/50 border-b backdrop-blur-xl border-white/5"
               : "bg-transparent"
               }`}>
               {/* navbar */}
               <div className={`md:w-[84%] mx-auto py-5 px-4 xl:px-16 flex items-center justify-between`}>
                    <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary/75 to-base-200">
                         Mustafa Tazwer.
                    </h1>
                    {/* Desktop Menu */}
                    <div className="hidden lg:flex items-center gap-4 bg-base-100 px-2 py-1.5 rounded-full border border-[#262b36f3]">
                         {navItems.map((item) => (
                              <Link
                                   key={item.name}
                                   to={item.id}
                                   spy={true}
                                   smooth={true}
                                   offset={-100}
                                   duration={500}
                                   onSetActive={() => setActiveMobile(item.id)}
                                   className={`px-4 py-2 text-sm font-medium rounded-full cursor-pointer ${activeMobile === item.id ? "bg-gradient-to-r from-primary to-base-200 text-white shadow-lg"
                                        : "text-gray-400 hover:text-white hover:bg-[#1a1e28ae]"
                                        }`}
                              >
                                   {item.name}
                              </Link>
                         ))}
                    </div>
                    {/* Desktop Hire Me */}
                    <button
                         className="hidden lg:flex px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-base-200 text-white text-base font-medium hover:opacity-90 transition-all cursor-pointer"
                    >
                         Hire Me
                    </button>
                    {/* Mobile Menu Button */}
                    <button
                         className="lg:hidden rounded-full p-2.5 bg-base-100 border border-base-300/5 text-white text-2xl hover:border-primary/40"
                         onClick={() => setOpen(true)}
                    >
                         <IoMenu />
                    </button>
               </div>
               {/* MOBILE FULLSCREEN MENU */}
               {open && (
                    <div
                         className="fixed inset-0 bg-[#0B0E13] bg-opacity-80 backdrop-blur-xl z-50 py-5 px-4 flex flex-col">
                         {/* Top Bar */}
                         <div className="flex items-center justify-between mb-6">
                              <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary/75 to-base-200">
                                   Mustafa Tazwer.
                              </h1>
                              <button
                                   className="text-primary p-2.5 rounded-full bg-base-300/10 text-2xl"
                                   onClick={() => setOpen(false)}
                              >
                                   <IoClose />
                              </button>
                         </div>
                         {/* Menu Box */}
                         <motion.div
                              initial={{ opacity: 0, y: 50 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 50 }}
                              transition={{ duration: 0.4, ease: "easeOut" }}
                         >
                              <div className="h-[360px] bg-[#12151D] rounded-2xl p-6 border border-[#1C2029] space-y-4">
                                   {navItems.map((item) => (
                                        <Link
                                             key={item.id}
                                             to={item.id}
                                             spy={true}
                                             smooth={true}
                                             offset={-100}
                                             duration={500}
                                             onSetActive={() => setActiveMobile(item.id)}
                                             onClick={() => {
                                                  setOpen(false)
                                                  setActiveMobile(item.id)
                                             }}
                                             className={`block px-4 py-3 text-base font-medium rounded-lg cursor-pointer
                                                   ${activeMobile === item.id
                                                       ? "bg-gradient-to-r from-base-300 to-base-200 text-white shadow-lg"
                                                       : "text-gray-300 hover:text-white hover:bg-[#1a1e28ae]"}
                                                 `}
                                        >
                                             {item.name}
                                        </Link>
                                   ))}
                              </div>
                              {/* Bottom Hire Me Button */}
                              <button
                                   onClick={() => setOpen(false)}
                                   className="mt-5 w-full px-4 py-3 rounded-lg bg-gradient-to-r from-secondary to-base-200 text-white text-center font-medium transition-all"
                              >
                                   Hire Me
                              </button>
                         </motion.div>
                    </div>
               )}
          </div>
     );
};

export default Navbar;
