"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faCannabis,
  faRandom,
} from "@fortawesome/free-solid-svg-icons";

const features = [
  {
    icon: faCannabis,
    title: "Secure your information.",
    desc: "Third abundantly us after cattle won't is land heaven us whales grass bearing seasons fruitful own beast deep fruit him.",
  },
  {
    icon: faRandom,
    title: "Pick the type of banking.",
    desc: "Man our from light they're cattle upon created female. You first land evening beast won't had bring first void meat.",
  },
  {
    icon: faCamera,
    title: "Get your documentation",
    desc: "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws differ in various nations.",
  },
];

const FeatureItem = ({ icon, title, desc, isActive, onMouseEnter }) => (
  <div
    className={`relative mb-4 flex rounded-xl ${isActive ? "bg-white" : "bg-transparent"} p-3 opacity-30 shadow-xl transition duration-300 hover:bg-white hover:text-[#6f2066] hover:opacity-90 dark:bg-slate-800 md:p-6 lg:mb-6 xl:p-12`}
    onMouseEnter={onMouseEnter}
  >
    <div className="mb-6 mr-6 rounded-full text-[42px] text-red-600 xl:mr-12">
      <FontAwesomeIcon icon={icon} color="white" />
    </div>
    <div>
      <h4 className="mb-4 font-bebas-neue text-2xl font-medium">{title}</h4>
      <p className="opacity-60">{desc}</p>
    </div>
  </div>
);

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const backgroundImageUrls = [
    "https://cdn.easyfrontend.com/pictures/sign-in-up/sign-in-up-4.png",
    "https://templebarbcn.com/wp-content/uploads/2022/08/20-TempleMyBar_by_WitekPhotography_RECORTADA.jpg",
    "https://templebarbcn.com/wp-content/uploads/2022/08/20-TempleMyBar_by_WitekPhotography_RECORTADA.jpg",
  ];

  return (
    <section
      id="how-it-works"
      className="flex min-h-fit w-full flex-col bg-gradient-to-b from-fuchsia-900 to-rose-950 py-14 font-poppins text-white md:py-24"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-12 flex max-w-3xl justify-center text-center">
          <div>
            <h2 className="mb-6 text-2xl font-bold leading-none md:text-[45px]">
              How It Works
            </h2>
            <p className="mb-6 text-lg">
              Under saying our appear Second their heaven created shall darkness
              him great kind open creature Deep open had i above.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:pt-12">
          <div className="order-2 col-span-2 text-black lg:order-1 lg:col-span-1">
            <div className="lg:mr-6 xl:mr-12">
              {features.map((feature, i) => (
                <FeatureItem
                  {...feature}
                  key={i}
                  isActive={i === activeIndex}
                  onMouseEnter={() => setActiveIndex(i)}
                />
              ))}
            </div>
          </div>
          <div className="order-1 col-span-2 lg:order-2 lg:col-span-1">
            <div className="relative z-10 h-full">
              <div className="absolute -right-12 -top-11 bottom-12 left-11 -z-10 rounded-[200px] bg-white opacity-50 dark:bg-slate-700 lg:rounded-full lg:rounded-tr-none" />
              <div
                className="float-right h-full min-h-[350px] w-full rounded-2xl bg-cover bg-center bg-no-repeat shadow-xl"
                style={{
                  backgroundImage: `url(${backgroundImageUrls[activeIndex]})`,
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
