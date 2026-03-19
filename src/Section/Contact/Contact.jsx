import { motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";
import { FiMessageSquare, FiSend, FiUser } from "react-icons/fi";

const Contact = () => {

     const formRef = useRef();

     const sendEmail = async (e) => {
          e.preventDefault();

          try {
               // send to my email
               await emailjs.sendForm(
                    "service_az99kyt",
                    "template_7xwcmef",
                    formRef.current,
                    "2INs45P1FpExUVDxp"
               );
               // send to user
               await emailjs.send(
                    "service_az99kyt",
                    "template_3ju77ka",
                    {
                         user_name: formRef.current.user_name.value,
                         user_email: formRef.current.user_email.value,
                         user_phone: formRef.current.user_phone.value,
                         message: formRef.current.message.value,
                         time: new Date().toLocaleString(),
                    },
                    "2INs45P1FpExUVDxp"
               );
               toast.success("Your message sent successfully!");
               formRef.current.reset();
          } catch (error) {
               if (error?.text?.includes("Invalid grant")) {
                    toast.error("Email service disconnected. Reconnect Gmail in EmailJS.");
               } else {
                    toast.error("Something went wrong. Try again!");
               }
          }
     };

     const inputClass = "w-full rounded-2xl border border-white/10 bg-white/5 pl-11 pr-4 py-3.5 text-sm text-white placeholder:text-slate-500 outline-none transition-all duration-300 focus:border-primary/50 focus:bg-white/10 focus:shadow-[0_0_0_4px_rgba(136,81,224,0.12)]"

     return (
          <div className="py-24 px-4 lg:px-24 text-gray-300 ">
               {/* Title */}
               <div className="text-center mb-16">
                    <motion.h2
                         initial={{ opacity: 0, y: -20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         className="text-4xl md:text-5xl font-bold"
                    >
                         Contact Me
                    </motion.h2>
                    <motion.p
                         initial={{ opacity: 0, y: -10 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7, delay: 0.3 }}
                         className="text-center mt-3.5 text-gray-400 text-base"
                    >
                         Let’s talk about your project or collaboration.
                    </motion.p>
                    <motion.div
                         initial={{ width: 0 }}
                         whileInView={{ width: 140 }}
                         transition={{ duration: 0.6, delay: 0.2 }}
                         className="h-1.5 mx-auto mt-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                    ></motion.div>
               </div>
               {/* Main Two Column Layout */}
               <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
                    {/* Left Side */}
                    <div>
                         <motion.h3
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6 }}
                              className="text-4xl/snug md:text-6xl/snug font-semibold max-w-xl"
                         >
                              Let’s <span className="text-secondary">Connect</span> and Build Something Amazing
                         </motion.h3>
                         <motion.p
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="text-gray-400 mt-3 mb-6 max-w-xl leading-relaxed"
                         >
                              I’d love to connect. Whether you want to discuss a project or just say hello  feel free to reach out.
                         </motion.p>
                         {/* Contact Details */}
                         <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.6, delay: 0.2 }}
                              className="space-y-8">
                              {/* address */}
                              <motion.div
                                   transition={{ duration: 0.5, delay: 0.3 }}
                                   whileHover={{ x: 10 }}
                                   className="flex items-start gap-4 w-fit"
                              >
                                   <span className="p-3.5 rounded-full bg-primary/20 hover:scale-110 transition-all duration-30"><FaLocationDot size={22} className="text-primary" /></span>
                                   <span className="flex flex-col">
                                        <p className="text-gray-200 text-base md:text-lg font-semibold">Address</p>
                                        <p className="mt-1 text-gray-500 text-sm md:text-base font-medium">Patiya, Chittagong, Bangladesh</p>
                                   </span>
                              </motion.div>
                              {/* phone number */}
                              <motion.div
                                   transition={{ duration: 0.5, delay: 0.3 }}
                                   whileHover={{ x: 10 }}
                                   className="flex items-start gap-4 w-fit"
                              >
                                   <span className="p-3.5 rounded-full bg-primary/20 hover:scale-110 transition-all duration-30"><FaPhoneFlip size={22} className="text-primary" /></span>
                                   <span className="flex flex-col">
                                        <p className="text-gray-200 text-base md:text-lg font-semibold">Phone Number</p>
                                        <p className="mt-1 text-gray-500 text-sm md:text-base font-medium">+880 1310-079634</p>
                                   </span>
                              </motion.div>
                              {/* email */}
                              <motion.div
                                   transition={{ duration: 0.5, delay: 0.4 }}
                                   whileHover={{ x: 10 }}
                                   className="flex items-start gap-4 w-fit"
                              >
                                   <span className="p-3.5 rounded-full bg-primary/20 hover:scale-110 transition-all duration-300"><MdEmail size={24} className="text-primary" /></span>
                                   <span className="flex flex-col">
                                        <p className="text-gray-200 text-base md:text-lg font-semibold">Email</p>
                                        <p className="mt-1 text-gray-500 text-sm md:text-base font-medium">tazwershakilshakil@gmail.com</p>
                                   </span>
                              </motion.div>
                              {/* resume button */}
                              <motion.a
                                   whileHover={{
                                        y: -6,
                                        scale: 1.01,
                                        boxShadow: "0 10px 40px rgba(84, 90, 155, 0.35)",
                                        backgroundColor: "rgb(129,150,248)"
                                   }}
                                   transition={{ duration: .1 }}
                                   href="/Mustafa-Tazwer-Shakil-frontend.pdf"
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="flex w-fit items-center gap-1 px-10 py-3 mt-9 border-primary/30 shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300 font-semibold border rounded-full bg-gradient-to-r from-purple-600 to-base-200/90 border-none">
                                   My Resume <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                                   ><FaArrowRight />
                                   </motion.span>
                              </motion.a>
                         </motion.div>
                    </div>
                    {/* Right Side Form */}
                    <motion.div
                         initial={{ opacity: 0, x: 40 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.7 }}
                         className="relative"
                    >
                         <div className="rounded-[30px] border border-white/10 bg-white/5 p-[1px] shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
                              <div className="rounded-[30px] bg-[#0d1322]/60 p-5 md:p-8 xl:p-10">
                                   <div className="mb-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-white">
                                             Send a Message
                                        </h3>
                                        <p className="mt-3 text-sm leading-6 text-slate-400">
                                             Fill out the form below and I’ll get back to you soon.
                                        </p>
                                   </div>

                                   <motion.form
                                        ref={formRef}
                                        onSubmit={sendEmail}
                                        className="space-y-5"
                                   >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                             <div>
                                                  <label className="mb-2 block text-sm font-medium text-slate-200">
                                                       Your Name
                                                  </label>
                                                  <div className="relative">
                                                       <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
                                                       <input
                                                            type="text"
                                                            placeholder="Your name"
                                                            name="user_name"
                                                            required
                                                            className={inputClass}
                                                       />
                                                  </div>
                                             </div>
                                             {/* phone number  */}
                                             <div>
                                                  <label className="mb-2 block text-sm font-medium text-slate-200">
                                                       Your Email
                                                  </label>
                                                  <div className="relative">
                                                       <MdEmail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-[18px]" />
                                                       <input
                                                            type="email"
                                                            name="user_email"
                                                            required
                                                            placeholder="Your email"
                                                            className={inputClass}
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        {/* phone number */}
                                        <div>
                                             <label className="mb-2 block text-sm font-medium text-slate-200">
                                                  Phone Number
                                             </label>
                                             <div className="relative">
                                                  <FaPhoneFlip className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-[16px]" />
                                                  <input
                                                       type="tel"
                                                       required
                                                       name="user_phone"
                                                       placeholder="Your phone number"
                                                       className={inputClass}
                                                  />
                                             </div>
                                        </div>

                                        <div>
                                             <label className="mb-2 block text-sm font-medium text-slate-200">
                                                  Message
                                             </label>
                                             <div className="relative">
                                                  <FiMessageSquare className="absolute left-4 top-4 text-slate-500" />
                                                  <textarea
                                                       rows="6"
                                                       name="message"
                                                       required
                                                       placeholder="Write your message..."
                                                       className={inputClass}
                                                  ></textarea>
                                             </div>
                                        </div>

                                        <input
                                             type="hidden"
                                             name="time"
                                             value={new Date().toLocaleString()}
                                        />

                                        <motion.button
                                             type="submit"
                                             whileHover={{ y: -2, scale: 1.01 }}
                                             whileTap={{ scale: 0.98 }}
                                             transition={{ duration: 0.2 }}
                                             className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600/95 to-base-200 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-purple-900/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20"
                                        >
                                             Send Message
                                             <FiSend className="transition-transform duration-300 group-hover:translate-x-1" />
                                        </motion.button>
                                   </motion.form>
                              </div>
                         </div>
                    </motion.div>
               </div>
          </div>
     );
};

export default Contact;