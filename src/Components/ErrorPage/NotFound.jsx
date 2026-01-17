import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHome } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/20 to-black text-white px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <h1 className="text-7xl md:text-9xl font-extrabold text-primary mb-5">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 mb-8">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="px-7 py-3 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-primary to-base-200 transition-all duration-300 hover:-translate-y-0.5 flex w-fit items-center justify-center gap-2 mx-auto"
        >
          <FaHome size={20}/>
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;
