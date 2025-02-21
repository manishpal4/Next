import React from "react";
import Corrosoul from "@/components/Corrosoul";


const page = () => {
  return (
    <>
      <div className="bg-zinc-200 pt-16 ">
        <div className="  pb-10 overflow-hidden  bg-zinc-200 lg:flex flex-col items-center sm:justify-center rounded-lg">
          <div>
            <div className="mx-5">
              <h1 className="text-black font-bold text-5xl text-center font-f1">
                Works
              </h1>
              <p className="text-black/30 mt-3 mb-7 font-bold flex font-f2 text-lg justify-center">
                Click on projects to see repositories.
              </p>
              <div className=" flex-cols bg-white rounded-lg  px-3 py-6 mx-4 ">
                <a
                  href="https://github.com/manishpal4/Ai_chatbot"
                  target="_blank"
                >
                  <div className=" h-full">
                    <h1 className="text-5xl font-f1 text-black pb-1 font-heading">
                      01
                    </h1>
                    <hr />
                  </div>
                  <div>
                    <h1 className="text-black font-f1 font-heading text-3xl py-4">
                      AI ChatBot.
                    </h1>
                    <p className="text-black/30">
                      An openai api integrated awnser bot which give awnser with
                      high correctively like chat GPT.
                    </p>
                  </div>
                </a>
              </div>

              <div className="flex-cols bg-white rounded-lg  px-3 py-6 mx-4 mt-5 ">
                <a
                  href="https://github.com/manishpal4/imageEditing"
                  target="_blank"
                >
                  <div className=" h-full">
                    <h1 className="text-5xl text-black font-f1  pb-1 font-heading">
                      02
                    </h1>
                    <hr />
                  </div>
                  <div>
                    <h1 className="text-black font-f1 text-3xl font-heading py-4">
                      Simple Photo Manipulation app.
                    </h1>
                    <p className="text-black/30">
                      A simple photo manipulation app which allow us to
                      manipulate photo with aspect like border radius, hue and
                      saturation border color and radius etc.
                    </p>
                  </div>
                </a>
              </div>

              <div className=" flex-cols bg-white rounded-lg  px-3 py-6 mx-4 mt-5">
                <a
                  href="https://github.com/manishpal4/Bubble-Game"
                  target="_blank"
                >
                  <div className=" h-full">
                    <h1 className=" font-f1 text-5xl text-black pb-1 font-heading">
                      03
                    </h1>
                    <hr />
                  </div>
                  <div>
                    <h1 className="text-black font-f1 text-3xl py-4 font-heading">
                      Bubble Game.
                    </h1>
                    <p className="text-black/30">
                      A bubble game in which a number shows and you have to
                      click on bellow numbers to score point. In this project
                      pure javaScript is used for interaction.
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <Corrosoul/>

      <div >

      <section className="mx-7 pt-20 overflow-hidden p-5 lg:flex flex-col items-center sm:justify-center rounded-lg">
        <h1 className="text-black text-5xl font-f1 text-center font-heading">Figma</h1>
        <p className="text-black m-4 font-lg font-bold  font-f2 flex justify-center mb-7">
        Some experiments with Figma and Jitter
        </p>
        

        {/* Main video */}
        <video
          className="lg:h-96 mb-5"
          autoPlay
          loop
          muted
          src="/a.mp4"
          aria-label="Figma Experiment"
        ></video>

        {/* Container for smaller videos */}
        <div className="lg:flex gap-5 mt-16 flex-wrap justify-center">
          <div className="flex justify-center gap-5 mt-9">
            <video
              className="h-80"
              autoPlay
              loop
              muted
              src="/ab.mp4"
              aria-label="Figma Design A"
            ></video>
            <video
              className="h-80"
              autoPlay
              loop
              muted
              src="/ac.mp4"
              aria-label="Figma Design B"
            ></video>
          </div>

          <div className="flex justify-center gap-5 mt-9">
            <video
              className="h-80"
              autoPlay
              loop
              muted
              src="/ma.mp4"
              aria-label="Figma Design C"
            ></video>
            <video
              className="h-80"
              autoPlay
              loop
              muted
              src="/mb.mp4"
              aria-label="Figma Design D"
            ></video>
          </div>
        </div>
      </section>


      <div className="pt-32 flex justify-center">
        <div className="mx-7 overflow-hidden p-5 bg-white/5 lg:flex flex-col items-center sm:justify-center rounded-lg">
          <h1 className="text-black font-f1 text-5xl text-center font-heading">
            Blender Render
          </h1>
          <p className="text-black/30 m-4 font-bold font-f2 flex justify-center">
            Click on video to watch full version.
          </p>

          {/* Videos Container */}
          <div className="flex flex-wrap justify-center lg:flex-nowrap lg:gap-5">
            {/* First Video */}
            <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
              <a
                href="https://www.instagram.com/mann_eei/reel/DAdwP8_S9Re/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  src="/1a.mp4"
                ></video>
              </a>
            </div>

            {/* Second Video */}
            <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
              <a
                href="https://www.instagram.com/mann_eei/reel/Cm16oqohpge/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  src="/2a.mp4"
                ></video>
              </a>
            </div>

            {/* Third Video */}
            <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
              <a
                href="https://www.instagram.com/mann_eei/reel/Chyr_w8ALs4/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  src="/3a.mp4"
                ></video>
              </a>
            </div>

            {/* Fourth Video */}
            <div className="border-4 border-white/30 rounded-lg overflow-hidden w-full sm:w-1/2 lg:w-1/4 mb-5 lg:mb-0">
              <a
                href="https://www.instagram.com/mann_eei/reel/Ci_8IkrJZQ8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                  src="/4a.mp4"
                ></video>
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
      </div>
    </>
  );
};

export default page;
