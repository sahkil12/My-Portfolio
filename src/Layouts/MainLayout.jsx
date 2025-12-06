import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";
import { useEffect, useState } from "react";

const MainLayout = () => {
     const [scrollTop, setScrollTop] = useState(false);

     useEffect(() => {
          const onScroll = () => {
               setScrollTop(window.scrollY > 20);
          };

          window.addEventListener("scroll", onScroll);
          return () => window.removeEventListener("scroll", onScroll);
     }, []);

     return (
          <div className="min-h-screen">
               <header className={`sticky z-50 transition-all duration-400 
               ${scrollTop ? "-top-1.5" : "top-0"
                    }`}>
                    <Navbar scrollTop={scrollTop}></Navbar>
               </header>
               <main className="mx-auto md:w-[85%]">
                    <Outlet></Outlet>
               </main>
          </div>
     );
};

export default MainLayout;