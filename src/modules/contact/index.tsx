/* eslint-disable react/no-unescaped-entities */
import FormContact from "./formContact";
import { useState } from "react";
import Modal from "@/common/modal";
import Image from "next/image";

const Contact = (): JSX.Element => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const onHandleModal = () => {
    setIsOpen(!modalIsOpen);
    document.body.style.overflowY = "hidden";
  };

  return (
    <div
      className="relative w-full sm:min-h-[50vh] flex justify-center items-center"
      id="contact"
    >
      <div className="relative w-[100vw] h-[100vh]">
        <Image
          className="relative w-[100vw] h-[100vh] object-cover"
          src="/images/background-image-contact2.jpg"
          alt="Background image code"
          priority
          width={0}
          height={0}
          sizes="100vh"
        />
        <div className="absolute w-full h-full top-0 left-0 opacity-90 bg-[#fefefe] dark:bg-[#1E1E1E] delay-100"></div>
      </div>
      <div className="absolute bg-[#fff9f9] dark:bg-[#222] dark:text-[#fefefe] delay-100 rounded-md w-[90%] sm:max-w-[500px] sm:h-64 shadow-md flex flex-col items-center justify-center">
        <div className="m-4 flex flex-col items-center">
          <h2 className="text-xl font-bold w-[90%] text-[#473ea5]">
            Have a project idea?
          </h2>
          <div className="mt-5 w-full flex flex-col items-center justify-around h-[60%]">
            <p className="w-[90%] text-justify opacity-70 text-lg">
              If you have a project or an idea you'd like to discuss, feel free
              to send me a message.
            </p>
            <button
              className="mt-4 w-[90%] rounded-sm border border-solid border-[#473ea5] text-[#473ea5] font-bold py-2"
              onClick={onHandleModal}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
      <Modal modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}>
        <FormContact />
      </Modal>
    </div>
  );
};

export default Contact;
