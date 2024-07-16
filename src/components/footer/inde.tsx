"use client";
import { FaTwitter } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import MaxWidthContainer from "../MaxWidthContainer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full h-auto bg-[#181818] text-white py-5 md:py-10">
      <MaxWidthContainer>
        <div className=" flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <div className="flex gap-x-2">
            <Link to="">
              <MdAttachEmail size={32} color="skyblue" />
            </Link>
            <Link to="">
              <FaTwitter size={32} color="skyblue" />
            </Link>
            <Link to="">
              <FaTelegramPlane size={32} color="skyblue" />
            </Link>
          </div>
        </div>
        <hr className="bg-black opacity-45 mt-6" />
      </MaxWidthContainer>
      <div className="text-center mt-2 opacity-75">
        Copyright © 2024 PangPang All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
