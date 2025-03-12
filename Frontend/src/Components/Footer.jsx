import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="md:mx-10">
      <div className="flex  flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left section */}
        <div>
          <img className="mb-10 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-1/2 text-gray-600 leading-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            suscipit placeat sed aliquam dolores cupiditate, in velit fugiat?
            Tempora possimus similique sapiente repellendus vitae distinctio
            incidunt sint natus rem autem?
          </p>
        </div>
        {/* center section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
           
          </ul>
        </div>
        {/* right section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">

          <li>+8767223190li</li>
          <li>Abcdfhdj@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/* Copyright Text */}
        <div>
          <hr />
          <p className="py-5 text-sm text-center">Copyright 2025@ Prescipto . All Right Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
