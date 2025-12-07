import { motion } from "framer-motion";

const About = () => {
     return (
          <div className=" py-16 px-5 md:px-16 text-gray-300">

               {/* TITLE */}
               <div className="text-center mb-16">
                    <motion.h2
                         initial={{ opacity: 0, y: -20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         className="text-4xl md:text-5xl font-bold"
                    >
                         About Me
                    </motion.h2>
                    {/* Gradient underline */}
                    <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: 90 }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="h-1 mx-auto mt-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    ></motion.div>
               </div>
               {/* CONTENT GRID */}
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
                    {/*left side- image section */}
                    <motion.div
                         initial={{ opacity: 0, x: -40 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.8 }}
                         className="flex justify-center"
                    >
                         <motion.div
                              animate={{ y: [0, -22, 0] }}
                              transition={{ duration: 3, repeat: Infinity }}
                              className="relative group">
                              {/* animation bg */}
                              <div className="absolute -inset-5 rounded-full bg-gradient-to-r from-purple-600/20 to-primary/20 blur-2xl animate-[pulse_3s_ease-in-out_infinite]"></div>
                              {/* image */}
                              <img
                                   src="/public/about.jpg"
                                   alt="about photo"
                                   className="w-64 h-64 md:w-[330px] md:h-[330px] object-cover rounded-full opacity-90 shadow-xl m-3 transition-all duration-500"
                              />
                              {/* glow border */}
                              <div className="absolute inset-0 rounded-full border-[4px] border-base-200/70 animate-pulse blur-[2px]"></div>
                         </motion.div>
                    </motion.div>
                    {/* TEXT SIDE */}
                    <div>
                         <motion.section
                              initial={{ opacity: 0, y: -30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.8 }}
                              className=" bg-base-100 p-5 rounded-2xl "
                         >
                              <h3 className="text-2xl md:text-4xl font-semibold text-white mb-5">
                                   I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500 ">Mustafa Tazwer</span>
                              </h3>
                              <p className="text-gray-400 font-medium leading-7 mb-4">
                                   I work as a <strong className="shiny-text">MERN Stack Developer</strong> and I enjoy building modern,
                                   user-friendly and smooth web applications. I love turning ideas
                                   into clean and functional digital experiences. I'm always learning,
                                   improving, and exploring new tools that help me write better code.
                              </p>
                              <p className="text-gray-400 font-medium leading-7 mb-8">
                                   My journey started with simple HTML pages and slowly moved
                                   into JavaScript, React, Node and MongoDB. Every project helps me
                                   grow and pushes me to become a better developer every day.
                              </p>
                         </motion.section>
                         {/*  */}
                         <motion.section
                              className="mt-6 ml-3 flex text-start flex-col">
                              {/* EXPERIENCE */}
                              <motion.div
                                   initial={{ opacity: 0, x: 30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   className="">
                                   <h2 className="text-xl italic text-white font-semibold mb-3">EXPERIENCE</h2>
                                   <p className="text-gray-300 font-semibold text-base mb-1.5">
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">MERN Stack</span> Developer
                                   </p>
                                   <p className="text-gray-400 text-sm ">@FRESHER | 2025.4 - PRESENT</p>
                              </motion.div>
                              {/* TECHNICAL SKILLS */}
                              <motion.div
                                   initial={{ opacity: 0, x: 30 }}
                                   whileInView={{ opacity: 1, x: 0 }}
                                   transition={{ duration: .80 }}
                                   className="mt-5">
                                   <h2 className="text-xl italic text-white font-semibold mb-3">
                                        TECHNICAL SKILLS
                                   </h2>
                                   <ul className="space-y-1 text-sm text-gray-400 list-disc ml-5">
                                        <li><strong>Frontend:</strong> JavaScript, React, Tailwind CSS</li>
                                        <li><strong>Backend:</strong> Node.js, Express.js</li>
                                        <li><strong>Database:</strong> MongoDB</li>
                                        <li><strong>Tools:</strong> Git, GitHub, Vercel, Netlify, Surge, Firebase</li>
                                   </ul>
                              </motion.div>
                              {/* EDUCATION */}
                              <motion.div
                                   initial={{ opacity: 0, y: 35 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   transition={{ duration: 0.80 }}
                                   className="mt-5">
                                   <h2 className="text-xl italic text-white font-semibold mb-3">EDUCATION</h2>
                                   <p className="text-gray-400 font-semibold">
                                        Diploma Engineering in Mechanical Technology
                                   </p>
                                   <p className="text-gray-400 mt-1.5 text-sm">
                                        Chattogram Polytechnic Institute | 2022 - Present
                                   </p>
                              </motion.div>
                         </motion.section>
                    </div>
               </div>
          </div>
     );
};

export default About;