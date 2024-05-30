"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Loading from "../components/loading";

type FormData = {
  name: string;
  email: string;
  message: string;
};

const FormContact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const { name, email, message } = formData;

    if (!name.length || !email.length || !message.length) {
      return;
    }

    const emailTo = process.env.NEXT_PUBLIC_MAIL_TO;
    const endpoint = process.env.NEXT_PUBLIC_ENDPOINT_SENDMAIL;

    if (!emailTo) return console.log("Recipient email missing.");

    if (!endpoint) return console.log("No endpoint for request.");

    setIsLoading(true);

    const postData = new FormData();

    postData.append("name", name);
    postData.append("from", email);
    postData.append("message", message);
    postData.append("to", emailTo);

    fetch(endpoint, {
      method: "POST",
      body: postData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
        setFormData({ email: "", name: "", message: "" });
      });
  };

  return (
    <motion.form
      className="bg-[#fff9f9] dark:bg-bgDark dark:text-textDark duration-100 flex flex-col justify-center items-center w-[90vw] sm:w-[500px] md:w-[700px] h-[500px] rounded-lg shadow-md"
      onSubmit={handleSubmit}
      initial={{
        opacity: 0,
        scale: 0.75,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        transition: {
          ease: "easeOut",
          duration: 0.25,
        },
      }}
      exit={{
        opacity: 0,
        scale: 0.75,
        transition: {
          ease: "easeIn",
          duration: 0.15,
        },
      }}
    >
      <div className="w-[80%] sm:w-96 delay-100">
        {!isLoading ? (
          <div>
            <div className="flex flex-col items-start w-full pb-5">
              <label htmlFor="name" className="">
                Name
              </label>
              <input
                className="bg-[#fefefe] dark:bg-[#131313] p-1 border border-solid border-[#808080] focus:outline focus:outline-2 focus:outline-[#8a85ca] rounded-[.25rem] w-full"
                id="name"
                type="text"
                name="name"
                required={true}
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col items-start w-full py-5">
              <label htmlFor="email">Email</label>
              <input
                className="bg-[#fefefe] dark:bg-[#131313] p-1 border border-solid border-[#808080] focus:outline focus:outline-2 focus:outline-[#8a85ca] bg-transparent rounded-[.25rem] w-full"
                id="email"
                type="email"
                name="email"
                required={true}
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="flex flex-col items-start w-full py-5">
              <label htmlFor="message">Message</label>
              <textarea
                className="bg-[#fefefe] dark:bg-[#131313] h-[10vh] p-1 border border-solid border-[#808080] focus:outline focus:outline-2 focus:outline-[#8a85ca] resize-none bg-transparent rounded-[.25rem] w-full text-left"
                id="message"
                name="message"
                required={true}
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button
              className="border-[#1f222a] border-solid border-x border-y rounded-sm py-4 w-full bg-[#393189] text-[#fefefe] font-bold hover:opacity-90"
              type="submit"
            >
              Send
            </button>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </motion.form>
  );
};

export default FormContact;
