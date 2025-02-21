"use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  const [mouseX, setMouseX] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0); // Initialized to 0 to prevent SSR issues

  useEffect(() => {
    setWindowWidth(window.innerWidth); // Set width after mount

    const handleMouseMove = (e: MouseEvent) => {
      setMouseX(e.clientX);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const moveX = mouseX < windowWidth / 2 ? 15 : -15; // Adjust floating movement

  return (
    <>
      <div className="bg-gray-400 w-full min-h-screen flex flex-col landscape:flex-row md:flex-cols">
        {/* First section */}
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full min-h-screen landscape:w-2/3 relative flex items-center md:h-screen justify-center"
        >
          <Navbar />
          <Image
            className="h-screen w-full object-cover absolute top-0 left-0"
            src="/bg1.png"
            alt="Background"
            fill
          />

          {/* Floating span */}
          <motion.span
            animate={{ x: moveX, y: [0, -5, 0] }}
            transition={{
              x: { duration: 0.5, ease: "easeInOut" },
              y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
            className="absolute w-52 h-64 bg-white py-2 flex flex-col justify-between shadow-md"
          >
            <div className="px-2 flex justify-between">
              <p className="font-f2">Based in India</p>
              <span className="text-3xl">
                <ImArrowUpRight2 />
              </span>
            </div>
            <div className="px-2 text-right">
              <h1 className="font-f2 text-md">Design-Develop-Edit</h1>
              <h1 className="text-4xl font-f1">Manish Pal</h1>
            </div>
          </motion.span>

          {/* Bottom-left text */}
          <div className="absolute text-black bottom-10 landscape:left-14 left-6">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl font-f1 font-bold landscape:text-5xl"
            >
              Creating <span className="font-f2">with</span> code.
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-4xl font-f1 font-bold landscape:text-5xl"
            >
              Designing <span className="font-f2">with</span> purpose.
            </motion.h1>
          </div>
        </motion.div>

        {/* Second section */}
        <div className="w-full h-screen landscape:w-1/3 relative bg-zinc-300 px-10 flex flex-col items-center justify-center">
          <h1 className="font-f1 text-4xl md:text-3xl lg:text-4xl leading-4 text-center">
            THROUGH <span className="font-f2">my</span> GAZE
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image className="w-40 mb-5 -mt-2" src="/mePic.jpeg" alt="Profile Picture" width={160} height={160} />
          </motion.div>

          <div className="text-center text-black/30 leading-5 font-semibold font-f1 text-sm max-w-xl py-4 px-6">
            I'm a passionate designer and developer dedicated to crafting
            impactful visuals that seamlessly blend creativity, innovation, and
            technical expertise. With a keen eye for detail and deep understanding
            of design principles, I strive to create engaging user experiences.
          </div>
          <div className="font-f2 absolute text-black/30 bottom-7">
            <h1>#2</h1>
          </div>
        </div>
      </div>
    </>
  );
}
