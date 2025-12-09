import { motion } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {

     const formRef = useRef();
     const sendEmail = (e) => {
          e.preventDefault();

          emailjs
               .sendForm(
                    "service_az99kyt",
                    "template_3ju77ka",
                    formRef.current,
                    "2INs45P1FpExUVDxp"
               )
               .then(
                    () => {
                         toast.success("Message sent successfully!");
                         formRef.current.reset();
                    },
                    (error) => {
                         toast.error("Failed to send message!");
                    }
               );
     };

     return (
          <div className="py-24 px-5 lg:px-24 text-gray-300 ">
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
                              Whether you have a question, want to start a project or just want to say hi, I’ll respond as soon as possible.
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
                              <motion.button
                                   whileHover={{
                                        y: -6,
                                        scale: 1.01,
                                        boxShadow: "0 10px 40px rgba(84, 90, 155, 0.35)",
                                        backgroundColor: "rgb(129,150,248)"
                                   }}
                                   transition={{ duration: .1 }}
                                   className="flex items-center gap-1 px-10 py-3 mt-9 border-primary/30 shadow-lg shadow-primary/30 hover:shadow-xl transition-all duration-300 font-semibold border rounded-full bg-gradient-to-r from-purple-600 to-base-200/90 border-none">
                                   My Resume <motion.span
                                        animate={{ x: [0, 4, 0] }}
                                        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                                   ><FaArrowRight />
                                   </motion.span>
                              </motion.button>
                         </motion.div>
                    </div>
                    {/* Right Side (Form) */}
                    <motion.form
                         ref={formRef}
                         onSubmit={sendEmail}
                         initial={{ opacity: 0, x: 40 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         transition={{ duration: 0.7 }}
                         className="bg-base-100 p-6 md:p-8 rounded-2xl shadow-xl/40 shadow-primary/10 space-y-6"
                    >
                         <div>
                              {/* name */}
                              <label className="text-sm font-semibold">Your Name</label>
                              <input
                                   type="text"
                                   placeholder="Your Name"
                                   name="user_name"
                                   required
                                   className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg focus:border-primary/30 outline-none"
                              />
                         </div>
                         {/* email */}
                         <div>
                              <label className="text-sm font-semibold">Your Email</label>
                              <input
                                   type="email"
                                   name="user_email"
                                   required
                                   placeholder="Your Email"
                                   className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg focus:border-primary/30 outline-none"
                              />
                         </div>
                         {/* number */}
                         <div>
                              <label className="text-sm font-semibold">Phone Number</label>
                              <input
                                   type="number"
                                   required
                                   name="user_phone"
                                   placeholder="Your Phone number"
                                   className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg focus:border-primary/30 outline-none"
                              />
                         </div>
                         {/* message */}
                         <div>
                              <label className="text-sm font-semibold">Message</label>
                              <textarea
                                   rows="5"
                                   name="message"
                                   placeholder="Write Your Message.."
                                   className="w-full mt-2 p-3 bg-transparent border border-white/20 rounded-lg focus:border-primary/30 outline-none"
                              ></textarea>
                         </div>
                         {/* Existing fields */}
                         <input
                              type="hidden"
                              name="time"
                              value={new Date().toLocaleString()}
                         />
                         {/* send button */}
                         <motion.button
                              type="submit"
                              whileHover={{
                                   y: -1,
                                   scale: 1.03,
                                   boxShadow: "0 10px 20px rgba(84, 90, 155, 0.35)",
                                   backgroundColor: "rgb(129,150,248)"
                              }}
                              transition={{ duration: .2 }}
                              className="px-10 py-3 mt-5 shadow-lg shadow-primary/20 hover:shadow-xl mx-auto transition-all duration-300 font-semibold rounded-full bg-gradient-to-r from-purple-600 to-base-200/90 border-none">
                              Send Message
                         </motion.button>
                    </motion.form>
               </div>
          </div>
     );
};

export default Contact;