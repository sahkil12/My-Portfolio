import { motion } from "framer-motion";

const Hero = () => {
     return (
          <section className="relative min-h-[820px] my-5 flex items-center justify-around px-3 md:px-16 overflow-hidden">
               <div className="
                absolute inset-0 
                bg-[radial-gradient(circle_at_center,rgba(120,20,255,0.15),transparent_45%)]
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

                         <h1 className="text-4xl lg:text-5xl xl:text-7xl font-semibold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-purple-600/80 to-blue-500">
                              Hi, i'm <br />  Mustafa Tazwer
                         </h1>
                         <p className="text-gray-400 text-sm md:text-lg/relaxed mt-6 max-w-xl">
                              Building modern, user-friendly web applications with the <b>MERN Stack</b> while growing my skills and delivering clean, thoughtful digital experiences
                         </p>
                         {/* Buttons */}
                         <div className="mt-9 flex flex-wrap gap-4">
                              <motion.a href="#projects" className="px-7 py-2.5 bg-gradient-to-r from-secondary to-base-200 rounded-full hover:opacity-90 font-semibold text-gray-300 border-none">
                                   My Projects
                              </motion.a>

                              <motion.a href="#contact" className="px-7 py-2.5 bg-base-100 hover:border-primary/90 border border-primary/60 rounded-full font-semibold text-gray-300">
                                   Get In Touch
                              </motion.a>
                         </div>
                    </motion.div>

                    {/* my Image */}
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
                              className="relative hover:scale-105 transition-all duration-600">
                                   {/* border style */}
                              <div className="absolute inset-0 rounded-full animate-rotateArc before:content-[''] before:absolute before:inset-0 before:rounded-full before:border-[5px] before:border-transparent before:border-t-primary/70 before:border-r-primary/10 before:border-l-base-200/10 before:border-b-base-200/70"></div>

                              <div className="relative rounded-full m-3">
                                   <img
                                        src="/public/hero-pic.jpg"
                                        alt="profile photo"
                                        className="rounded-full opacity-85 w-64 h-64 md:w-[300px] md:h-[300px]  lg:w-[400px] lg:h-[400px] object-cover"
                                   />
                              </div>
                         </motion.div>
                    </motion.div>
               </div>
          </section>

     );
};

export default Hero;