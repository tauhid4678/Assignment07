import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="bg-white">
      <Container>
        <nav className="flex flex-col lg:flex-row items-center justify-between my-5 px-4 md:px-10">
          <div className="font-bold text-xl md:text-2xl whitespace-nowrap">
            CS-Ticket System
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-4 md:gap-10">
            <ul className="flex flex-col lg:flex-row items-center gap-6 xl:gap-10 font-medium">
              <li className="cursor-pointer hover:text-[#632EE3]">Home</li>
              <li className="cursor-pointer hover:text-[#632EE3]">FAQ</li>
              <li className="cursor-pointer hover:text-[#632EE3]">Changelog</li>
              <li className="cursor-pointer hover:text-[#632EE3]">Blog</li>
              <li className="cursor-pointer hover:text-[#632EE3]">Download</li>
              <li className="cursor-pointer hover:text-[#632EE3]">Contact</li>
            </ul>

            <div>
              <button className=" text-xs md:text-base text-white py-2 px-4 md:px-6 rounded-xl bg-gradient-to-r from-[#632EE3] to-[#9F62F2] hover:opacity-90 transition-all">
                + <span className="hidden sm:inline">New Ticket</span>
                <span className="sm:hidden">Ticket</span>
              </button>
            </div>
          </div>
        </nav>
      </Container>
    </div>
  );
};

export default Header;
