export const Title = () => {
  return (
    <div className="flex w-fit flex-col">
      <div className="flex h-fit w-fit flex-col">
        <div className="relative max-h-[200px] w-fit">
          <h1 className="font-bebas-neue absolute left-[-12px] top-[8px] m-0 whitespace-nowrap p-0 text-[14rem] font-normal leading-none text-transparent text-white">
            Fake it{" "}
          </h1>
          <h1
            className="font-bebas-neue text-stroke z-10 m-0 w-fit whitespace-nowrap stroke-white p-0 text-[14rem] font-normal leading-none text-transparent"
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
      <div className="flex flex-row justify-end leading-none">
        <h2 className="font-bebas-neue text-stroke stroke-white p-0 text-5xl font-normal leading-none text-transparent">
          &apos;til you bank it!
        </h2>
      </div>
    </div>
  );
};
