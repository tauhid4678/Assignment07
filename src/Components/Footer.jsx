import React from "react";
import Container from "./Container";
import { FaXTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa6";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">CS — Ticket System</h2>
            <p className="text-gray-400 leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                About Us
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Our Mission
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Contact Sales
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Products & Services
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Customer Stories
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Download Apps
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Social Links</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <div className="bg-white text-black p-1 rounded-full text-xs">
                  <FaXTwitter />
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <div className="bg-white text-black p-1 rounded-full text-xs">
                  <FaLinkedinIn />
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <div className="bg-white text-black p-1 rounded-full text-xs">
                  <FaFacebookF />
                </div>
                <span>@CS — Ticket System</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white cursor-pointer transition-colors">
                <div className="bg-white text-black p-1 rounded-full text-xs">
                  <IoMailOutline />
                </div>
                <span>support@cst.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>© 2025 CS — Ticket System. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
