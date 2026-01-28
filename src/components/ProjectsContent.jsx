import React, { useState } from "react";
import ProjectModal from "./ProjectModal";
import IntersectionAnim from "./IntersectionAnim";
import NumHeading from "./NumHeading";
import OutlinedButton from "./OutlinedButton";
import { projects } from "../consts";

const ProjectsContent = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);

  const onProjectClicked = (project) => {
    setSelectedProject(project);
  };

  const handleCategoryClick = (index) => {
    setActiveCategory(activeCategory === index ? null : index);
  };

  return (
    <div id="projects" className="min-h-screen flex flex-col justify-center py-8 px-4">
      {selectedProject && (
        <ProjectModal
          setIsModalOpen={() => setSelectedProject(null)}
          project={selectedProject}
        />
      )}

      <div className="max-w-6xl mx-auto w-full">
        <IntersectionAnim index={0} delay={0.2} type="transLeft">
          <NumHeading number={3} content="My Projects" />
        </IntersectionAnim>

        {/* Category Tabs */}
        <IntersectionAnim index={1} delay={0.3} type="transRight">
          <div className="flex flex-wrap justify-center gap-4 mb-8 mt-6">
            {projects.map((category, index) => (
              <div key={index} onClick={() => handleCategoryClick(index)}>
                <OutlinedButton 
                  text={category.name}
                  isActive={activeCategory === index}
                />
              </div>
            ))}
          </div>
        </IntersectionAnim>

        {/* Projects Grid */}
        {activeCategory !== null && (
          <IntersectionAnim index={2} delay={0.1} type="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects[activeCategory].projects.map((project, index) => (
                <div
                  key={index}
                  onClick={() => onProjectClicked(project)}
                  className="border rounded-xl border-slate-400 dark:border-slate-700 bg-sky-400/10 hover:bg-sky-400/20 overflow-hidden cursor-pointer transition duration-300 hover:shadow-lg hover:-translate-y-1 flex flex-col p-5"
                >
                  <div className="flex flex-col gap-3 flex-grow">
                    <div className="flex items-start justify-between">
                      <h3 className="secondary-color text-lg font-bold">
                        {project.name}
                      </h3>
                      <svg 
                        className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto pt-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="text-xs px-2 py-1 rounded-full bg-sky-400/10 hover:bg-sky-400/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 text-slate-500 dark:text-slate-400">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </IntersectionAnim>
        )}

        {/* No Category Selected Message */}
        {activeCategory === null && (
          <IntersectionAnim index={2} delay={0.1} type="">
            <div className="flex flex-col items-center justify-center py-16 text-center">
              <svg 
                className="w-20 h-20 text-slate-300 dark:text-slate-700 mb-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Select a category to view projects
              </p>
            </div>
          </IntersectionAnim>
        )}
      </div>
    </div>
  );
};

export default ProjectsContent;