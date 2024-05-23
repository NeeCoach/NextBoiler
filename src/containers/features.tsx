import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import image from "public/assets/growth.png";
import image3 from "public/assets/reflecting.png";
import image4 from "public/assets/looking-ahead.png";
import { type StaticImageData } from "next/image";
import Image from "next/image";
import { BentoGrid } from "~/components/ui/bentoGrid";
import { BentoGridThirdDemo } from "~/components/custom/bentoGridFeatures";

interface FeatureProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image4,
  },
  {
    title: "Intuitive user interface",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image3,
  },
  {
    title: "AI-Powered insights",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
    image: image,
  },
];

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

      {/* {features.map(({ title, description, image }: FeatureProps) => (
          <Card
            className="border border-white bg-[#ead9e624] backdrop-blur-[25px]"
            key={title}
          >
            <CardHeader>
              <CardTitle className="text-secondary">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-[#eee2e999]">
              {description}
            </CardContent>

            <CardFooter>
              <Image
                src={image}
                alt="About feature"
                className="mx-auto"
                width={200}
                height={200}
              />
            </CardFooter>
          </Card>
        ))} */}
      <BentoGridThirdDemo />
    </section>
  );
};
