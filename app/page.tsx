import AboutComponent from "@/_components/pages/home/about-component";
import HeroComponent from "@/_components/pages/home/hero-component";
import DividerLine from "@/_lib/utils/divider-line";

export default function Home() {
  return (
    <div className="max-w-[1360px] space-y-10 mx-auto">
      <HeroComponent />
      <DividerLine containerClasses="mx-5 desktop:hidden" />
      <AboutComponent />
    </div>
  );
}
