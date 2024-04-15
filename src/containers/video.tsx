export const VideoPlayer = () => {
  return (
    <section className="flex h-screen w-full flex-col bg-gradient-to-b from-rose-950 to-fuchsia-900 p-0">
      <h1 className="mt-8 text-center font-poppins text-6xl font-semibold text-white md:mt-16">
        One video worth thousands words
      </h1>
      <div className="mt-8 flex flex-col items-center justify-center md:mt-16">
        {/* Video player */}
        <div className="w-4/5">
          <video
            className="w-full rounded-xl shadow-2xl"
            controls
            src="https://www.youtube.com/watch?v=mH5fXUZyfpE"
          ></video>
        </div>
      </div>
    </section>
  );
};
