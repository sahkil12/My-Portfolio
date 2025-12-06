import { Outlet } from "react-router-dom";
import Navbar from "../Components/Shared/Navbar/Navbar";

const MainLayout = () => {
     return (
          <div className="min-h-screen md:w-[85%] mx-auto ">
               <header className="sticky z-50 top-0 bg-opacity-30 backdrop-blur-2xl">
                    <Navbar></Navbar>
               </header>
               <main>
                    <Outlet></Outlet>
               </main>
          </div>
     );
};

export default MainLayout;