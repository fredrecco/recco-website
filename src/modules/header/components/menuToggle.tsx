import { motion } from "framer-motion";
import { MouseEventHandler } from "react";

const Path = (props: any): JSX.Element => (
  <motion.path
    fill="none"
    strokeWidth="3"
    stroke="currentColor"
    strokeLinecap="round"
    {...props}
  />
);

const MenuToggle = ({
  className,
  toggle,
}: {
  className: string;
  toggle: MouseEventHandler<HTMLButtonElement>;
}): JSX.Element => (
  <button className={className} onClick={toggle}>
    <svg width="27" height="27" viewBox="0 0 23 23" fill="currentColor">
      <Path
        fill="currentColor"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <Path
        fill="currentColor"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        fill="currentColor"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;
