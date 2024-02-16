import { useRef } from "react";
import EmailSVG from "../assets/svgs/emailSVG";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Your message is succsessfully sent!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Something went wrong. Please try again later or contact me directly.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="relative mb-6">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
          <EmailSVG />
        </div>
        <input
          required
          name="user_email"
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="example@email.com"
        />
      </div>
      <div className="relative mb-6">
        <input
          required
          name="user_name"
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Your name"
        />
      </div>
      <div className="relative mb-6">
        <textarea
          required
          name="message"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
          placeholder="Message here"
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 text-xs lg:text-base border-2 borer-white text-white hover:bg-purple-600 hover:border-purple-600"
      >
        Contact me
      </button>
    </form>
  );
};

export default ContactForm;
