"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="px-5 py-1 lg:py-3 fixed w-full backdrop-blur-lg lg:backdrop-blur-none top-0 left-0 right-0 z-50">
        <div className="font-f1 flex  justify-between items-center">
          {/* Logo Section */}
          <Link href="/" passHref>
            <img
              className="w-24 bg-clip-padding backdrop-filter px-5 py-2 backdrop-blur-lg rounded-3xl bg-opacity-20"
              src="/Logo1.png"
              alt="Logo"
            />
          </Link>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMenu}
            className="text-white text-3xl bg-clip-padding backdrop-filter backdrop-blur-lg rounded-3xl bg-opacity-20 px-5 py-2"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Animated Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%" }} // Start hidden above
            animate={{ y: "0%" }} // Slide down
            exit={{ y: "-100%" }} // Slide up when closing
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-black w-full text-white flex flex-col items-start justify-center z-50 px-8 py-10 h-screen"
          >
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-8 right-8 text-3xl"
            >
              <FiX />
            </button>

            {/* Navigation Links */}
            <div className="flex justify-between">
              <div className="h-full  ">
                <ul className="flex flex-col font-bold gap-4 landscape:text-7xl text-5xl items-left">
                  <li>
                    <Link href="/Stack" onClick={toggleMenu}>
                      Stack
                    </Link>
                  </li>
                  <li>
                    <Link href="/Works" onClick={toggleMenu}>
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/Experience" onClick={toggleMenu}>
                      Experience
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1uGJKR1SjruHLujfqJVXuf43UUhrJNRQX/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={toggleMenu}
                    >
                      Resume
                    </a>
                  </li>
                </ul>
              </div>
              
            </div>

            {/* Footer Social Links */}
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="w-full absolute top-3/4 mt-20"
            >
              <hr className="w-full border-white/30 pb-3" />
              <div className="flex gap-4 font-f1">
                <a className="hover:font-bold" href="https://www.behance.net/manishkpal" target="/">
                  Behance
                </a>
                <a className="hover:font-bold" href="https://github.com/manishpal4" target="/">
                  Github
                </a>
                <a className="hover:font-bold" href="https://www.linkedin.com/in/manispal/" target="/">
                  Linkedin
                </a>
                <a className="hover:font-bold" href="https://medium.com/@Mann_eei" target="/">
                  Medium
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
