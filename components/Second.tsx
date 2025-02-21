import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import Star from "@/components/Star";

const Second = () => {
  return (
    <>
      <div className="flex font-semibold flex-col pt-20 bg-zinc-200 p-9 pl-14">
        <div className="w-full flex flex-col landscape:flex-row">
          <div>
            <div className="text-3xl font-f1 font-medium flex landscape:w-3/4 landscape:text-5xl mb-4">
              <p>I promote fresh and creative ideas and bring them to life.</p>
              <span className="min-w-16 landscape:w-2/5 w-auto"></span>
            </div>

            <div className="text-3xl mt-3 text-left font-f1 font-medium landscape:w-3/4 landscape:text-5xl flex">
              <span className="min-w-16 landscape:w-2/5 w-auto"></span>
              <p className="w-full">
                With my skills, I deliver quality products from start to finish.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center landscape:items-start landscape:justify-start mt-16">
            <Star src="/star.png" className="w-28 text-center md:w-32" />
          </div>
        </div>
      </div>

      <div className="bg-zinc-200 font-f1 text-6xl pt-16">
        <div className="h-20 font-f2">
          <Marquee className="h-24">
            What I Do ↓ What I Do ↓ What I Do ↓ What I Do ↓ What I Do ↓ What I
            Do ↓
          </Marquee>
        </div>

        <div className="pt-10 text-4xl text-center landscape:text-right landscape:text-6xl flex flex-col gap-6">
          <hr className="border-black/30 border" />

          {/** Section: UI/UX Designing **/}
          <motion.div
            initial={{ backgroundColor: "#e4e4e7" }}
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hover:bg-black my-5 px-14 py-3 transition-all"
          >
            UI/UX Designing
            <div className="text-white font-f2 flex justify-center py-2 mt-2 gap-3 text-lg landscape:justify-end">
              <span className="bg-black rounded-full px-3 py-1">Figma</span>
              <span className="bg-black rounded-full px-3 py-1">Framer</span>
              <span className="bg-black rounded-full px-3 py-1">Adobe XD</span>
            </div>
          </motion.div>
          <hr className="border-black/30 border" />

          {/** Section: Graphic Designing **/}
          <motion.div
            initial={{ backgroundColor: "#e4e4e7" }}
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hover:bg-black my-5 px-14 py-3 transition-all"
          >
            Graphic Designing
            <div className="text-white font-f2 flex justify-center py-2 mt-2 gap-3 text-lg landscape:justify-end">
              <span className="bg-black rounded-full px-3 py-1">CorelDRAW</span>
              <span className="bg-black rounded-full px-3 py-1">Photoshop</span>
            </div>
          </motion.div>
          <hr className="border-black/30 border" />

          {/** Section: 3D Animation **/}
          <motion.div
            initial={{ backgroundColor: "#e4e4e7" }}
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hover:bg-black my-5 px-14 py-3 transition-all"
          >
            3D Animation
            <div className="text-white font-f2 flex justify-center py-2 mt-2 gap-3 text-lg landscape:justify-end">
              <span className="bg-black rounded-full px-3 py-1">Blender</span>
              <span className="bg-black rounded-full px-3 py-1">Spline</span>
            </div>
          </motion.div>
          <hr className="border-black/30 border" />

          {/** Section: Front-End Development **/}
          <motion.div
            initial={{ backgroundColor: "#e4e4e7" }}
            whileHover={{ backgroundColor: "#000000", color: "#ffffff" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="hover:bg-black my-5 px-14 py-3 transition-all"
          >
            Front-End Development
            <div className="text-white font-f2 flex justify-center py-2 mt-2 gap-3 text-lg landscape:justify-end">
              <span className="bg-black rounded-full px-3 py-1">React</span>
              <span className="bg-black rounded-full px-3 py-1">
                Tailwind CSS
              </span>
              <span className="bg-black rounded-full px-3 py-1">WebFlow</span>
            </div>
          </motion.div>
          <hr className="border-black/30 border pb-10" />
        </div>
      </div>
    </>
  );
};

export default Second;
