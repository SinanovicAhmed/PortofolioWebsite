import { motion } from "framer-motion";
import { fade_right_animation, fade_left_animation } from "../constants/framer-motion-animations";
import ContactForm from "../components/ContactForm";
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-slate-800 to-slate-950 snap-always snap-center"
    >
      <div className="w-full max-w-[1250px] flex flex-col md:flex-row gap-6 items-center px-5 xs:px-12 sm:px-14">
        <motion.div {...fade_left_animation} className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl text-white pb-4">
            You can <span className="text-purple-600">&lt; contact \&gt;</span> me here.
          </h2>
          <p className="text-gray-300 text-xs lg:text-base pr-0 md:pr-10">
            Feel free to reach out to me for inquiries, collaborations, or just to say hello! I am always
            eager to connect and discuss exciting opportunities. You can reach me through the form or directly
            via email at ahmed.sinanovic.20@size.ba. Looking forward to hearing from you!
          </p>
        </motion.div>

        <motion.div
          {...fade_right_animation}
          className="w-full md:w-1/2 flex flex-col gap-6 text-3xl md:text-2xl"
        >
          <h2 className="text-2xl md:text-3xl text-white">Send me a message.</h2>
          <ContactForm />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
