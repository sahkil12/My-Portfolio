import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";
import { motion } from 'framer-motion';

const Footer = () => {
     const socials = [
          { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/mustafa-tazwer/" },
          { icon: <FaGithub />, label: "GitHub", link: "https://github.com/sahkil12" },
          { icon: <FaFacebook />, label: "Facebook", link: "https://www.facebook.com/tazwer.shakil/" },
          { icon: <FaInstagram  />, label: "Instagram", link: "https://www.instagram.com/mustafatazwer/" },
          { icon: <FaTwitter />, label: "Twitter", link: "https://x.com/MustafaTaz11432" },
     ];

     const links = [
          { id: "home", name: "Home" },
          { id: "about", name: "About" },
          { id: "skills", name: "Skills" },
          { id: "projects", name: "Projects" },
          { id: "contact", name: "Contact" },
     ];
     return (
          <motion.footer
               initial={{ opacity: 0, y: 100 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.9, ease: "easeOut" }}
               viewport={{ once: true }}
               className="w-full bg-base-300/70 text-gray-200 py-14 px-5 mt-14"
          >
               <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
                    {/* Name */}
                    <motion.h2
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2, duration: 0.7 }}
                         whileHover={{ textShadow: "0px 0px 12px rgb(150,120,245)" }}
                         viewport={{ once: true }}
                         className="text-2xl w-fit font-semibold tracking-wide"
                    >
                         Mustafa Tazwer
                    </motion.h2>
                    {/* section link */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.3, duration: 0.7 }}
                         viewport={{ once: true }}
                         className="flex justify-center text-sm md:text-base items-center gap-6 md:gap-8 mb-4 flex-wrap"
                    >
                         {links.map(link => (
                              <a
                                   key={link.id}
                                   href={`#${link.id}`}
                                   className="font-medium hover:translate-y-[-2px] active:translate-y-[-2px] hover:text-gray-900 transition-all duration-300"
                              >
                                   {link.name}
                              </a>
                         ))}
                    </motion.div>
                    {/* Social Icons */}
                    <motion.div
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true }}
                         variants={{
                              hidden: { opacity: 0, y: 40 },
                              visible: {
                                   opacity: 1,
                                   y: 0,
                                   transition: {
                                        delay: 0.4,
                                        duration: 0.7,
                                        staggerChildren: 0.09,
                                   },
                              },
                         }}
                         className="flex items-center gap-6 text-xl"
                    >
                         {socials.map((s, index) => (
                              <motion.a
                                   key={index}
                                   variants={{ hidden: { opacity: 0, y: 20 }, 
                                   visible: { opacity: 1, y: 0 } }}
                                   whileHover={{ scale: 1.1, rotate: 4 }}
                                   href={s.link}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="relative group p-3 rounded-full bg-[#1a1a1a] hover:-translate-y-1.5 active:-translate-y-1.5 transition-all duration-300 hover:bg-gradient-to-r from-primary/90 to-base-200 active:bg-gradient-to-r from-primary/90 to-base-200"
                              >
                                   {s.icon}
                                   <span
                                        className="absolute bottom-14 left-1/2 -translate-x-1/2  bg-gradient-to-r from-primary/90 to-base-200 text-sm px-2 py-1 rounded opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 group-active:opacity-100 group-active:scale-100 transition-all duration-300"
                                   >
                                        {s.label}
                                   </span>
                              </motion.a>
                         ))}
                    </motion.div>
                    {/* Bottom text */}
                    <motion.p
                         initial={{ opacity: 0 }}
                         whileInView={{ opacity: 1 }}
                         transition={{ delay: 0.6, duration: 1 }}
                         viewport={{ once: true }}
                         className="text-sm md:text-base text-white mt-3 pt-8 border-t border-gray-400 w-full text-center"
                    >
                         © 2025 Mustafa Tazwer. All rights reserved.
                    </motion.p>
               </div>
          </motion.footer>
     );
};

export default Footer;
