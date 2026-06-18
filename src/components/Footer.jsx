const Footer = () => {
  return (
    <div className="pt-80 flex justify-center items-center pb-5 ">
      <p className="text-sm text-neutral-900/70">
        Build by{" "}
        <a
          href="https://x.com/itsanxhu"
          target="_blank"
          className="underline cursor-pointer hover:text-blue-500"
        >
          itsanxhu
        </a>
        . The source code is available on{" "}
        <a
          href="https://github.com/itsanxhu/priyaBhatt"
          target="_blank"
          className="underline cursor-pointer hover:text-blue-500"
        >
          Github
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
