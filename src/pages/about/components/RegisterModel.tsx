import { Dispatch, SetStateAction } from "react";
import Button from "../../../components/Button";
import GlobalContext from "../../../context/GlobalContext";
import { motion } from "framer-motion";
import { IoCloseCircle } from "react-icons/io5";
function RegisterModel({ fn }: { fn: Dispatch<SetStateAction<boolean>> }) {
  const { lan } = GlobalContext();

  return (
    <>
      <div className="fixed w-screen h-screen bg-black opacity-70 z-50 left-0 top-0"></div>
      <div className="fixed lg:w-5/12 md:w-8/12 w-full top-1/3 left-1/2 z-50 -translate-x-1/2 p-4 flex flex-col gap-4 bg-black bg-opacity-80 rounded-md">
        <div
          className="absolute top-2 right-2 text-red-600 text-xl cursor-pointer transition-all hover:scale-95"
          onClick={() => fn(false)}
        >
          <IoCloseCircle />
        </div>
        <div
          className={`sm:text-3xl text-xl w-fit text-white flex flex-col relative gap-1 text-center lg:text-start ${
            lan === "ar" ? "lg:ml-auto lg:m-0 m-auto" : "lg:m-0 m-auto"
          }`}
        >
          <motion.span
            whileInView={{
              y: [20, 0],
              opacity: [0, 1],
              transition: {
                delay: 0.2,
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              },
            }}
          >
            {lan == "ar" ? "التسجيل" : "REGISTER"}
          </motion.span>
          <motion.span
            whileInView={{
              y: [20, 0],
              opacity: [0, 1],
              transition: {
                delay: 0.6,
                duration: 0.4,
                type: "spring",
                stiffness: 100,
              },
            }}
            className="relative"
          >
            <span
              className={`absolute h-1 lg:left-0 lg:translate-x-0 left-1/2 -translate-x-1/2 lg:w-1/3 w-1/2 ${
                lan == "ar" ? "right-0" : "left-0"
              } -bottom-2 bg-main`}
            ></span>
          </motion.span>
        </div>
        <input
          type="text"
          placeholder={`${lan == "ar" ? "الاسم" : "NAME"}`}
          name=""
          id=""
          className="p-2 outline-none bg-transparent border-main border mt-4"
        />
        <input
          type="text"
          placeholder={`${lan == "ar" ? "رقم الهاتف" : "PHONE NUMBER"}`}
          name=""
          id=""
          className="p-2 outline-none bg-transparent border-main border mt-4"
        />
        <div className="text-sm">
          <Button>
            {lan == "ar" ? "ارسال المعلومات" : "SEND INFORMATION"}
          </Button>
        </div>
      </div>
    </>
  );
}

export default RegisterModel;
