"use client";
import DarkModeToggle from "./components/darkModeToggle";
import Drawer from "./components/drawer";
import { useRef, useState } from "react";
import MenuToggle from "./components/menuToggle";
import { motion, useCycle } from "framer-motion";

const Header = (): JSX.Element => {
  const [drawer, setDrawer] = useState<"0" | "-100%">("-100%");
  const [isOpen, toggleOpen] = useCycle(false, true);

  const handleDrawer = () => {
    setDrawer(drawer == "0" ? "-100%" : "0");
    toggleOpen();
  };

  const links = [
    { name: "About", to: "#about" },
    // { name: "My Projects", to: "#myprojects" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <div className="w-[100%] bg-[#fefefe] dark:bg-[#1E1E1E] dark:text-[#fefefe] delay-100 duration-100 overflow-hidden fixed z-30">
      <motion.nav
        className="w-[100%] flex justify-between items-center p-4"
        initial={false}
        animate={isOpen ? "open" : "closed"}
      >
        <a className="text-lg font-bold tracking-wide uppercase" href="/">
          Recco
        </a>
        <div className="space-x-5 text-lg hidden lg:block">
          {links.map((link, i) => (
            <a href={link.to} key={i}>
              {link.name}
            </a>
          ))}
        </div>
        <div className="flex items-center">
          <DarkModeToggle />
          <MenuToggle
            className="lg:hidden w-[35px] h-[35px] dark:text-[#fefefe] flex justify-center items-center pt-1"
            toggle={handleDrawer}
          />
        </div>
      </motion.nav>
      <Drawer right={drawer} onClick={() => setDrawer("-100%")} />
    </div>
  );
};

export default Header;
