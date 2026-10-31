import { useState, memo, useCallback } from "react";
import SectionHeading from "../ui/SectionHeading.jsx";
import ProjectCarousel from "../ui/ProjectCarousel.jsx";
import ProjectAccordionDeck from "../ui/ProjectAccordionDeck.jsx";
import ProjectModal from "../ui/ProjectModal.jsx";
import { allProjects } from "../../data/portfolioData.js";

const SelectedWork = memo(function SelectedWork() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleSelectProjectById = useCallback((id) => {
    const found = allProjects.find((p) => p.id === id);
    if (found) setSelectedProject(found);
  }, []);

  return (
    <section id="projects" className="py-10 sm:py-14 px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
      <div className="max-w-[1440px] mx-auto space-y-8 text-center">
        
        {/* Section Heading */}
        <SectionHeading
          badge="Projects"
          title="Featured"
          highlight="Projects"
          subtitle="Key web applications, full-stack systems, and open-source tools I've built."
        />

        {/* DESKTOP ONLY: Full-Width 9-Project Expanding Accordion Deck (Carousel removed on desktop) */}
        <div className="hidden lg:block w-full">
          <ProjectAccordionDeck 
            projects={allProjects} 
            onSelectProject={handleSelectProjectById} 
          />
        </div>

        {/* MOBILE & TABLET ONLY: Touch-Friendly Carousel with Filter Pills */}
        <div className="block lg:hidden w-full">
          <ProjectCarousel 
            projects={allProjects}
            selectedProject={selectedProject}
            onSelectProject={setSelectedProject}
          />
        </div>

        {/* Shared Specification Modal */}
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />

      </div>
    </section>
  );
});

export default SelectedWork;
