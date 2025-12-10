import { motion } from 'framer-motion';
import { useRef } from 'react';
import emailjs from "emailjs-com";
import toast from 'react-hot-toast';

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
                                   if(err){
                                        toast.error("Something went wrong.")
                                   }
                              });
                         // form reset 
                         formRef.current.reset();
                    },
                    (error) => {
                         if(error){
                              toast.error("Something went wrong. Try again!");
                         }
                    }
               );
     };
     return (
          <div className="min-h-screen flex flex-col items-center bg-accent text-white justify-center">

               <div className={`w-full transition-all duration-400 `}>
                    {/* navbar */}
                    <div className={`w-full mx-auto py-5 px-4 xl:px-16 flex justify-start mb-6`}>
                         <h1 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary/85 to-base-200 ">
                              <a href='https://mustafa-tazwer.vercel.app/'> Mustafa Tazwer.</a>
                         </h1>
                    </div>
               </div>

               <div className="max-w-5xl w-full p-2 rounded-xl shadow-lg">
                    <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center">Hire Me</h1>
                    <p className="text-center font-medium text-gray-300 mb-8">
                         Fill the form below to reach me directly.
                    </p>
                    {/* Contact Form */}
                    <motion.form
                         ref={formRef}
                         onSubmit={sendEmail}
                         initial={{ opacity: 0, y: 40 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ duration: 0.7 }}
                         className="bg-gray-900 border-2 border-gray-700 p-4 md:p-10 rounded-2xl shadow-2xl/10 shadow-white/50 space-y-6"
                    >
                         {/* name */}
                         <div>
                              <label className="text-sm font-semibold">Your Name</label>
                              <input
                                   type="text"
                                   placeholder="Your Name"
                                   name="user_name"
                                   required
                                   className="w-full mt-2 p-3 bg-transparent border border-white/30 rounded-lg focus:border-primary/50 outline-none"
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
                                   className="w-full mt-2 p-3 bg-transparent border border-white/30 rounded-lg focus:border-primary/50 outline-none"
                              />
                         </div>
                         {/* phone */}
                         <div>
                              <label className="text-sm font-semibold">Phone Number</label>
                              <input
                                   type="text"
                                   name="user_phone"
                                   required
                                   placeholder="Your Phone Number"
                                   className="w-full mt-2 p-3 bg-transparent border border-white/30 rounded-lg focus:border-primary/50 outline-none"
                              />
                         </div>
                         {/* message */}
                         <div>
                              <label className="text-sm font-semibold">Message</label>
                              <textarea
                                   rows="5"
                                   name="message"
                                   required
                                   placeholder="Write Your Message..."
                                   className="w-full mt-2 p-3 bg-transparent border border-white/30 rounded-lg focus:border-primary/50 outline-none"
                              ></textarea>
                         </div>
                         {/* hidden field */}
                         <input type="hidden" name="time" value={new Date().toLocaleString()} />
                         {/* button */}
                         <motion.button
                              type="submit"
                              whileHover={{
                                   y: -1,
                                   scale: 1.03,
                                   boxShadow: "0 10px 20px rgba(84, 90, 155, 0.35)",
                                   backgroundColor: "rgb(129,150,248)"
                              }}
                              transition={{ duration: 0.2 }}
                              className="px-10 py-3 mt-5 shadow-lg shadow-primary/20 hover:shadow-xl mx-auto transition-all duration-300 font-semibold rounded-full bg-gradient-to-r from-purple-600/80 to-base-200/80 border-none"
                         >
                              Send Message
                         </motion.button>
                    </motion.form>
               </div>
          </div>
     );
};

export default HireMe;
