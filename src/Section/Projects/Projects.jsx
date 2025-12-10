import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";

const projects = [
     {
          title: "ProShift",
          category: "Full Stack",
          description: "A parcel delivery platform with tracking, online payments, rider tools, and admin management for users and parcels.",
          tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS", "Express", "DaisyUI", "Axios", "Stripe", "TanStack Query"],
          image: "/proshift.png",
          demo: "https://proshift-mover.web.app/",
          code: "https://github.com/sahkil12/ProShift-client"
     },
     {
          title: "TaskHive",
          category: "Full Stack",
          description: "A platform connecting people needing help with small online tasks to those who can complete them, like a mini freelance marketplace.",
          tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express", "Axios", "DaisyUI", "Firebase"],
          image: "/taskhive.png",
          demo: "https://taskhive-project-client.web.app/",
          code: "https://github.com/sahkil12/TaskHive-Project-client"
     },
     {
          title: "Coffee Store",
          category: "Full Stack",
          description: "An online coffee store with product browsing, cart management, and secure checkout.",
          tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Axios", "DaisyUI"],
          image: "/coffee-shop.png",
          demo: "https://coffee-store-client-8e10f.web.app/",
          code: "https://github.com/sahkil12/Coffee-store-with-auth-client"
     },
     {
          title: "CareerLink",
          category: "Full Stack",
          description: "A freelancing marketplace where freelancers can find jobs, clients can post projects, and manage bids with real-time updates.",
          tech: ["React", "Firebase", "MongoDB", "React Router", "Tailwind CSS", "DaisyUI", "Axios", "TanStack Query"],
          image: "/careerlink.png",
          demo: "https://careerlink-project.web.app/",
          code: "https://github.com/sahkil12/CareerLink-project-client"
     }
];

const Projects = () => {
     return (
          <div className="py-6 md:py-14 px-3 lg:px-16 2xl:px-40 text-gray-300">
               {/* Title */}
               <div className="text-center mb-16">
                    <motion.h2
                         initial={{ opacity: 0, y: -20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         className="text-4xl md:text-5xl font-bold"
                    >
                         My Projects
                    </motion.h2>
                    <motion.p
                         initial={{ opacity: 0, y: -10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7, delay: 0.3 }}
                         className="text-center mt-3.5 text-gray-400 text-base"
                    >
                         Some of the work I’ve built with care and clean code
                    </motion.p>
                    <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: 140 }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="h-1.5 mx-auto mt-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    ></motion.div>
               </div>
               {/* Projects Grid */}
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
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
          </div>
     );
};

export default Projects;
