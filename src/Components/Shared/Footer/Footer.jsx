import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
     const socials = [
          { icon: <FaLinkedin />, label: "LinkedIn", link: "https://www.linkedin.com/in/md-mustafa32/" },
          { icon: <FaGithub />, label: "GitHub", link: "https://github.com/sahkil12" },
          { icon: <FaFacebook />, label: "Facebook", link: "https://www.facebook.com/tazwer.shakil/" },
          { icon: <FaTwitter />, label: "Twitter", link: "https://x.com/MustafaTaz11432" },
     ];

     return (
          <footer className="w-full bg-base-300 text-gray-200 py-16 px-5">
               <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
                    {/* Name */}
                    <h2 className="text-2xl font-semibold tracking-wide">
                         Mustafa Tazwer 
                    </h2>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 text-xl">
                         {socials.map((s, index) => (
                              <a
                                   key={index}
                                   href={s.link}
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="relative group p-3 rounded-full bg-[#1a1a1a] hover:-translate-y-2 transition-all duration-300"
                              >
                                   {s.icon}

                                   {/* Tooltip */}
                                   <span className="absolute bottom-12 left-1/2 -translate-x-1/2 
                               bg-black text-sm px-2 py-1 rounded 
                               opacity-0 scale-0 group-hover:opacity-100 
                               group-hover:scale-100 transition-all duration-300">
                                        {s.label}
                                   </span>
                              </a>
                         ))}
                    </div>

                    {/* Bottom text */}
                    <p className="text-base text-white mt-4">
                         © 2025 MT Shakil. All rights reserved.
                    </p>
               </div>
          </footer>
     );
};

export default Footer;
