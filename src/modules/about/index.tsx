/* eslint-disable react/no-unescaped-entities */
import Github from "@/common/svgs/githubIcon";
import Linkedin from "@/common/svgs/linkedinIcon";
import Mail from "@/common/svgs/mailIcon";

const About = (): JSX.Element => {
  return (
    <div
      className="relative w-full flex justify-center items-center h-[100vh] bg-bgLight dark:bg-bgDark dark:text-[#fefefe] delay-100 duration-100 transition-colors ease-in-out about"
      id="about"
    >
      <div className="h-[80vh] p-5 flex items-center lg:gap-20 xl:gap-80">
        <div className="">
          <div className="flex flex-col justify-center">
            <h3 className="text-lg tracking-wide">I'm</h3>
            <h1 className="text-3xl tracking-wide font-normal">
              Frederico Recco
            </h1>
            <h2 className="text-xl tracking-wider opacity-85">
              Software Developer
            </h2>
          </div>
          <p className="text-justify mt-10 text-lg max-w-[33rem] dark:text-textDark delay-100">
            Hi! I'm a software developer passionate about creating projects and
            technologies that add value to people's lives. I'm constantly
            seeking to learn more, always with the goal of growing both as a
            person and as a professional.
          </p>
          <div className="flex justify-start items-center py-10 space-x-8">
            <a href="https://github.com/fredrecco" rel="noopener noreferrer">
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/fred-recco-a95144259/"
              rel="noopener noreferrer"
            >
              <Linkedin />
            </a>
            <a href="mailto:recco.fred01@gmail.com" rel="noopener noreferrer">
              <Mail />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
