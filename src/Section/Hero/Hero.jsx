import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
     return (
          <section className="relative min-h-[870px] my-3 flex items-center justify-around px-4 md:px-16 xl:px-20 overflow-hidden">
               {/* background animation color */}
               <div className="
                absolute inset-0 
                bg-[radial-gradient(circle_at_center,rgba(140,15,245,0.25),transparent_40%)]
                animate-pulseGlow pointer-events-none"></div>
               {/* main grid layout div */}
               <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                    {/* Left details text Content */}
                    <motion.div
                         initial={{ opacity: 0, x: -65 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: false, amount: 0.3 }}
                         className="text-left px-4 md:px-1"
                    >
                         <motion.span
                              initial={{ x: -40 }}
                              animate={{ x: 0 }}
                              transition={{ duration: .8 }}
                              className="px-4 py-3 rounded-full bg-primary/10 text-primary/95 border border-primary/50 text-xs md:text-sm font-medium flex items-center w-fit gap-3 mb-7">
                              <motion.p
                                   animate={{ scale: [1, 1.4, 1], opacity: [1, .6, 1] }}
                                   transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                                   className="bg-primary/70 w-2.5 h-2.5 rounded-full"></motion.p>Actively Seeking Internship
                         </motion.span>

                         <motion.h1
                              initial={{ y: 30, opacity: 0 }}
                              animate={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.8 }}
                              className="text-4xl lg:text-5xl xl:text-7xl font-semibold leading-tight 
                            text-transparent bg-clip-text bg-gradient-to-r from-purple-600/95 to-blue-500"
                         >
                              Hi, I’m <br />
                              <span className="inline-block">
                                   <Typewriter
                                        words={['Mustafa Tazwer']}
                                        loop={1}
                                        cursor
                                        cursorStyle="|"
                                        typeSpeed={120}
                                        deleteSpeed={0}
                                        delaySpeed={2000}
                                   />
                              </span>
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

                         <motion.p
                              initial={{ y: 40, opacity: 0 }}
                              animate={{ y: 0, opacity: 1.1 }}
                              transition={{ duration: 1.2 }}
                              className="text-gray-400 text-sm md:text-lg/relaxed mt-6 max-w-xl">
                              I build modern, user-friendly web applications using the <b>MERN stack</b>,
                              focused on clean UI and real-world functionality.
                         </motion.p>
                         {/* Buttons */}
                         <div className="mt-9 flex flex-wrap gap-4">
                              {/* project button */}
                              <motion.a
                                   initial={{ opacity: 0, y: 20 }}
                                   animate={{ opacity: 1, y: 0 }}
                                   whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 6px 20px rgba(84, 90, 155, 0.35)",
                                        backgroundColor: "rgb(129,140,248)"
                                   }}
                                   whileTap={{ scale: 0.95 }}
                                   transition={{ type: 'spring', stiffness: 350, damping: 20, duration: 1.4 }}
                                   href="#projects" className="px-7 py-2.5 bg-gradient-to-r from-primary to-base-200/90 rounded-full cursor-pointer hover:opacity-95 font-semibold text-gray-100 border-none">
                                   View Projects
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
                    {/* right side - Image part*/}
                    <motion.div
                         initial={{ opacity: 0, x: 50 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 1 }}
                         viewport={{ once: false, amount: 0.3 }}
                         className="flex justify-center xl:justify-end relative"
                    >
                         <motion.div
                              animate={{ y: [0, -15, 0] }}
                              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                              className="relative transition-all duration-600">
                              {/*animation border style */}
                              <div className="absolute inset-0 rounded-full animate-rotateArc before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[6px] before:border-transparent before:border-t-primary/85 before:border-r-base-200/20 before:border-l-base-200/20 before:border-b-secondary/90"></div>
                              {/* image */}
                              <div className="relative rounded-full m-3">
                                   <img
                                        src="/mustafa-tazwer-hero-image.webp"
                                        alt="profile photo"
                                        className="rounded-full opacity-85 w-56 h-56 md:w-[300px] 
                                        md:h-[300px] xl:w-[420px] xl:h-[420px] object-cover"
                                   />
                              </div>
                              {/* status badges */}
                              <motion.section
                                   animate={{ y: [0, 10, 0] }}
                                   transition={{ duration: 3, repeat: Infinity }}
                              >
                                   <motion.div
                                        whileHover={{
                                             scale: 1.1,
                                             rotate: [0, -5, 5, 0],
                                             transition: { duration: 0.3 },
                                        }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="absolute -bottom-2.5 lg:-bottom-3 -right-[85px] lg:-right-24 -translate-x-1/2 bg-gray-900 border-2 border-primary/30 hover:border-primary/50 px-3.5 py-3.5 lg:px-6 rounded-2xl flex items-center gap-3.5 shadow-lg"
                                   >
                                        <motion.span
                                             animate={{ rotate: 360 }}
                                             transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                                             className="bg-primary/40 p-2 lg:p-3 rounded-full text-base md:text-xl">🚀</motion.span>
                                        <span>
                                             <p className="text-sm lg:text-base font-semibold text-gray-400 mb-1">Status</p>
                                             <p className="text-xs lg:text-sm font-semibold text-gray-300">Ready to Work</p>
                                        </span>
                                   </motion.div>
                              </motion.section>
                         </motion.div>
                    </motion.div>
               </div>

          </section>

     );
};

export default Hero;