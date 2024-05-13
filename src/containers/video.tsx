export const VideoPlayer = () => {
  return (
    <section
      id="how-it-works"
      className="flex min-h-fit w-full flex-col bg-gradient-to-b from-rose-950 to-fuchsia-900 py-14 text-white md:py-24"
    >
      <div className="container mx-auto mt-8 px-28">
        <div className="mx-auto mb-12 flex max-w-3xl justify-center text-center">
          <div>
            <h2 className="p-6 font-inter text-7xl font-bold tracking-tighter">
              One video worth a thousand words
            </h2>
            <p className="mb-6 text-left text-base opacity-80">
              Under saying our appear Second their heaven created shall darkness
              him great kind open creature Deep open had i above.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col items-center justify-center md:mt-16">
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
