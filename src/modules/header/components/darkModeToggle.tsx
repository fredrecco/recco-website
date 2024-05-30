"use client";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import Moon from "@/common/svgs/moonIcon";
import Sun from "@/common/svgs/sunIcon";
import { ThemeContext } from "@/common/context/theme";

const DarkModeToggle = (): JSX.Element => {
  const context = useContext(ThemeContext);
  const [isOn, setIsOn] = useState(false);
  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 30,
  };

  const handleTheme = () => {
    if (context) {
      context.setTheme((last) => (last === "light" ? "dark" : "light"));
    }

    setIsOn((last) => !last);
  };

  useEffect(() => {
    setIsOn(context?.theme == "dark");
  }, [context]);

  return (
    <div className="relative w-[70px] h-[35px] p-[5px] bg-[#fff9f9] dark:bg-[#1E1E1E] delay-100 rounded-full mr-2">
      <div className="w-full h-full relative flex justify-around items-center space-x-3">
        <Sun />
        <Moon />
      </div>
      <div
        className="absolute switch top-0 left-0"
        data-ison={isOn}
        onClick={handleTheme}
      >
        <motion.div
          className="absolute handle border border-solid border-[#1E1E1E] dark:border-[#fefefe]"
          layout
          transition={spring}
        />
      </div>
    </div>
  );
};

export default DarkModeToggle;
