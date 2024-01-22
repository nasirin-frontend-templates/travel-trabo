import CTA from "@/components/organisms/cta";
import Header from "@/components/organisms/header";
import HowItWork from "@/components/organisms/how-it-work";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <CTA />
      <HowItWork />
    </main>
  );
}
