export const Pricing = () => {
  return (
    <section className="flex h-screen w-full flex-col bg-gradient-to-b from-fuchsia-900 to-rose-950 p-0 ">
      <h1 className="mt-8 text-center font-poppins text-6xl font-semibold text-white md:mt-16">
        Pricing
      </h1>
      <div className="container mx-auto px-4">
        <div className="mb-12 flex justify-center">
          <div className="max-w-xl text-center">
            <h2 className="mb-4 text-3xl font-bold leading-none md:text-[45px]">
              You&apos;re never been so close to her
            </h2>
          </div>
        </div>
        <div className="mb-6 flex justify-center text-center">
          <button className="px-3">Annual Plan</button>
          <div className="mx-2 inline-flex items-center">
            <div className="relative h-4 w-9 rounded-full border bg-white">
              <div className="absolute left-0.5 top-[1px] h-3 w-3 cursor-default rounded-full bg-gray-400"></div>
            </div>
          </div>
          <button className="px-3">Month-to-Month</button>
        </div>
        <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">
          <div className="mt-6 lg:max-w-md">
            <div className="h-full rounded-2xl bg-blue-50 p-4 shadow dark:bg-[#101D2C] dark:text-white lg:p-12">
              <h3 className="mb-2 text-3xl font-bold">Basic</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$20</span>
                <span className="ml-2 opacity-50">/month</span>
              </div>
              <p className="mb-6 opacity-50">
                More off this less hello salamander lied porpoise much over
                tightly circa horse taped.
              </p>
              <ul className="flex flex-col">
                <li className="mb-4">
                  <span className="fas fa-check mr-2 text-gray-600"></span>
                  <span className="opacity-50"> Build Links</span>
                </li>
                <li className="mb-3">
                  <span className="fas fa-check mr-2 text-gray-600"></span>
                  <span className="opacity-50">Over 66 complex</span>
                </li>
                <li className="mb-3">
                  <span className="fas fa-times mr-2 text-gray-600"></span>
                  <span className="opacity-50">24/7 Contact support</span>
                </li>
                <li className="mb-3">
                  <span className="fas fa-times mr-2 text-gray-600"></span>
                  <span className="opacity-50">Stream management</span>
                </li>
                <li>
                  <span className="fas fa-times mr-2 text-gray-600"></span>
                  <span className="opacity-50">6TB storage</span>
                </li>
              </ul>
              <button className="mt-6 w-full rounded-md bg-blue-600 bg-opacity-10 px-7 py-3 duration-300 hover:bg-blue-600 hover:text-white">
                Choose plan
              </button>
            </div>
          </div>
          <div className="mt-6 lg:max-w-md">
            <div className="h-full rounded-2xl bg-blue-600 p-4 text-white shadow lg:p-12">
              <h3 className="mb-2 text-3xl font-bold">Premium</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold">$399</span>
                <span className="ml-2 opacity-50">/month</span>
              </div>
              <p className="mb-6 opacity-50">
                It’s no secret that the digital industry is booming. From
                startups to brand companies.
              </p>
              <ul className="flex flex-col">
                <li className="mb-4">
                  <span className="fas fa-check mr-2"></span>
                  <span className="opacity-50">Container Scanning</span>
                </li>
                <li className="mb-3">
                  <span className="fas fa-check mr-2"></span>
                  <span className="opacity-50">Over 66 complex</span>
                </li>
                <li className="mb-3">
                  <span className="fas fa-check mr-2"></span>
                  <span className="opacity-50">24/7 Contact support</span>
                </li>
                <li className="mb-3">
                  <span className="fas fa-check mr-2"></span>
                  <span className="opacity-50">Stream management</span>
                </li>
                <li>
                  <span className="fas fa-check mr-2"></span>
                  <span className="opacity-50">6TB storage</span>
                </li>
              </ul>
              <button className="mt-6 w-full rounded-md bg-white px-7 py-3 text-black duration-300 hover:bg-opacity-90">
                Choose plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
