import { MouseEventHandler } from "react";

type Props = {
  onClick: MouseEventHandler<HTMLAnchorElement>;
  right: string;
};

const Drawer = ({ right, onClick }: Props): JSX.Element => {
  const links = [
    { name: "About", to: "#about" },
    // { name: "My Projects", to: "#myprojects" },
    { name: "Contact", to: "#contact" },
  ];

  return (
    <div
      className="w-[100%] fixed h-[100%] flex tablet:hidden flex-col justify-around items-center bg-bgLight dark:bg-bgDark dark:text-textDark overflow-y-hidden grow delay-100 duration-100 p-3 transition-[.5s] ease-linear"
      style={{ right }}
    >
      <div className="flex space-y-6 flex-col items-center">
        {links.map((link, i) => (
          <a
            className="text-3xl font-light"
            href={link.to}
            key={i}
            onClick={onClick}
          >
            {link.name}
          </a>
        ))}
      </div>
      <span>&copy; {new Date().getUTCFullYear()} - Recco</span>
    </div>
  );
};

export default Drawer;
