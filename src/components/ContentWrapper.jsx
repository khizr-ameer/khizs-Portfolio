import MainContent from "./MainContent";
import AboutContent from "./AboutContent";
import SkillsContent from "./SkillsContent";
import ProjectsContent from "./ProjectsContent";
import ContactContent from "./ContactContent";

const ContentWrapper = () => {
  return (
    <main className="w-[90%] md:w-[80%] lg:w-[75%] m-auto overflow-x-hidden">
      <MainContent />
      <AboutContent />
      <SkillsContent />
      <ProjectsContent />
      <ContactContent />
    </main>
  );
};

export default ContentWrapper;
