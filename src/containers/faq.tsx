import { Send } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { Button } from "~/components/ui/button";

export const FAQ = () => (
  <section
    id="faq"
    className="flex min-h-fit w-full flex-col bg-gradient-to-b from-rose-950 to-fuchsia-900 py-14 text-white max-md:px-4 md:px-14 md:py-24"
  >
    <div className="container mx-auto mt-8 px-28">
      <div className="mx-auto mb-12 flex max-w-3xl justify-center text-center">
        <h2 className="p-6 font-inter text-7xl font-bold tracking-tighter">
          F.A.Q
        </h2>
      </div>
    </div>
    <div className="z-40 mb-20 rounded-md border border-white bg-[#ead9e624] py-4 backdrop-blur-[25px] max-md:px-4 md:px-8 md:py-14">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h4 className="font-regular max-w-xl text-left text-3xl tracking-tighter md:text-5xl">
                This is the start of something new
              </h4>
              <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-[#eee2e999] lg:max-w-lg">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </p>
            </div>
            <div className="">
              <Button
                variant="outline"
                className="gap-2 border border-secondary bg-[#ead9e624] text-secondary hover:text-primary"
              >
                Contact us
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {Array.from({ length: 8 }).map((_, index) => (
            <AccordionItem
              key={index}
              value={"index-" + index}
              className="border-[#ead9e624]"
            >
              <AccordionTrigger>
                This is the start of something new
              </AccordionTrigger>
              <AccordionContent className="text-[#eee2e999]">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster
                than ever.
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
