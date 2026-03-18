import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { FiArrowRight, FiBriefcase, FiCode, FiLayers } from "react-icons/fi";

const Hero = () => {
     return (
          <section className="relative min-h-[95vh] overflow-hidden px-4 md:px-10 xl:px-20 flex items-center">
               {/* Background */}
               <div className="absolute inset-0 -z-30 bg-[#060816]"></div>

               {/* Glow */}
               <div className="absolute inset-0 -z-20 pointer-events-none">
                    <div className="absolute left-[-10%] top-[8%] h-72 w-72 rounded-full bg-violet-600/20 blur-3xl"></div>
                    <div className="absolute right-[-8%] top-[12%] h-80 w-80 rounded-full bg-sky-500/20 blur-3xl"></div>
                    <div className="absolute bottom-[-10%] left-[28%] h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:42px_42px] opacity-[0.16]"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(140,15,245,0.16),transparent_35%)]"></div>
               </div>

               <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 xl:grid-cols-2 xl:gap-20">
                    {/* Left Content */}
                    <motion.div
                         initial={{ opacity: 0, x: -60 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: false, amount: 0.3 }}
                         className="relative"
                    >
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.7 }}
                              className="mb-7 inline-flex w-fit items-center gap-3 rounded-full border border-primary/25 bg-white/5 px-5 py-2.5 text-xs font-medium text-primary/95 backdrop-blur-xl md:text-sm"
                         >
                              <span className="relative flex h-2.5 w-2.5">
                                   <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                                   <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary"></span>
                              </span>
                              Open to Frontend & MERN Roles
                         </motion.div>

                         <motion.h1
                              initial={{ y: 30, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.8 }}
                              className="text-4xl font-semibold leading-[1.05] tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-violet-200 to-sky-300 sm:text-5xl lg:text-6xl xl:text-7xl"
                         >
                              Hi, I’m <br />
                              Mustafa Tazwer
                         </motion.h1>

                         <motion.p
                              initial={{ y: 20, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                              className="mt-5 text-lg font-medium text-primary/95 md:text-xl"
                         >
                              <Typewriter
                                   words={[
                                        "MERN Stack Developer",
                                        "React & Node.js Developer",
                                        "Front-end Developer",
                                        "Building Modern Web Applications",
                                   ]}
                                   loop={0}
                                   cursor
                                   cursorStyle="|"
                                   typeSpeed={80}
                                   deleteSpeed={55}
                                   delaySpeed={1500}
                              />
                         </motion.p>

                         <motion.p
                              initial={{ y: 35, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 1 }}
                              className="mt-6 max-w-xl text-sm leading-7 text-gray-300/90 md:text-lg"
                         >
                              I build modern, fast and scalable web applications
                              with clean UI and real-world functionality.
                         </motion.p>

                         {/* small feature pills */}
                         <motion.div
                              initial={{ opacity: 0, y: 18 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.9, delay: 0.25 }}
                              className="mt-8 flex flex-wrap gap-3"
                         >
                              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-lg md:text-sm">
                                   <FiCode className="text-violet-300" />
                                   Clean Code
                              </div>
                              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-lg md:text-sm">
                                   <FiLayers className="text-sky-300" />
                                   Modern UI
                              </div>
                              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-gray-300 backdrop-blur-lg md:text-sm">
                                   <FiBriefcase className="text-fuchsia-300" />
                                   Real Projects
                              </div>
                         </motion.div>

                         {/* buttons */}
                         <div className="mt-9 flex flex-wrap gap-4">
                              <motion.a
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   whileHover={{ scale: 1.04, y: -2 }}
                                   whileTap={{ scale: 0.97 }}
                                   transition={{ type: "spring", stiffness: 320, damping: 20 }}
                                   href="#projects"
                                   className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-sky-500 px-7 py-3 font-semibold text-white shadow-[0_12px_35px_rgba(99,102,241,0.30)]"
                              >
                                   View My Work
                                   <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                              </motion.a>

                              <motion.a
                                   initial={{ opacity: 0, y: 24 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   whileHover={{ scale: 1.04, y: -2 }}
                                   whileTap={{ scale: 0.97 }}
                                   transition={{ type: "spring", stiffness: 320, damping: 24 }}
                                   href="#contact"
                                   className="rounded-full border border-white/15 bg-white/5 px-8 py-3 font-semibold text-gray-100 backdrop-blur-xl hover:border-primary/60"
                              >
                                   Let’s Talk
                              </motion.a>
                         </div>
                    </motion.div>

                    {/* Right Content */}
                    <motion.div
                         initial={{ opacity: 0, x: 60 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.9 }}
                         viewport={{ once: false, amount: 0.3 }}
                         className="relative flex justify-center xl:justify-end"
                    >
                         <motion.div
                              animate={{ y: [0, -10, 0] }}
                              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                              className="relative"
                         >
                              {/* outer glow */}
                              <div className="absolute -inset-6 rounded-[38px] bg-gradient-to-r from-violet-500/10 via-transparent to-sky-500/10 blur-2xl"></div>

                              {/* image card */}
                              <div className="relative h-[320px] w-[280px] overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-2xl md:h-[420px] md:w-[360px] xl:h-[500px] xl:w-[420px]">
                                   {/* snake moving border */}
                                   <div className="pointer-events-none absolute inset-0 rounded-[32px]">
                                        <span className="absolute left-0 top-0 h-[3px] w-24 rounded-full bg-gradient-to-r from-transparent via-violet-400 to-sky-400 animate-[snakeX_4s_linear_infinite]"></span>
                                        <span className="absolute right-0 top-0 h-24 w-[3px] rounded-full bg-gradient-to-b from-transparent via-sky-400 to-fuchsia-400 animate-[snakeY_4s_linear_infinite_1s]"></span>
                                        <span className="absolute bottom-0 right-0 h-[3px] w-24 rounded-full bg-gradient-to-l from-transparent via-fuchsia-400 to-violet-400 animate-[snakeXReverse_4s_linear_infinite_2s]"></span>
                                        <span className="absolute bottom-0 left-0 h-24 w-[3px] rounded-full bg-gradient-to-t from-transparent via-violet-400 to-sky-400 animate-[snakeYReverse_4s_linear_infinite_3s]"></span>
                                   </div>

                                   {/* inner frame */}
                                   <div className="relative h-full w-full overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-b from-white/10 to-white/5">
                                        <img
                                             src="/mustafa-tazwer-hero-image.webp"
                                             alt="Mustafa Tazwer Profile Photo"
                                             loading="lazy"
                                             decoding="async"
                                             className="h-full w-full object-cover"
                                        />

                                        {/* image overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#060816]/45 via-transparent to-transparent"></div>
                                   </div>
                              </div>

                              {/* floating card 1 */}
                              <motion.div
                                   animate={{ y: [0, 10, 0] }}
                                   transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                                   className="absolute -left-10 top-8 hidden rounded-2xl border border-white/10 bg-[#0b1224]/80 px-4 py-3 backdrop-blur-xl md:block"
                              >
                                   <p className="text-xs text-gray-400">Focus</p>
                                   <p className="text-sm font-semibold text-white">Premium Frontend UI</p>
                              </motion.div>

                              {/* floating card 2 */}
                              <motion.div
                                   animate={{ y: [0, -10, 0] }}
                                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                   className="absolute -bottom-4 -right-6 rounded-2xl border border-white/10 bg-[#0b1224]/85 px-4 py-3 shadow-xl backdrop-blur-xl md:px-5"
                              >
                                   <p className="text-xs text-gray-400">Status</p>
                                   <p className="text-sm font-semibold text-white">Available for Opportunities</p>
                              </motion.div>
                         </motion.div>
                    </motion.div>
               </div>

               {/* custom animation */}
               <style>
                    {`
                    @keyframes snakeX {
                         0% { transform: translateX(0); }
                         100% { transform: translateX(calc(100% + 180px)); }
                    }

                    @keyframes snakeY {
                         0% { transform: translateY(0); }
                         100% { transform: translateY(calc(100% + 180px)); }
                    }

                    @keyframes snakeXReverse {
                         0% { transform: translateX(0); }
                         100% { transform: translateX(calc(-100% - 180px)); }
                    }

                    @keyframes snakeYReverse {
                         0% { transform: translateY(0); }
                         100% { transform: translateY(calc(-100% - 180px)); }
                    }
                    `}
               </style>
          </section>
     );
};

export default Hero;



import { motion } from "framer-motion"; 
import { Typewriter } from "react-simple-typewriter"; 
const Hero = () => { 
          return ( 
     <section 
     className="relative min-h-[95vh] my-3 flex items-center justify-around px-4 md:px-16 xl:px-20 overflow-hidden"> {/* background animation color */} 
     <div 
     className=" absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(140,15,245,0.25),transparent_40%)] animate-pulseGlow pointer-events-none"></div> 
     {/* main grid layout div */} 
     <div 
     className="w-full grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-16 items-center"> 
     {/* Left details text Content */} 
     <motion.div
      initial={{ opacity: 0, x: -65 }} 
      whileInView={{ opacity: 1, x: 0 }} 
      transition={{ duration: 0.8 }} 
      viewport={{ once: false, amount: 0.3 }} 
      className="text-left px-4 md:px-1" > 
      <motion.span 
      initial={{ x: -40 }}
       animate={{ x: 0 }} 
       transition={{ duration: .8 }} 
       className="px-5 py-2.5 rounded-full bg-primary/10 text-primary/95 border border-primary/50 text-xs md:text-sm xl:text-[15px] font-medium flex items-center w-fit gap-3 mb-7"> 
       <motion.p 
       animate={{ scale: [1, 1.4, 1], opacity: [1, .6, 1] }} 
       transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }} 
       className="bg-primary/90 w-2.5 h-2.5 rounded-full">
          </motion.p> Open to Frontend & MERN Roles 
     </motion.span> 
          <motion.h1 
          initial={{ y: 30, opacity: 0 }}
           animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }} 
            className="text-4xl lg:text-5xl xl:text-7xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600/95 to-blue-500" >
                Hi, I’m <br /> Mustafa Tazwer 
                </motion.h1> 
                {/* */} 
                <motion.p 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }}
                 transition={{ duration: 0.8, delay: 0.2 }} 
                 className="mt-4 text-lg md:text-xl text-primary/95 font-medium" > 
                 <Typewriter 
                 words={
                    [ 'MERN Stack Developer', 
                         'React & Node.js Developer', 
                         'Front-end Developer', 
                         'Building Modern Web Applications'
                     ]}
                      loop={0} 
                      cursor cursorStyle="|" 
                      typeSpeed={80}
                       deleteSpeed={55}
                        delaySpeed={1500} /> 
                        </motion.p> 
                        {/* description */} 
                        <motion.p 
                        initial={{ y: 40, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1.1 }}
                         transition={{ duration: 1.2 }} 
                         className="text-gray-300/90 text-sm md:text-lg/relaxed mt-6 max-w-xl"> 
                         I build modern, fast and scalable web applications with clean UI and real-world functionality. </motion.p> {/* Buttons */} 
                         <div className="mt-9 flex flex-wrap gap-4"> {/* project button */} <motion.a initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(84, 90, 155, 0.35)", backgroundColor: "rgb(129,140,248)" }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 350, damping: 20, duration: 1.4 }} href="#projects" className="px-7 py-2.5 bg-gradient-to-r from-primary to-base-200/90 rounded-full cursor-pointer hover:opacity-95 font-semibold text-gray-100 border-none"> View My Work </motion.a> {/* get in touch button */} <motion.a initial={{ opacity: 0, y: 25 }} animate={{ opacity: 1, y: 0 }} whileHover={{ scale: 1.05, boxShadow: "0 6px 20px rgba(165, 139, 250, 0.25)", backgroundColor: "rgba(155,129,240,0.15)" }} whileTap={{ scale: 0.95 }} transition={{ type: 'spring', stiffness: 350, damping: 35, duration: 1.4 }} href="#contact" className="px-8 py-2.5 bg-base-100 hover:border-primary/90 border border-primary/60 cursor-pointer rounded-full font-semibold text-gray-100"> Let’s Talk </motion.a> </div> </motion.div> {/* right side - Image part*/} <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 1 }} viewport={{ once: false, amount: 0.3 }} className="flex justify-center xl:justify-end relative" > <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }} className="relative transition-all duration-600"> {/*animation border style */} <div className="absolute inset-0 rounded-full animate-rotateArc before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[6px] before:border-transparent before:border-t-primary/85 before:border-r-base-200/20 before:border-l-base-200/20 before:border-b-secondary/90"></div> {/* image */} <div className="relative rounded-full m-3"> <img src="/mustafa-tazwer-hero-image.webp" alt="Mustafa Tazwer Profile Photo" loading="lazy" decoding="async" className="rounded-full opacity-85 w-56 h-56 md:w-[300px] md:h-[300px] xl:w-[420px] xl:h-[420px] object-cover bg-primary/35" /> </div> {/* status badges */} <motion.section animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity }} > <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="absolute -bottom-2 lg:-bottom-3 -right-20 lg:-right-28 -translate-x-1/2 bg-gray-900 border-2 border-primary/30 hover:border-primary/50 px-3 py-3 lg:px-6 rounded-2xl flex items-center gap-3.5 shadow-lg" > <motion.span animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} className="bg-primary/40 p-2 md:p-3 rounded-full text-sm md:text-xl">🚀</motion.span> <span> <p className="text-[13px] lg:text-[15px] font-semibold text-gray-400 mb-1">Status</p> <p className="text-[11px] lg:text-[13px] font-medium text-gray-300/85">Available for Opportunities</p> </span> </motion.div> </motion.section> </motion.div> </motion.div> </div> </section> ); }; export default Hero;