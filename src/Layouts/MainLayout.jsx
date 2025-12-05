import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const MainLayout = () => {
     return (
          <div className="min-h-screen md:w-[85%] mx-auto ">
               <header className="sticky z-50 top-1 bg-accent">
                    <Navbar></Navbar>
               </header>
               <main>
                    <Outlet></Outlet>
               </main>
          </div>
     );
};

export default MainLayout;