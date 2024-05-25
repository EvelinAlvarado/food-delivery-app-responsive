import { FaGithub, FaLinkedin } from "react-icons/fa";

export const DevFooter = () => {
  return (
    <footer className="border-t-4 flex flex-col items-center gap-4 bg-light-blue py-10">
      <p className="text-sm text-Dark-blue font-bold tracking-[2px]">
        Coded by{" "}
        <a
          href="#"
          className="text-black hover:text-tomato hover:italic cursor-pointer"
        >
          Evelin
        </a>
        .
      </p>

      <div className="flex justify-center gap-2 ">
        <a href="https://github.com/EvelinAlvarado" target="_blank">
          <FaGithub className="w-6 h-6 text-Dark-blue hover:text-tomato transition duration-500 hover:scale-125 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/evelinalvarado/" target="_blank">
          <FaLinkedin className="w-6 h-6 text-Dark-blue hover:text-tomato transition duration-500 hover:scale-125 cursor-pointer" />
        </a>
      </div>
    </footer>
  );
};
