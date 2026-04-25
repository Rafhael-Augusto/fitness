import { HowItWorks } from "@/components/how-it-works";
import { Problem } from "@/components/problem";
import { Cards } from "@/components/cards";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Hero />

      <Problem />

      <Cards />

      <HowItWorks />
    </>
  );
}
