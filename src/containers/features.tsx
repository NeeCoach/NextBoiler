"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  type IconDefinition,
  faRandom,
  faVideo,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

interface Feature {
  icon: IconDefinition;
  title: string;
  desc: string;
  isActive?: boolean;
  onMouseEnter?: () => void;
}

const features = [
  {
    icon: faRandom,
    title: "Secure your information.",
    desc: "Third abundantly us after cattle won't is land heaven us whales grass bearing seasons fruitful own beast deep fruit him.",
  },
  {
    icon: faVideo,
    title: "Pick the type of banking.",
    desc: "Man our from light they're cattle upon created female. You first land evening beast won't had bring first void meat.",
  },
  {
    icon: faCoins,
    title: "Get your documentation",
    desc: "Banks likewise put away cash to develop their hold of cash. What they do is directed by laws. Those laws differ in various nations.",
  },
];

const FeatureItem = ({
  icon,
  title,
  desc,
  isActive,
  onMouseEnter,
}: Feature) => (
  <div
    className={`feature relative z-10 mb-4 flex rounded-md ${isActive ? "opacity-100" : "opacity-30"} bg-white p-3 shadow-xl transition duration-100 md:p-6 lg:mb-6 xl:p-12`}
    onMouseEnter={onMouseEnter}
  >
    <div className="mb-6 mr-6 flex items-center justify-center rounded-full text-[42px] xl:mr-12">
      <FontAwesomeIcon icon={icon} color="text-[#930a71]" />
    </div>
    <div>
      <h4 className="mb-4 font-poppins text-2xl font-medium">{title}</h4>
      <p className="text-pretty font-inter opacity-60">{desc}</p>
    </div>
  </div>
);

export const Features = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const backgroundImageUrls = [
    "https://cdn.easyfrontend.com/pictures/sign-in-up/sign-in-up-4.png",
    "https://templebarbcn.com/wp-content/uploads/2022/08/20-TempleMyBar_by_WitekPhotography_RECORTADA.jpg",
    "https://www.1001cocktails.com/wp-content/uploads/1001cocktails/2023/03/137002_origin-768x512.jpg",
  ];

  return (
    <section
      id="how-it-works"
      className="flex min-h-fit w-full flex-col bg-gradient-to-b from-fuchsia-900 to-rose-950 py-14 text-white md:py-24"
    >
      <div className="mx-auto mb-12 flex max-w-3xl justify-center text-center">
        <div>
          <h2 className="text-stroke stroke-white p-6 font-bebas-neue text-7xl leading-none text-transparent md:text-nowrap">
            How It Works
          </h2>
          <p className="font-regular mb-6 text-lg opacity-80">
            Under saying our appear Second their heaven created shall darkness
            him great kind open creature Deep open had i above.
          </p>
        </div>
      </div>
      <div className="py-12 md:px-6">
        <div className="container mx-auto xl:px-32">
          <div className="grid items-center lg:grid-cols-2">
            <div className="mb-12 md:mt-12 lg:mb-0 lg:mt-0">
              <div className="relative z-[1] block rounded-lg border border-white bg-[#ead9e624] px-6 py-12 backdrop-blur-[25px] md:px-12 lg:-mr-14">
                <h2 className="mb-6 text-3xl font-bold">Why is it so great?</h2>
                <p className="mb-8 text-[#eee2e999] ">
                  Nunc tincidunt vulputate elit. Mauris varius purus malesuada
                  neque iaculis malesuada. Aenean gravida magna orci, non
                  efficitur est porta id. Donec magna diam.
                </p>

                <div className="grid gap-x-6 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Support 24/7
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Analytics
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Components
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Updates
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Reports
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Mobile
                    </p>
                  </div>
                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Modules
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Blocks
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="mr-3 h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      Templates
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="z-50 md:mb-12 lg:mb-0">
              <Image src="/phone.png" width={800} height={800} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// <div className="container mx-auto mt-8 px-28">
//   <div className="mx-auto mb-12 flex max-w-3xl justify-center text-center">
//     <div>
//       <h2 className="text-stroke stroke-white p-6 font-bebas-neue text-7xl leading-none text-transparent md:text-nowrap">
//         How It Works
//       </h2>
//       <p className="font-regular mb-6 text-lg opacity-80">
//         Under saying our appear Second their heaven created shall darkness
//         him great kind open creature Deep open had i above.
//       </p>
//     </div>
//   </div>
//   <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 md:pt-12">
//     <div className="order-2 col-span-2 text-[#6f2066] lg:order-1 lg:col-span-1">
//       <div className="lg:mr-6 xl:mr-12">
//         {features.map((feature, i) => (
//           <FeatureItem
//             {...feature}
//             key={i}
//             isActive={i === activeIndex}
//             onMouseEnter={() => setActiveIndex(i)}
//           />
//         ))}
//       </div>
//     </div>
//     <div className="z-10 order-1 col-span-2 lg:order-2 lg:col-span-1">
//       <div className="relative z-10 h-full">
//         <div className="absolute -right-12 -top-11 bottom-12 left-11 -z-10 rounded-[200px] bg-white opacity-50 lg:rounded-full lg:rounded-tr-none" />
//         <div
//           className="float-right h-full min-h-[350px] w-full rounded-2xl bg-cover bg-center bg-no-repeat shadow-xl"
//           style={{
//             backgroundImage: `url(${backgroundImageUrls[activeIndex]})`,
//           }}
//         ></div>
//       </div>
//     </div>
//   </div>
// </div>
