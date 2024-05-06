import React from "react";
import NavBar from "../NavBar";
import Slider from "../Slider";

const HeroSection = () => {
  return (
    <div className="relative text-white mx-auto flex flex-col h-screen gap-8 z-10">
      <NavBar />
      <div>
        {/* <div className="flex items-center justify-between flex-1 gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-1">
              <p className="text-[28px] font-semibold">Hello It’s Me</p>
              <h1 className="text-[52px] font-bold">Jenish Lodaliya</h1>
              <div>
                <p className="text-[28px] font-semibold">
                  And I’ m a Ui/Ux designer
                </p>
              </div>
              <p className="mt-3">
                Word preserves the original formatting when you paste content
                into a document using Ctrl+V.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                <img src="/images/x.svg" alt="twitter" />
              </button>
              <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                <img src="/images/fb.svg" alt="facebook" />
              </button>
              <button className="border-2 border-transparent p-2 hover:border-[#01EEFF] transition ease-in-out duration-[0.5s] rounded-full">
                <img src="/images/instagram.svg" alt="instagram" />
              </button>
            </div>
            <button className="bg-[#01EEFF] w-fit rounded-md p-2 px-6 hover:shadow-[0px_0px_10px_0px_#01EEFF] transition ease-in-out duration-[0.2s]">
              Downloads CV
            </button>
          </div>
        </div> */}
        <div className="absolute w-full h-full top-0 right-0 ">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
