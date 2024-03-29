import React from "react";
import "../../app/globals.css";

function Index() {
  return (
    <section className=" bg-white flex flex-col gap-[10px] w-[800px] mx-auto py-[30px]">
      <a
        href="#"
        className="bg-[#4B6BFB] text-[#FFFFFF] text-[14px] leading-[20px] 
  w-[102px] h-[32px] px-[12px] py-[6px] border-2 rounded-[6px] font-medium
  flex justify-center items-center"
      >
        Technology
      </a>

      <h1 className=" text-[36px] font-medium text-[#181A2A] leading-[40px]">
        The Impact of Technology on the Workplace: How Technology is Changing
      </h1>
      <div className="flex gap-[15px] items-center">
        <div className="flex items-center gap-[5px]">
          <img src="/icons/person.png" alt="" className="w-[28px] h-[28px]" />
          <p className="text-[#696A75] text-[14px] font-medium leading-[20px]">
            Tracey Wilson
          </p>
        </div>
        <p className="text-[#696A75] text-[14px] font-medium leading-[20px]">
          August 20, 2022
        </p>
      </div>
      <div className="flex flex-col gap-[20px] my-[20px]">
        <img
          src="./images/view.png"
          alt="view"
          className="w-[800px] h-[462px]"
        />
        <p className="text-[#3B3C4A]  font-normal text-[20px]">
          Traveling is an enriching experience that opens up new horizons,
          exposes us to different cultures, and creates memories that last a
          lifetime. However, traveling can also be stressful and overwhelming,
          especially if you don't plan and prepare adequately. In this blog
          article, we'll explore tips and tricks for a memorable journey and how
          to make the most of your travels. One of the most rewarding aspects of
          traveling is immersing yourself in the local culture and customs. This
          includes trying local cuisine, attending cultural events and
          festivals, and interacting with locals. Learning a few phrases in the
          local language can also go a long way in making connections and
          showing respect.
        </p>
      </div>
      <div>
        <h1 className="text-[24px] font-semibold my-[20px] text-[#181A2A] leading-[28px]">
          Research Your Destination
        </h1>
        <p className="text-[20px] font-normal text-[#3B3C4A] leading-[32px] mb-[30px]">
          Before embarking on your journey, take the time to research your
          destination. This includes understanding the local culture, customs,
          and laws, as well as identifying top attractions, restaurants, and
          accommodations. Doing so will help you navigate your destination with
          confidence and avoid any cultural faux pas.
        </p>
        <p className="text-[20px] font-normal text-[#3B3C4A] leading-[32px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. In
          hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi ipsum
          faucibus vitae aliquet nec ullamcorper sit amet. Aenean euismod
          elementum nisi quis eleifend quam adipiscing vitae. Viverra adipiscing
          at in tellus.
        </p>
      </div>
      <div
        className="w-[800px]
      p-[32px] bg-[#E8E8EA]
      my-[30px]
    "
      >
        <p className="text-[24px] font-normal text-[#3B3C4A] leading-[32px] italic">
          {" "}
          “ Traveling can expose you to new environments and potential health
          risks, so it's crucial to take precautions to stay safe and healthy. ”
        </p>
      </div>
    </section>
  );
}

export default Index;
