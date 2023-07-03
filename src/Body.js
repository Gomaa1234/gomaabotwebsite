import {
  FaDiscord,
  FaGithub,
  FaNodeJs,
  FaTrello,
  FaReact,
} from "react-icons/fa6";
const Body = () => {
  return (
    <div className="absolute top-48 min-h-full w-full bg-gray-600 p-16 font-sans text-white">
      <div className="mb-12 flex flex-row items-start justify-center">
        <div className=" mx-6 my-4 w-80">
          <h1 className=" mb-5 text-center text-4xl font-bold">Lorem ipsum</h1>
          <p className=" text-center capitalize leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
            pharetra ligula, eget lobortis risus. Cras eu mi a neque eleifend
            luctus sagittis posuere nulla.
          </p>
        </div>
        <div className=" mx-6 my-4 w-80">
          <h1 className=" mb-5 text-center text-4xl font-bold">Lorem ipsum</h1>
          <p className=" text-center capitalize leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
            pharetra ligula, eget lobortis risus. Cras eu mi a neque eleifend
            luctus sagittis posuere nulla.
          </p>
        </div>
        <div className=" mx-6 my-4 w-80">
          <h1 className=" mb-5 text-center text-4xl font-bold">Lorem ipsum</h1>
          <p className=" text-center capitalize leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
            pharetra ligula, eget lobortis risus. Cras eu mi a neque eleifend
            luctus sagittis posuere nulla.
          </p>
        </div>
      </div>
      <div>
        <div className=" relative mb-8 flex w-full items-start justify-center">
          <h1 className=" text-center text-2xl">Lorem ipsum</h1>
        </div>
        <div className=" flex flex-row items-start justify-center ">
          <div className=" mx-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-base text-gray-900 transition-all duration-150 ease-linear hover:bg-slate-900 hover:text-gray-300">
            <FaDiscord size={42} />
          </div>
          <div className=" mx-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-base text-gray-900 transition-all duration-150 ease-linear hover:bg-slate-900 hover:text-gray-300">
            <FaGithub size={42} />
          </div>
          <div className=" mx-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-base text-gray-900 transition-all duration-150 ease-linear hover:bg-slate-900 hover:text-gray-300">
            <FaNodeJs size={42} />
          </div>
          <div className=" mx-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-base text-gray-900 transition-all duration-150 ease-linear hover:bg-slate-900 hover:text-gray-300">
            <FaReact size={42} />
          </div>
          <div className=" mx-6 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-gray-300 text-base text-gray-900 transition-all duration-150 ease-linear hover:bg-slate-900 hover:text-gray-300">
            <FaTrello size={42} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Body;
