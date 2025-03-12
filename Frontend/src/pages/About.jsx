import React from "react";
import { assets } from "../assets/assets";

function About() {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quam quae maxime cum eum ullam eius optio! Similique aspernatur qui,
            ea repudiandae sunt eaque minima! Est beatae totam placeat alias!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
            ratione ut consequuntur quae ullam excepturi, porro, sequi
            repudiandae id vitae quasi voluptatibus! Atque quam ea
            necessitatibus quidem quos tenetur ullam!
          </p>
          <b className="text-gray-800">Our Vison</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            obcaecati mollitia quos blanditiis, odio pariatur quo voluptatem!
            Soluta nostrum sed nisi doloremque tempore, minus iure consequatur
            sit. Enim, eveniet quasi?
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>{" "}
        </p>
      </div>
      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-[#5f6fff] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer"> 
          <b>Efficency:</b>
          <p>Stramlined appointment scheduling that fits into your lifestyle</p>
        </div>
     
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-[#5f6fff] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience:</b>
          <p>Access to a network of trusted healthcare professionals in you area</p>
        </div>
       
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex-col gap-5 text-[15px] hover:bg-[#5f6fff] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization:</b>
          <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
