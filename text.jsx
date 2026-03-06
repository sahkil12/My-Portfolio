//   <div className="space-y-24">
//                     {projects.map((project, idx) => (
//                          <motion.div
//                               key={idx}
//                               initial={{ opacity: 0, y: 40 }}
//                               whileInView={{ opacity: 1, y: 0 }}
//                               transition={{ duration: 0.6 }}
//                               className={`flex flex-col lg:flex-row items-center gap-10 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
//                                    }`}>
//                               {/* Image */}
//                               <div className="lg:w-1/2 relative group">
//                                    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-purple-500/20 transition">
//                                         <img
//                                              src={project.image}
//                                              alt={project.title}
//                                              className="w-full h-full object-cover group-hover:scale-105 duration-500"
//                                         />
//                                    </div>
//                               </div>

//                               {/* Content */}
//                               <div className="lg:w-1/2">
//                                    <h3 className="text-3xl font-bold text-white mb-4">
//                                         {project.title}
//                                    </h3>

//                                    <p className="text-gray-400 mb-6">
//                                         {project.description}
//                                    </p>

//                                    {/* Tech */}
//                                    <div className="flex flex-wrap gap-2 mb-6">
//                                         {project.tech.map((tech, i) => (
//                                              <span
//                                                   key={i}
//                                                   className="text-xs px-4 py-1 rounded-full bg-white/5 border border-white/10"
//                                              >
//                                                   {tech}
//                                              </span>
//                                         ))}
//                                    </div>

//                                    {/* Buttons */}
//                                    <div className="flex gap-4">
//                                         <a
//                                              href={project.code}
//                                              target="_blank"
//                                              className="flex items-center gap-2 px-5 py-2 border rounded-lg border-white/20 hover:bg-white/10"
//                                         >
//                                              <PiGithubLogoBold size={18} /> Code
//                                         </a>

//                                         <a
//                                              href={project.demo}
//                                              target="_blank"
//                                              className="flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-700"
//                                         >
//                                              <FaExternalLinkAlt size={15} /> Live Demo
//                                         </a>
//                                    </div>
//                               </div>
//                          </motion.div>
//                     ))}
//                </div>


 <div className="space-y-24">
                    {projects.map((project, idx) => (
                         <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              whileHover={{ y: -15 }}
                              className="group rounded-2xl overflow-hidden bg-base-100 backdrop-blur-sm border border-white/10  hover:border-secondary/40 shadow-lg hover:shadow-[0_0_25px_rgba(255,255,255,0.1)] duration-200 "
                         >
                              <div className="relative w-full h-52">
                                   <img
                                        loading="lazy"
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-95 group-hover:scale-110 duration-400"
                                   />
                                   <div className="absolute inset-0 bg-gradient-to-t group-hover:scale-110 duration-400 from-black/25 to-black/10"></div>
                                   {/* Title overlay on image */}
                                   <motion.div
                                        initial={{ opacity: 0, y: 25 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        className="absolute bottom-3 left-3 px-4 py-1.5 rounded-lg bg-black/50 backdrop-blur-lg text-white group-hover:-translate-y-1.5 transition-all duration-300 text-base font-semibold border border-white/10"
                                   >
                                        {project.title}
                                   </motion.div>
                              </div>
                              {/*  */}
                              <div className="p-6">
                                   <div className="text-base font-semibold text-purple-500 mb-2">
                                        {project.category}
                                   </div>
                                   <p className="text-gray-400 text-sm mb-6 mt-3">{project.description}</p>
                                   <div className="flex flex-wrap gap-2 mb-3">
                                        {project.tech.map((tech, i) => (
                                             <span key={i} className="text-xs font-medium px-5 py-1.5 border bg-secondary/5 text-primary border-purple-600/20 rounded-full">
                                                  {tech}
                                             </span>
                                        ))}
                                   </div>
                                   <div className="flex gap-4 mt-7 flex-wrap">
                                        <motion.a
                                             whileHover={{
                                                  scale: 1.01,
                                                  boxShadow: "0 6px 20px rgba(165, 139, 250, 0.11)",

                                             }}
                                             whileTap={{ scale: 0.95 }}
                                             transition={{ type: 'spring', stiffness: 350, damping: 35, duration: 1.4 }}
                                             href={project.code}
                                             target="_blank"
                                             className="flex items-center gap-2 border px-5 rounded-lg border-primary/40 bg-black/90 py-2.5 text-sm font-medium "
                                        >
                                             <PiGithubLogoBold size={18} />  Code
                                        </motion.a>
                                        <motion.a
                                             whileHover={{
                                                  scale: 1.01,
                                                  boxShadow: "0 6px 20px rgba(84, 90, 155, 0.25)",
                                                  backgroundColor: "rgb(129,140,248)"
                                             }}
                                             whileTap={{ scale: 0.95 }}
                                             transition={{ type: 'spring', stiffness: 350, damping: 20, duration: 1.4 }}
                                             href={project.demo}
                                             target="_blank"
                                             className="flex items-center gap-2.5 px-5 rounded-lg bg-gradient-to-r from-purple-600/90 to-indigo-500 py-2.5 text-sm font-medium text-white"
                                        >
                                             <FaExternalLinkAlt size={15} /> Live Demo
                                        </motion.a>
                                   </div>
                              </div>
                         </motion.div>
                    ))}
               </div>






   <div className="w-full lg:w-[60%] 2xl:w-[65%] relative group">
                                   <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl     shadow-[0_0_40px_rgba(129,92,246,0.10)] hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] transition">
                                        {/* macOs frame */}
                                        <div className="flex items-center gap-2.5 px-4 py-4 bg-[#1c1c1e]">
                                             <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                             <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                             <span className="w-3 h-3 rounded-full bg-green-500"></span>

                                             <div className="pl-5 flex-1 flex justify-start">
                                                  <div className="w-40 h-3 rounded-full bg-white/10"></div>
                                             </div>
                                        </div>
                                        {/* image */}
                                        <img
                                             src={project.image}
                                             alt={project.title}
                                             className="w-full h-[250px] sm:h-[300px] xl:h-[380px] object-cover transition duration-500 group-hover:scale-105"
                                        />
                                        {/* Blur Overlay */}
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 group-active:opacity-100 transition flex items-center justify-center gap-6">
                                             <motion.a
                                                  whileHover={{ scale: 1.05 }}
                                                  href={project.code}
                                                  target="_blank"
                                                  className="w-14 h-14 rounded-full bg-white/5 backdrop-blur flex items-center justify-center text-white"
                                             >
                                                  <PiGithubLogoBold size={22} className="" />
                                             </motion.a>

                                             <motion.a
                                                  whileHover={{ scale: 1.05 }}
                                                  href={project.demo}
                                                  target="_blank"
                                                  className="w-14 h-14 rounded-full bg-white/5 backdrop-blur flex items-center justify-center text-white"
                                             >
                                                  <FaExternalLinkAlt size={20} />
                                             </motion.a>
                                        </div>
                                   </div>
                              </div>