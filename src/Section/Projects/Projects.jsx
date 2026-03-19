import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { PiGithubLogoBold } from "react-icons/pi";

const projects = [
     {
          title: "B4 Style",
          category: "Full Stack Project",
          description: "A full-stack fashion e-commerce web app featuring product discovery, wishlist, cart, payment integration, and admin management in a modern responsive UI.",
          tech: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Tailwind CSS", "Framer Motion", "Stripe", "JWT"],
          image: "/B4 Style.webp",
          demo: "https://b4-style.vercel.app/",
          code: "https://github.com/sahkil12/B4-Style-Client"
     },
     {
          title: "ProShift",
          category: "Full Stack Project ",
          description: "A parcel delivery platform with tracking, online payments, rider tools, and admin management for users and parcels.",
          tech: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind CSS", "Express", "Stripe", "TanStack Query", "JWT"],
          image: "/proshift.webp",
          demo: "https://proshift-mover.web.app/",
          code: "https://github.com/sahkil12/ProShift-client"
     },
     {
          title: "CTG Blood Connect",
          category: "Full Stack Project",
          description: "CTG Blood Connect is a web-based blood donor platform designed to help people in Chittagong quickly find blood donors based on blood group and area.",
          tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "TanStack Query", "Firebase", "JWT"],
          image: "/ctg-blood-connect.webp",
          demo: "https://ctg-blood-connect.web.app/",
          code: "https://github.com/sahkil12/CTG-Blood-Connect-client"
     },
     {
          title: "CareerLink",
          category: "Full Stack Project",
          description: "A freelancing marketplace where freelancers can find jobs, clients can post projects, and manage bids with real-time updates.",
          tech: ["React", "Firebase", "MongoDB", "Node.js", "Express", "Tailwind CSS", "TanStack Query", "JWT"],
          image: "/careerlink.webp",
          demo: "https://careerlink-project.web.app/",
          code: "https://github.com/sahkil12/CareerLink-project-client"
     },
     // {
     //      title: "TaskHive",
     //      category: "Full Stack Project",
     //      description: "A platform connecting people needing help with small online tasks to those who can complete them, like a mini freelance marketplace.",
     //      tech: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Express", "Firebase"],
     //      image: "/taskhive.png",
     //      demo: "https://taskhive-project-client.web.app/",
     //      code: "https://github.com/sahkil12/TaskHive-Project-client"
     // },

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
               <div className="space-y-24 lg:space-y-28">
                    {projects?.map((project, idx) => (
                         <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6 }}
                              className={`flex flex-col lg:flex-row items-center gap-8 md:gap-12 ${idx % 2 !== 0 ? "lg:flex-row-reverse" : ""
                                   }`}>
                              {/* Image */}
                              <div className="w-full lg:w-[55%] 2xl:w-[60%] relative group">

                                   <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-[0_0_40px_rgba(129,92,246,0.10)] hover:shadow-[0_0_40px_rgba(139,92,246,0.25)] transition">
                                        {/* MacOS Frame */}
                                        <div className="flex items-center gap-2.5 px-4 py-3.5 bg-[#1c1c1e]">
                                             <span className="w-3 h-3 rounded-full bg-red-500"></span>
                                             <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
                                             <span className="w-3 h-3 rounded-full bg-green-500"></span>

                                             <div className="pl-5 flex-1">
                                                  <div className="w-44 h-3.5 rounded-full bg-black/35 border border-white/10"></div>
                                             </div>
                                        </div>
                                        {/* IMAGE WRAPPER */}
                                        <div className="relative overflow-hidden">
                                             <img
                                                  src={project.image}
                                                  alt={project.title}
                                                  className="w-full h-[200px] sm:h-[300px] xl:h-[380px] object-cover transition duration-500 group-hover:scale-105 group-hover:brightness-80"
                                             />
                                             {/* Blur Overlay */}
                                             <div className="absolute inset-0 bg-black/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-6">
                                                  <motion.a
                                                       whileHover={{ scale: 1.05 }}
                                                       href={project.code}
                                                       target="_blank"
                                                       className="w-14 h-14 rounded-full bg-black/45 hover:bg-black/50 flex items-center justify-center text-white transition"
                                                  >
                                                       <PiGithubLogoBold size={23} />
                                                  </motion.a>

                                                  <motion.a
                                                       whileHover={{ scale: 1.05 }}
                                                       href={project.demo}
                                                       target="_blank"
                                                       className="w-14 h-14 rounded-full bg-black/45 hover:bg-black/50 flex items-center justify-center text-white transition"
                                                  >
                                                       <FaExternalLinkAlt size={21} />
                                                  </motion.a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* Content */}
                              <div className="lg:w-[45%] ">
                                   <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                        {project.title}
                                   </h3>
                                   <p className="text-purple-400 font-semibold text-sm mb-4">
                                        {project.category}
                                   </p>
                                   <p className="text-gray-400 text-sm sm:text-base mb-5 md:mb-7">
                                        {project.description}
                                   </p>
                                   {/* Tech */}
                                   <div className="flex flex-wrap gap-3 mb-7 md:mb-10">
                                        {project.tech.map((tech, i) => (
                                             <span
                                                  key={i}
                                                  className="text-xs md:text-sm font-medium px-5 py-1.5 md:px-6 md:py-2 border bg-white/5 text-white border-white/5 rounded-full" >
                                                  {tech}
                                             </span>
                                        ))}
                                   </div>
                                   {/* Buttons */}
                                   <div className="flex gap-4">
                                        <motion.a
                                             whileHover={{
                                                  scale: 1.01,
                                                  boxShadow: "0 6px 20px rgba(165, 139, 250, 0.11)",
                                             }}
                                             whileTap={{ scale: 0.95 }}
                                             transition={{ type: 'spring', stiffness: 350, damping: 35, duration: 1.4 }}
                                             href={project.code}
                                             target="_blank"
                                             className="flex items-center gap-2 border px-5 md:px-7 rounded-lg border-primary/40 bg-black/90 py-2.5 md:py-3 text-sm md:text-[15px] font-semibold "
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
                                             className="flex items-center gap-2.5 px-5 py-2.5 md:px-7 md:py-3 rounded-lg bg-gradient-to-r from-purple-600/90 to-indigo-500 text-sm md:text-[15px] font-semibold text-white"
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
