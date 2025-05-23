import React from "react";
import {
  FaXTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-base-100 text-base-content border-t border-base-300 mt-10 py-10">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2 md:w-5/6">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-neutral text-neutral-content h-6 w-6 rounded-full flex justify-center items-center">
                <span className="text-lg font-bold">O</span>
              </div>
              <span className="font-bold text-lg">Orkid Hills</span>
            </div>
            <p className="text-sm text-gray-500">
              Orkid Hills is your trusted destination for peaceful stays, luxury
              rooms, and unforgettable experiences. Book your perfect getaway in
              just a few clicks.
            </p>
            <div className="flex gap-4 mt-4 text-xl text-gray-600">
              <FaXTwitter className="hover:text-neutral cursor-pointer" />
              <FaLinkedin className="hover:text-neutral cursor-pointer" />
              <FaFacebook className="hover:text-neutral cursor-pointer" />
              <FaGithub className="hover:text-neutral cursor-pointer" />
              <FaInstagram className="hover:text-neutral cursor-pointer" />
            </div>
          </div>

          {/* Explore */}
          <div className="flex flex-col">
            <h3 className="footer-title">Explore</h3>
            <a className="link link-hover">Our Rooms</a>
            <a className="link link-hover">Facilities</a>
            <a className="link link-hover">Special Offers</a>
            <a className="link link-hover">Guest Reviews</a>
          </div>

          {/* Support */}
          <div className="flex flex-col">
            <h3 className="footer-title">Support</h3>
            <a className="link link-hover">Customer Service</a>
            <a className="link link-hover">FAQs</a>
            <a className="link link-hover">Booking Policies</a>
            <a className="link link-hover">Payment Options</a>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <h3 className="footer-title">Company</h3>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Partner With Us</a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-base-300 mt-6 pt-2 text-sm text-gray-500">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2025 Orkid Hills. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="link link-hover underline">Privacy Policy</a>
            <a className="link link-hover underline">Terms of Service</a>
            <a className="link link-hover underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
