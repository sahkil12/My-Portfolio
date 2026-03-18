import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiArrowRight, FiDownload, FiLayers, FiZap } from "react-icons/fi";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiNextdotjs } from "react-icons/si";

const Hero = () => {
     return (
          <section className="relative min-h-[98vh] my-3 flex items-center justify-around px-4 md:px-16 xl:px-24 overflow-hidden">
               {/* background animation color */}
               <div className="
                absolute inset-0 
                bg-[radial-gradient(circle_at_center,rgba(140,15,245,0.20),transparent_40%)]
                animate-pulseGlow pointer-events-none"></div>
               {/* main grid layout div */}
               <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center">
                    {/* Left details text Content */}
                    <motion.div
                         initial={{ opacity: 0, x: -65 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: true, amount: 0.3 }}
                         className="text-left px-4 md:px-1"
                    >
                         {/* top badges */}
                         <motion.span
                              initial={{ x: -40, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ duration: 0.8 }}
                              className="mb-5 md:mb-7 flex w-fit items-center gap-3 rounded-full border border-primary/30 bg-primary/10 px-5 py-2.5 text-[10px] sm:text-xs font-medium text-primary/95 backdrop-blur-xl md:text-sm xl:text-[15px]"
                         >
                              <motion.p
                                   animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                                   transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                   className="h-2.5 w-2.5 rounded-full bg-primary/95 shadow-[0_0_14px_rgba(168,85,247,0.8)]"
                              ></motion.p>
                              Open to Frontend & MERN Roles
                         </motion.span>
                         {/* heading name */}
                         <motion.h1
                              initial={{ y: 30, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.8 }}
                              className="text-4xl lg:text-5xl xl:text-7xl font-bold leading-tight 
                            text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-300/90"
                         >
                              Hi, I’m <br />
                              Mustafa Tazwer
                         </motion.h1>
                         {/*  */}
                         <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="mt-4 text-lg md:text-xl text-primary/95 font-medium"
                         >
                              <Typewriter
                                   words={[
                                        'MERN Stack Developer',
                                        'React & Node.js Developer',
                                        'Front-end Developer',
                                        'Building Modern Web Applications'
                                   ]}
                                   loop={0}
                                   cursor
                                   cursorStyle="|"
                                   typeSpeed={80}
                                   deleteSpeed={55}
                                   delaySpeed={1500}
                              />
                         </motion.p>
                         {/* description */}
                         <motion.p
                              initial={{ y: 40, opacity: 0 }}
                              animate={{ y: 0, opacity: 1.1 }}
                              transition={{ duration: 1.2 }}
                              className="text-gray-300 text-sm md:text-lg/relaxed mt-6 max-w-xl">
                              I build modern, fast and scalable web applications
                              with clean UI and real-world functionality.
                         </motion.p>
                         {/* extra mini highlights */}
                         <motion.div
                              initial={{ opacity: 0, y: 25 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.9, delay: 0.25 }}
                              className="mt-5 flex flex-wrap gap-3"
                         >
                              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-lg md:text-sm">
                                   <FiZap className="text-primary" />
                                   Fast UI
                              </div>
                              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-lg md:text-sm">
                                   <FiLayers className="text-primary" />
                                   Clean Design
                              </div>
                              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-lg md:text-sm">
                                   <FiDownload className="text-primary" />
                                   Real Projects
                              </div>
                         </motion.div>
                         {/* Buttons */}
                         <div className="mt-6 md:mt-10 flex flex-wrap gap-4">
                              {/* project button */}
                              <motion.a
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   whileHover={{
                                        scale: 1.04,
                                        y: -2,
                                        boxShadow: "0 12px 35px rgba(84, 90, 155, 0.35)",
                                   }}
                                   whileTap={{ scale: 0.95 }}
                                   transition={{ type: "spring", stiffness: 350, damping: 20, duration: 1.4 }}
                                   href="#projects"
                                   className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-base-200/90 px-7 py-3 font-semibold text-gray-100 shadow-lg shadow-primary/20"
                              >
                                   View My Work
                                   <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                              </motion.a>
                              {/* get in touch button */}
                              <motion.a
                                   initial={{ opacity: 0, y: 25 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 6px 20px rgba(165, 139, 250, 0.25)",
                                        backgroundColor: "rgba(155,129,240,0.15)"
                                   }}
                                   whileTap={{ scale: 0.95 }}
                                   transition={{ type: 'spring', stiffness: 350, damping: 35, duration: 1.4 }}
                                   href="#contact" className="px-8 py-2.5 bg-base-100 hover:border-primary/90 border border-primary/60 cursor-pointer rounded-full font-semibold text-gray-100">
                                   Let’s Talk
                              </motion.a>
                         </div>
                    </motion.div>
                    {/* right side - Image part */}
                    <motion.div
                         initial={{ opacity: 0, x: 60 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.9 }}
                         viewport={{ once: true, amount: 0.3 }}
                         className="relative flex justify-center xl:justify-end"
                    >
                         <motion.div
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                              className="relative"
                         >
                              {/* image card */}
                              <div className="hero-image-snake relative h-[340px] w-[300px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-2.5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:h-[420px] md:w-[360px] xl:h-[520px] 
                              xl:w-[440px]">
                                   {/* inner frame */}

                                   <div className="relative z-[2] h-full w-full overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
                                        <img
                                             src="/mustafa-tazwer-image.webp"
                                             alt="Mustafa Tazwer Profile Photo"
                                             loading="lazy"
                                             decoding="async"
                                             className="h-full w-full object-cover"
                                        />
                                        {/* image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#060816]/55 via-transparent to-transparent"></div>
                                   </div>
                              </div>
                              {/* floating card 1 */}
                              <motion.div
                                   animate={{ y: [0, 10, 0] }}
                                   transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                   className="absolute -left-20 top-20 hidden rounded-2xl border border-white/10 bg-[#0b1224]/75 px-4 py-3 backdrop-blur-2xl sm:block"
                              >
                                   <span className="flex items-center gap-2 mb-1">
                                        <motion.p
                                             animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                                             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                             className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_14px_rgba(168,85,247,0.8)]"
                                        ></motion.p>
                                        <p className="text-xs text-gray-400">Focus</p>
                                   </span>
                                   <p className="text-sm font-semibold text-white">Premium Frontend UI</p>
                              </motion.div>
                              {/* floating card 2 */}
                              <motion.div
                                   animate={{ y: [0, -10, 0] }}
                                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                   className="absolute -bottom-2 -right-4 sm:-bottom-4 sm:-right-10 rounded-2xl border border-white/10 bg-[#0b1224]/75 px-4 py-3 shadow-xl backdrop-blur-2xl md:px-5"
                              >
                                   <span className="flex items-center gap-2 mb-1">
                                        <motion.p
                                             animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                                             transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                             className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_14px_rgba(168,85,247,0.8)]"
                                        ></motion.p>
                                        <p className="text-xs text-gray-400">Status</p>
                                   </span>
                                   <p className="text-sm font-semibold text-white">Available for Opportunities</p>
                              </motion.div>
                              {/* extra box 1 */}
                              <motion.div
                                   animate={{ y: [0, 10, 0] }}
                                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                   className="absolute -top-5 left-1/2 z-20 flex -translate-x-1/2 gap-3 rounded-full border border-white/10 bg-[#0b1224]/75 px-4 py-2 backdrop-blur-xl shadow-lg"
                              >
                                   <FaReact className="text-cyan-400 text-lg" />
                                   {/* <SiNextdotjs className="text-gray-300 text-lg" /> */}
                                   <FaNodeJs className="text-green-400 text-lg" />
                                   <SiMongodb className="text-green-500 text-lg" />
                                   <SiExpress className="text-gray-200 text-lg" />
                              </motion.div>
                              
                         </motion.div>
                    </motion.div>
               </div>
          </section>
     );
};

export default Hero;