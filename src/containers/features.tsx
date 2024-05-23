import { BentoGridThirdDemo } from "~/components/custom/bentoGridFeatures";

export const Features = () => {
  return (
    <section
      id="features"
      className="min-h-fit w-full space-y-8 bg-gradient-to-b from-fuchsia-900 to-rose-950 px-8 py-24 text-white sm:py-32 md:px-14"
    >
      <div className="mx-auto mb-12 mt-24 flex max-w-3xl justify-center text-center">
        <div>
          <h2 className="p-6 font-inter text-7xl font-bold tracking-tighter">
            How It Works
          </h2>
          <p className="font-base mb-6 text-left text-lg opacity-80">
            Under saying our appear Second their heaven created shall darkness
            him great kind open creature Deep open had i above.
          </p>
        </div>
      </div>

      <BentoGridThirdDemo />
    </section>
  );
};
