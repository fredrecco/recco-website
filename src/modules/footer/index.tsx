const Footer = (): JSX.Element => {
  return (
    <footer className="p-4 bg-[#fefefe] dark:bg-[#1E1E1E] dark:text-[#B5D9D9] delay-100 flex justify-center">
      <span>&copy; {new Date().getUTCFullYear()} - Recco</span>
    </footer>
  );
};

export default Footer;
