import Header from "@/components/header";
import { HeroHighlightDemo } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-screen">
        <HeroHighlightDemo />
      </div>
    </>
  );
}
