import { HeroSection } from "@/components/sections/HeroSection";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { ProjectGallery } from "@/components/sections/ProjectGallery";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceCards />
      <ProjectGallery />
    </>
  );
}
