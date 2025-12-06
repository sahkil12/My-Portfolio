import { motion } from "framer-motion";

const Hero = () => {
     return (
          <section className="h-[860px] flex items-center justify-around px-5 md:px-16 xl:px-32 ">
               <div className="
                absolute inset-0 
                bg-[radial-gradient(circle_at_center,rgba(120,20,255,0.15),transparent_40%)]
                animate-pulseGlow"></div>

               <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                    {/* Left Text Content */}
                    <motion.div
                         initial={{ opacity: 0, x: -60 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         viewport={{ once: false, amount: 0.3 }}
                         className="text-left px-4 md:px-1"
                    >
                         <span className="px-4 py-3 rounded-full bg-primary/10 text-primary/90 border border-primary/50 text-xs md:text-sm font-medium inline-block mb-7">
                              MERN Stack Developer
                         </span>

                         <h1 className="text-5xl lg:text-7xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-primary/70 to-base-200">
                              Hi, i'm <br />  Mustafa Tazwer
                         </h1>
                         <p className="text-gray-400 text-base md:text-lg/relaxed mt-6 max-w-xl">
                              Fresh MERN Stack Developer passionate about creating beautiful web experiences. Skilled in React, Node.js, and modern web technologies.
                         </p>
                         {/* Buttons */}
                         <div className="mt-9 flex gap-4">
                              <a href="#projects" className="px-7 py-2.5 bg-gradient-to-r from-secondary to-base-200 rounded-full hover:opacity-90 font-medium text-gray-200 border-none">
                                   My Projects
                              </a>

                              <a href="#contact" className="px-7 py-2.5 bg-base-100 hover:border-primary/90 border border-primary/60 rounded-full font-medium text-gray-200">
                                   Get In Touch
                              </a>
                         </div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                         initial={{ opacity: 0, scale: 0.95, x: 50 }}
                         whileInView={{ opacity: 1, scale: 1, x: 0 }}
                         transition={{ duration: 1 }}
                         viewport={{ once: false, amount: 0.3 }}
                         className="flex justify-center xl:justify-end"
                    >
                         <div className="relative hover:scale-105 transition-all duration-600">
                              <div className="absolute inset-0 rounded-full border-[5px] border-base-300/80 opacity-80"></div>

                              <div className="relative rounded-full m-3">
                                   <img
                                        src="/public/hero-pic.jpg" // <- replace with your image path
                                        alt="profile photo"
                                        className="rounded-full  opacity-75 w-96 h-96 lg:w-[410px] lg:h-[410px] object-cover"
                                   />
                              </div>
                         </div>
                    </motion.div>
               </div>
          </section>

     );
};

export default Hero;