"use client";  // 👈 Mark this as a Client Component
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white font-f1 text-3xl w-full px-10 pt-20 pb-5 ">
      {/* Work With Me Section */}
      <div className="">
        <div className="landscape:flex landscape:justify-between items-center">
          <h1 className="mb-5 landscape:mb-0">Work with me.</h1>
          <a href="mailto:Manish3upal@gmail.com" className="hover:underline">
            Manish3upal@gmail.com
          </a>
        </div>
        <hr className="border-white/30 mt-12" />
      </div>

      {/* Sitemap & Social Links */}
      <div className="flex flex-wrap mt-10">
        {/* Sitemap Section */}
        <div className="w-1/2 sm:w-1/4">
          <h1 className="text-xl">Sitemap</h1>
          <ul className="mt-3 text-lg text-white/30">
                  <li>
                    <Link href="/Stack"
                    className="hover:text-white" >
                      Stack
                    </Link>
                  </li>
                  <li>
                    <Link href="/Works"
                     className="hover:text-white" >
                      Works
                    </Link>
                  </li>
                  <li>
                    <Link href="/Experience"
                     className="hover:text-white" >
                      Experience
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://drive.google.com/file/d/1uGJKR1SjruHLujfqJVXuf43UUhrJNRQX/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                       className="hover:text-white"
                      
                    >
                      Resume
                    </a>
                  </li>
                </ul>
        </div>

        {/* Social Links Section */}
        <div className="w-1/2 sm:w-1/4">
          <h1 className="text-xl">Social</h1>
          <ul className="mt-3 text-lg text-white/30">
            <li><a className="hover:text-white" href="https://www.linkedin.com/in/manispal/">Linkedin</a></li>
            <li><a className="hover:text-white" href="https://medium.com/@Mann_eei">Medium</a></li>
            <li><a className="hover:text-white" href="https://www.behance.net/manishkpal">Behance</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className=" mt-14 lg:flex items-center md:flex justify-between text-lg ">
        <div>
          <h1 className=" text-9xl">mani</h1>
        </div>
        <div className="flex gap-20 items-baseline">
          {/* ✅ Fix: Moved "Back to top" inside a Client Component */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="hover:text-white transition"
          >
            Back to top ↑
          </button>
          <p>Copyright © Mani 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
