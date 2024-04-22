import { Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "~/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";

export const Pricing = () => (
  <section
    id="pricing"
    className="flex h-full w-full flex-col bg-gradient-to-b from-fuchsia-900 to-rose-950 py-14 md:py-20"
  >
    <div className="container mx-auto px-28">
      <div className="mx-auto flex max-w-3xl justify-center text-center">
        <div>
          <h2 className="text-stroke stroke-white p-6 font-bebas-neue text-7xl leading-none text-transparent md:text-nowrap">
            Pricing
          </h2>
          <p className="font-regular text-lg opacity-80">
            Under saying our appear Second their heaven created shall darkness
            him great kind open creature Deep open had i above.
          </p>
        </div>
      </div>
      <div className="h-min-fit flex w-full flex-col items-center justify-center gap-16 pt-14 text-left md:flex-row">
        <Card className="flex w-96 flex-col rounded-md border border-white bg-[#ead9e624] backdrop-blur-[25px] antialiased hover:subpixel-antialiased duration-100 ease-linear hover:scale-105 hover:cursor-pointer hover:shadow-2xl ">
          <CardHeader>
            <CardTitle>
              <span className="flex flex-row items-center gap-4 font-normal text-secondary">
                Startup
              </span>
            </CardTitle>
            <CardDescription className="text-[#eee2e999]">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-start gap-8">
              <p className="flex flex-row  items-center gap-2 text-xl">
                <span className="text-4xl text-secondary">$40</span>
                <span className="text-base text-[#eee2e999]"> / month</span>
              </p>
              <div className="flex flex-col justify-start gap-4">
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="gap-4 border border-secondary bg-[#ead9e624] text-base text-secondary hover:text-primary"
              >
                Sign up today <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="flex w-96 flex-col rounded-md border border-white bg-[#ead9e624] backdrop-blur-[25px] antialiased hover:subpixel-antialiased duration-100 ease-linear hover:scale-105 hover:cursor-pointer hover:shadow-2xl ">
          <CardHeader>
            <CardTitle>
              <span className="flex flex-row items-center gap-4 font-normal text-secondary">
                Growth
              </span>
            </CardTitle>
            <CardDescription className="text-[#eee2e999]">
              Our goal is to streamline SMB trade, making it easier and faster
              than ever for everyone and everywhere.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col justify-start gap-8">
              <p className="flex flex-row  items-center gap-2 text-xl">
                <span className="text-4xl text-secondary">$40</span>
                <span className="text-base text-[#eee2e999]"> / month</span>
              </p>
              <div className="flex flex-col justify-start gap-4">
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <Check className="mt-2 h-4 w-4 text-secondary" />
                  <div className="flex flex-col text-secondary">
                    <p>Fast and reliable</p>
                    <p className="text-sm text-[#eee2e999]">
                      We&apos;ve made it fast and reliable.
                    </p>
                  </div>
                </div>
              </div>
              <Button
                variant="outline"
                className="gap-4 border border-secondary bg-[#ead9e624] text-base text-secondary hover:text-primary"
              >
                Sign up today <MoveRight className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);
