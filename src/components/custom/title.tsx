export const Title = () => {
  return (
    <div className="flex w-fit flex-col max-w-[410px]">
      <div className="flex h-fit w-fit flex-col">
        <div className="relative max-h-[210px] w-fit">
          <h1 className="absolute left-[-12px] top-[8px] m-0 whitespace-nowrap p-0 font-bebas-neue text-[26vw] xl:text-[8vw] font-normal leading-none text-transparent text-white md:text-[12vw]">
            Fake it{" "}
          </h1>
          <h1
            className="text-stroke z-10 m-0 w-fit whitespace-nowrap stroke-white p-0 font-bebas-neue text-[26vw] xl:text-[8vw] font-normal leading-none text-transparent md:text-[12vw]"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, white 60%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, white 60%, transparent 100%)",
            }}
          >
            Fake it{" "}
          </h1>
        </div>
      </div>
      <div className="flex flex-row justify-end leading-none md:mt-[-15px]">
        <h2 className="text-stroke stroke-white p-0 font-bebas-neue text-5xl font-normal leading-none text-transparent">
          &apos;til you bank it!
        </h2>
      </div>
    </div>
  );
};
