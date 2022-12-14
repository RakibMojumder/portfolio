import React, { useRef } from "react";
import { MdPhoneInTalk, MdEmail, MdLocationOn } from "react-icons/md";
import { BsLinkedin, BsFacebook, BsGithub } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xf7sswz",
        "template_6bkj777",
        form.current,
        "g5MUfhlcd6ziz9wZZ"
      )
      .then(
        (result) => {
          toast.success("Successfully send the message");
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="py-20">
      <h1 className="text-3xl md:text-4xl text-white uppercase text-center font-bold font-robotoMono">
        Get In <span className="text-cyan-400">Touch</span>
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-5 my-5 md:py-10">
        <div className="text-white space-y-8 flex-1 mt-14 md:mt-0">
          <div className="flex items-center gap-4">
            <MdPhoneInTalk className="text-4xl text-cyan-400" />
            <div>
              <h1 className="text-2xl ">Phone</h1>
              <h3>+880 1829218489</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdEmail className="text-4xl text-cyan-400" />
            <div>
              <h1 className="text-2xl ">Email</h1>
              <h3>Sujonahnmed45a4@gmail.com</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <MdLocationOn className="text-4xl text-cyan-400" />
            <div>
              <h1 className="text-2xl ">Address</h1>
              <h3>Chandpur, Bangladesh</h3>
            </div>
          </div>
          <div className="flex text-3xl space-x-9">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/profile.php?id=100078261521721"
            >
              <BsFacebook className="hover:text-cyan-400" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/rakib-ahmed4554/"
            >
              <BsLinkedin className="hover:text-cyan-400" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/RakibMojumder"
            >
              <BsGithub className="hover:text-cyan-400" />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <form ref={form} onSubmit={sendEmail} className="space-y-5">
            <div className="input-filed">
              <label htmlFor="name" className="text-white block">
                Name
              </label>
              <input
                className="w-full py-1.5 pl-3 focus:outline-none"
                type="text"
                name="user_name"
                id="name"
                required
              />
            </div>
            <div className="input-filed">
              <label htmlFor="email" className="text-white block">
                Email
              </label>
              <input
                className="w-full py-1.5 pl-3 focus:outline-none"
                type="email"
                name="user_email"
                id="email"
                required
              />
            </div>
            <div className="input-filed">
              <label htmlFor="subject" className="text-white block">
                Subject
              </label>
              <input
                className="w-full py-1.5 pl-3 focus:outline-none"
                type="text"
                name="subject"
                id="subject"
                required
              />
            </div>
            <div className="input-filed">
              <label htmlFor="subject" className="text-white block">
                Message
              </label>
              <textarea
                className="w-full focus:outline-none pl-3"
                name="message"
                id=""
                rows="5"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 border border-cyan-400 px-6 py-1 text-white transition-all duration-300 ease-in hover:bg-transparent hover:rounded-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
