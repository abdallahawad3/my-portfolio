import Header from "@/components/header";
import { HeroHighlightDemo } from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <section className="h-screen">
        <HeroHighlightDemo />
      </section>
      <section className="container -mt-10">
        <Projects />
      </section>
    </>
  );
}
