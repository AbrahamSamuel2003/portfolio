import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCarousel from "../ui/ProjectCarousel.jsx";
import { allProjects } from "../../data/portfolioData.js";

export default function SelectedWork() {
  return (
    <section id="projects" className="py-10 sm:py-14 px-6 relative z-10">
      <div className="max-w-6xl mx-auto space-y-8 text-center">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Projects"
          title="Featured"
          highlight="Projects"
          subtitle="Key web applications, full-stack systems, and open-source tools I've built."
        />

        {/* Projects Horizontal Showcase */}
        <ProjectCarousel projects={allProjects} />

      </div>
    </section>
  );
}
