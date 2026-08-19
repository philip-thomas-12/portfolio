import Hero from "@/components/Hero";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import FeaturedProjects from "@/components/FeaturedProjects";
import GithubArchive from "@/components/GithubArchive";
import Skills from "@/components/Skills";
import Certifications from "@/components/Certifications";
import Currently from "@/components/Currently";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <ExperienceTimeline />
      <FeaturedProjects />
      <GithubArchive />
      <Skills />
      <Certifications />
      <Currently />
      <Contact />
    </>
  );
}
