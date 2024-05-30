import { Dispatch, SetStateAction } from "react";

type Props = {
  children: React.ReactNode;
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ children, modalIsOpen, setIsOpen }: Props): JSX.Element => {
  const onHandleModal = () => {
    setIsOpen(!modalIsOpen);
    document.body.style.overflowY = "auto";
  };

  return (
    <>
      {modalIsOpen && (
        <>
          <div
            className="absolute w-full h-full bg-[#000] opacity-5"
            onClick={onHandleModal}
          ></div>
          <div className="absolute sm:w-[600px] flex justify-center items-center bg-black">{children}</div>
        </>
      )}
    </>
  );
};

export default Modal;
