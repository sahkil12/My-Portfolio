import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
import { FiArrowUpRight, FiMail, FiPhoneCall, FiUser } from 'react-icons/fi';

const HireMe = () => {
     const formRef = useRef();
     const sendEmail = (e) => {
          e.preventDefault();
          // hire message mail
          emailjs
               .sendForm(
                    "service_az99kyt",
                    "template_7xwcmef",
                    formRef.current,
                    "2INs45P1FpExUVDxp"
               )
               .then(
                    () => {
                         // -------thank you message for user mail
                         emailjs.send('service_k5w6dvh', 'template_ttgl8lt', {
                              user_name: formRef.current.user_name.value,
                              user_email: formRef.current.user_email.value,
                         },
                              'byV8Y8jf7zFVxOFqQ')
                              .then(() => {
                                   toast.success('Your Message sent successfully!')
                              })
                              .catch((err) => {
                                   if (err) {
                                        toast.error("Something went wrong.")
                                   }
                              });
                         // form reset 
                         formRef.current.reset();
                    },
                    (error) => {
                         if (error) {
                              toast.error("Something went wrong. Try again!");
                         }
                    }
               );
     };
     return (
          <div className="min-h-screen flex flex-col items-center bg-accent text-white justify-center    ">
               {/* navbar */}
              <div className='w-full '>
                    <div className={`w-full mb-10 md:mb-5 md:w-[84%] mx-auto py-6 px-5 xl:px-16 flex justify-between items-center`}>
                         <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-600/95 to-base-200 ">
                              Mustafa Tazwer.
                         </h1>
                         <NavLink to={'/'} className='px-6 md:px-7 py-2 md:py-2.5 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-primary to-base-200 transition-all duration-300 hover:-translate-y-1'>Home</NavLink>
                    </div>
               </div>
               {/* main content */}
               <div className="mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 pb-12 pt-4 md:px-8 lg:grid-cols-2 lg:gap-14 xl:px-10">
                    {/* left content */}
                    <motion.div
                         initial={{ opacity: 0, x: -40 }}
                         animate={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.7 }}
                         className="max-w-xl"
                    >
                         <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-white/5 px-4 py-2 text-sm text-purple-200 backdrop-blur-md">
                              <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                              Available for opportunities
                         </div>

                         <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                              Let’s build
                              <span className="block bg-gradient-to-r from-purple-500 to-base-200 bg-clip-text text-transparent">
                                   something awesome
                              </span>
                         </h1>

                         <p className="mt-5 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
                              Got a project idea, freelance work, internship opportunity, or job offer?
                              Send me a message here. I’ll check it and get back to you as soon as possible.
                         </p>

                         <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                   <FiUser className="mb-3 text-xl text-purple-300" />
                                   <h3 className="text-sm font-semibold">Professional</h3>
                                   <p className="mt-1 text-xs leading-6 text-slate-400">
                                        Clean communication and smooth collaboration.
                                   </p>
                              </div>

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                   <FiMail className="mb-3 text-xl text-cyan-300" />
                                   <h3 className="text-sm font-semibold">Fast Reply</h3>
                                   <p className="mt-1 text-xs leading-6 text-slate-400">
                                        Reach me directly through this simple contact form.
                                   </p>
                              </div>

                              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                                   <FiPhoneCall className="mb-3 text-xl text-pink-300" />
                                   <h3 className="text-sm font-semibold">Open to Work</h3>
                                   <p className="mt-1 text-xs leading-6 text-slate-400">
                                        Freelance, internship, and full-time roles.
                                   </p>
                              </div>
                         </div>
                    </motion.div>
                    {/* form card */}
                    <motion.div
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         className="relative"
                    >
                         <div className="rounded-[30px] border border-white/10 bg-white/5 shadow-2xl">
                              <div className="rounded-[24px] border border-white/10 bg-[#11182d]/90 p-4 md:p-8">
                                   <div className="mb-6">
                                        <h2 className="text-2xl font-bold md:text-3xl">Hire Me</h2>
                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                             Fill out the form and share your project, role, or idea.
                                        </p>
                                   </div>

                                   <motion.form
                                        ref={formRef}
                                        onSubmit={sendEmail}
                                        className="space-y-5"
                                   >
                                        {/* name */}
                                        <div>
                                             <label className="mb-2 block text-sm font-medium text-slate-200">
                                                  Your Name
                                             </label>
                                             <input
                                                  type="text"
                                                  placeholder="Enter your name"
                                                  name="user_name"
                                                  required
                                                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-purple-400/50 focus:bg-white/10"
                                             />
                                        </div>

                                        {/* email */}
                                        <div>
                                             <label className="mb-2 block text-sm font-medium text-slate-200">
                                                  Your Email
                                             </label>
                                             <input
                                                  type="email"
                                                  name="user_email"
                                                  required
                                                  placeholder="Enter your email"
                                                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-cyan-400/50 focus:bg-white/10"
                                             />
                                        </div>
                                        {/* phone */}
                                        <div>
                                             <label className="mb-2 block text-sm font-medium text-slate-200">
                                                  Phone Number
                                             </label>
                                             <input
                                                  type="text"
                                                  name="user_phone"
                                                  required
                                                  placeholder="Enter your number"
                                                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-pink-400/50 focus:bg-white/10"
                                             />
                                        </div>
                                        {/* message */}
                                        <div>
                                             <label className="mb-2 block text-sm font-medium text-slate-200">
                                                  Message
                                             </label>
                                             <textarea
                                                  rows="5"
                                                  name="message"
                                                  required
                                                  placeholder="Tell me about your project or opportunity..."
                                                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition duration-300 focus:border-purple-400/50 focus:bg-white/10"
                                             ></textarea>
                                        </div>

                                        <input type="hidden" name="time" value={new Date().toLocaleString()} />
                                        {/* button */}
                                        <motion.button
                                             type="submit"
                                             whileHover={{ y: -2, scale: 1.01 }}
                                             whileTap={{ scale: 0.98 }}
                                             transition={{ duration: 0.2 }}
                                             className="group cursor-pointer flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600/90 to-base-200 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-lg hover:shadow-base-200/5"
                                        >
                                             Send Message
                                             <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </motion.button>
                                   </motion.form>
                              </div>
                         </div>
                    </motion.div>
               </div>
          </div>
     );
};

export default HireMe;
