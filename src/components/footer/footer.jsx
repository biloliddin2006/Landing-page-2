import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaPaypal,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";

import logo from "../../assets/Vector.png";
import renovation from "../../assets/plant-renovation.png";
import watering from "../../assets/watering-garden.png";

export function Footer() {
  return (
    <footer className="max-w-[1220px] mx-auto mt-20">

      {/* Top Section */}
      <div className="bg-[#FBFBFB] grid grid-cols-1 md:grid-cols-4">

        {/* Card 1 */}
        <div className="p-8 border-r border-gray-200">
          <img src={renovation} alt="" className="w-20 mb-4" />
          <h3 className="font-bold text-[#3D3D3D]">Garden Care</h3>
          <p className="text-sm text-[#727272] mt-2">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-8 border-r border-gray-200">
          <img src={renovation} alt="" className="w-20 mb-4" />
          <h3 className="font-bold text-[#3D3D3D]">Plant Renovation</h3>
          <p className="text-sm text-[#727272] mt-2">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-8 border-r border-gray-200">
          <img src={watering} alt="" className="w-20 mb-4" />
          <h3 className="font-bold text-[#3D3D3D]">Watering Garden</h3>
          <p className="text-sm text-[#727272] mt-2">
            We are an online plant shop offering a wide range of cheap and trendy plants.
          </p>
        </div>

        {/* Newsletter */}
        <div className="p-8">
          <h3 className="font-bold text-[#3D3D3D] mb-4">
            Would you like to join newsletters?
          </h3>

          <div className="flex">
            <input
              type="email"
              placeholder="enter your email address..."
              className="flex-1 border px-3 py-2 text-sm outline-none rounded-l-md"
            />

            <button className="bg-[#46A358] text-white px-6 rounded-r-md">
              Join
            </button>
          </div>

          <p className="text-sm text-[#727272] mt-4">
            We usually post offers and challenges in newsletter. We’re your
            online houseplant destination.
          </p>
        </div>
      </div>

      {/* Contact Bar */}
      <div className="bg-[#46A3581A] px-8 py-5 grid grid-cols-1 md:grid-cols-4 items-center gap-6">

        <div className="flex items-center gap-2 text-2x1 font-bold text-green-600">
            <img src={logo} alt="" />
                GREENSHOP
        </div>

        <div className="flex items-center gap-2 text-sm">
          <IoLocationOutline className="text-[#46A358]" />
          <p>70 West Buckingham Ave. Farmingdale, NY 11735</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <MdOutlineEmail className="text-[#46A358]" />
          <p>contact@greenshop.com</p>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <FiPhone className="text-[#46A358]" />
          <p>+88 01911 717 490</p>
        </div>
      </div>

      {/* Footer Links */}
      <div className="bg-[#FBFBFB] grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-10">

        <div>
          <h3 className="font-bold mb-4">My Account</h3>
          <ul className="space-y-2 text-sm text-[#727272]">
            <li>My Account</li>
            <li>Our Stores</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Specials</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Help & Guide</h3>
          <ul className="space-y-2 text-sm text-[#727272]">
            <li>Help Center</li>
            <li>How to Buy</li>
            <li>Shipping & Delivery</li>
            <li>Product Policy</li>
            <li>How to Return</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm text-[#727272]">
            <li>House Plants</li>
            <li>Potter Plants</li>
            <li>Seeds</li>
            <li>Small Plants</li>
            <li>Accessories</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Social Media</h3>

          <div className="flex gap-3 mb-6 text-[#46A358] text-lg">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedinIn />
            <FaYoutube />
          </div>

          <h3 className="font-bold mb-3">We accept</h3>

          <div className="flex gap-3 text-3xl">
            <FaPaypal />
            <FaCcMastercard />
            <FaCcVisa />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-5 text-sm border-t">
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
}