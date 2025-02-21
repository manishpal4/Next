import React from "react";

const Experience = () => {
  return (
    <div className="flex justify-center pt-16 landscape:p-24 pb-10 bg-zinc-200">
      <div className="mx-5 overflow-hidden flex flex-col items-center sm:justify-center rounded-lg">
        <h1 className="text-black font-bold text-5xl text-center font-f1">
          Experience
        </h1>
        <p className="text-black/30 mt-3 mb-7 font-bold flex font-f2 text-lg justify-center">
          The Journey So far.
        </p>
        <div className="flex flex-col w-full rounded bg-white px-3 py-6 mx-4">
          <div className="h-full">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-4xl text-black font-f1">
                  KaulBotaniQ Pvt. Ltd.
                </h1>
              </div>
              <div>
                <p className="text-black/30">Shahabad, Haryana</p>
              </div>
            </div>
            <hr />
          </div>
          <h1 className="text-black font-f1 text-3xl py-3 lg:mt-3">
            Packaging Designer
          </h1>
          <p className="text-black py-1 font-f1">
            On-Site, Full-Time
            <span className="text-black/30 pl-3">2020-21</span>
          </p>
          <p className="text-black/30">
            I was working as Packaging Designer and created and approved around
            100 designs in one year. Also responsible for social media post
            designs and product mockup for E-Commerce.
          </p>
        </div>

        <div className="flex flex-col w-full rounded bg-white px-3 py-5 mx-3 mt-10">
          <div className="h-full">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-4xl text-black font-f1">
                  NabHealth Care
                </h1>
              </div>
              <div>
                <p className="text-black/30">Ahmedabad, Gujarat</p>
              </div>
            </div>
            <hr />
          </div>
          <h1 className="text-black font-f1 text-3xl py-3 lg:mt-3">
            Packaging Designer
          </h1>
          <p className="text-black py-1 font-f1">Remote, Full-Time</p>
          <p className="text-black/30">
            I was working as Packaging Designer and Social Media post designer.
          </p>
        </div>

        <div className="flex flex-col w-full bg-white rounded px-3 py-5 mt-10 mx-3">
          <div className="h-full">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-4xl text-black font-f1">
                  Krishna Creations Pvt. Ltd.
                </h1>
              </div>
              <div>
                <p className="text-black/30">Barwala, Haryana</p>
              </div>
            </div>
            <hr />
          </div>
          <h1 className="text-black font-f1 text-3xl py-3 lg:mt-3">
            Designer
          </h1>
          <p className="text-black py-1 font-f1">
            On-Site, Part-Time
            <span className="text-black/30 pl-3">2022-24</span>
          </p>
          <p className="text-black/30">
            Designated as designer for illustrations and printing for physical
            products.
          </p>
        </div>

        <div className="mt-10 flex flex-col w-full bg-white rounded px-3 py-5 mx-3">
          <div className="h-full">
            <div className="flex items-end justify-between">
              <div>
                <h1 className="text-4xl text-black font-f1">
                  Tips Computer Institute
                </h1>
              </div>
              <div>
                <p className="text-black/30">Barwala, Haryana</p>
              </div>
            </div>
            <hr />
          </div>
          <h1 className="text-black font-f1 text-3xl py-3 lg:mt-3">
            Teacher (Design)
          </h1>
          <p className="text-black py-1 font-f1">
            On-Site, Part-Time
            <span className="text-black/30 pl-3">2022-24</span>
          </p>
          <p className="text-black/30">
            I was teaching designs using the tool &quot;CorelDRAW&quot;.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
