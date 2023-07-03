import { FaDiscord, FaGithub, FaNodeJs, FaTrello, FaReact } from "react-icons/fa6";
const Body = () => {
  return (
    <div className="absolute p-16 font-sans h-full w-full top-48 bg-gray-600 text-white">
        <div className="flex flex-row items-start justify-center mb-12">
          <div className=" my-4 mx-6 w-80">
            <h1 className=" text-4xl font-bold mb-5 text-center">Lorem ipsum</h1>
            <p className=" text-center leading-relaxed capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
              pharetra ligula, eget lobortis risus. Cras eu mi a neque eleifend
              luctus sagittis posuere nulla.
            </p>
          </div>
          <div className=" my-4 mx-6 w-80">
            <h1 className=" text-4xl font-bold mb-5 text-center">Lorem ipsum</h1>
            <p className=" text-center leading-relaxed capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
              pharetra ligula, eget lobortis risus. Cras eu mi a neque eleifend
              luctus sagittis posuere nulla.
            </p>
          </div>
          <div className=" my-4 mx-6 w-80">
            <h1 className=" text-4xl font-bold mb-5 text-center">Lorem ipsum</h1>
            <p className=" text-center leading-relaxed capitalize">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a
              pharetra ligula, eget lobortis risus. Cras eu mi a neque eleifend
              luctus sagittis posuere nulla.
            </p>
          </div>
        </div>
        <div className="">
            <div className=" relative w-full flex items-start justify-center mb-8">
                <h1 className=" text-2xl text-center">Lorem ipsum</h1>
            </div>
            <div className=" flex flex-row items-start justify-center ">
                <div className=" w-16 h-16 text-base text-gray-900 bg-gray-300 rounded-full flex items-center justify-center mx-6 hover:bg-slate-900 hover:text-gray-300 transition-all duration-150 ease-linear cursor-pointer">
                    <FaDiscord size={42}/>
                </div>
                <div className=" w-16 h-16 text-base text-gray-900 bg-gray-300 rounded-full flex items-center justify-center mx-6 hover:bg-slate-900 hover:text-gray-300 transition-all duration-150 ease-linear cursor-pointer">
                    <FaGithub size={42}/>
                </div>
                <div className=" w-16 h-16 text-base text-gray-900 bg-gray-300 rounded-full flex items-center justify-center mx-6 hover:bg-slate-900 hover:text-gray-300 transition-all duration-150 ease-linear cursor-pointer">
                    <FaNodeJs size={42}/>
                </div>
                <div className=" w-16 h-16 text-base text-gray-900 bg-gray-300 rounded-full flex items-center justify-center mx-6 hover:bg-slate-900 hover:text-gray-300 transition-all duration-150 ease-linear cursor-pointer">
                    <FaReact size={42}/>
                </div>
                <div className=" w-16 h-16 text-base text-gray-900 bg-gray-300 rounded-full flex items-center justify-center mx-6 hover:bg-slate-900 hover:text-gray-300 transition-all duration-150 ease-linear cursor-pointer">
                    <FaTrello size={42}/>
                </div>
            </div>
        </div>
    </div>
  );
};
export default Body;
