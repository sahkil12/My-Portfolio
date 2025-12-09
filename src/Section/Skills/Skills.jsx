import { motion } from "framer-motion";
import { FaReact, FaNode, FaHtml5, FaGithub, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiRedux, SiAxios } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const skills = [
     { name: "HTML5", icon: <FaHtml5 size={30} color="#E44D26" />, level: 95, color: "#E44D26" },
     { name: "CSS3", icon: <FaCss3Alt size={30} color="#1572B6" />, level: 90, color: "#1572B6" },
     { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#38BDF8" />, level: 95, color: "#38BDF8" },
     { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" />, level: 90, color: "#F7DF1E" },
     { name: "React.js", icon: <FaReact size={30} color="#61DAFB" />, level: 85, color: "#61DAFB" },
     { name: "Node.js", icon: <FaNode size={30} color="#3C873A" />, level: 80, color: "#3C873A" },
     { name: "Express.js", icon: <SiExpress size={30} color="#aaaaaa" />, level: 75, color: "#aaaaaa" },
     { name: "MongoDB", icon: <SiMongodb size={30} color="#4DB33D" />, level: 80, color: "#4DB33D" },
     { name: "Axios / Fetch", icon: <SiAxios size={30} color="#5A29E4" />, level: 80, color: "#5A29E4" },
     { name: "Redux", icon: <SiRedux size={30} color="#764ABC" />, level: 70, color: "#764ABC" },
     { name: "Git & GitHub", icon: <FaGithub size={30} color="#F1502F" />, level: 85, color: "#F1502F" },
     { name: "VS Code", icon: <VscVscode size={30} color="#007ACC" />, level: 90, color: "#007ACC" }
];

const Skills = () => {
     return (
          <div className="py-6 md:py-14 px-5 md:px-16 xl:px-32 text-gray-300">
               {/* Title */}
               <div className="text-center mb-16">
                    <motion.h2
                         initial={{ opacity: 0, y: -20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         className="text-4xl md:text-5xl font-bold"
                    >
                         Skills & Tools
                    </motion.h2>
                    <motion.p
                         initial={{ opacity: 0, y: -10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="text-center mt-3.5 text-gray-400 text-base"
                    >
                         Passionate MERN Stack developer crafting interactive and efficient web apps
                    </motion.p>
                    <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: 140 }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="h-1.5 mx-auto mt-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    ></motion.div>
               </div>
               {/* Skills Grid */}
               <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 my-20">
                    {skills.map((skill, idx) => (
                         <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5 }}
                              whileHover={{ scale: 1.05 }}
                              className={`p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/15
                                         shadow-[0_0_15px_rgba(139,95,245,0.2)] hover:shadow-[0_0_25px_rgba(139,92,236,0.35)]
                                         transition-all duration-300 hover:border-white/40`}
                         >
                              {/* icons and text */}
                              <div className="flex items-center justify-between mb-5">
                                   <div className="flex items-center gap-3">
                                        <div className="p-3 rounded-lg bg-white/10 hover:shadow-[0_0_25px_rgba(139,92,226,0.25)] hover:rotate-12 transition-all duration-300">
                                             {skill.icon}
                                        </div>
                                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                                   </div>
                                   <p className="text-2xl font-bold" style={{ color: skill.color }}>
                                        {skill.level}%
                                   </p>
                              </div>
                              {/* progress bar  */}
                              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                                   <motion.div
                                        initial={{ width: 20 }}
                                        whileInView={{ width: `${skill.level}%` }}
                                        transition={{ duration: 1.3, ease: "easeOut" }}
                                        style={{
                                             background: skill.color,
                                             boxShadow: `0 0 10px ${skill.color}`,
                                        }}
                                        className="h-full rounded-full"
                                   ></motion.div>
                              </div>
                         </motion.div>
                    ))}
               </div>
          </div>
     );
};

export default Skills;
