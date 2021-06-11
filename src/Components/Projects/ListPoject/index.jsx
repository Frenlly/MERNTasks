import React, { useContext, useEffect } from "react";
import { ProjectContext } from "../../../Context/Projects/projectContext";
import Project from "./Project";

const ListProject = () => {
  const projectContext = useContext(ProjectContext);
  const { projects, showProject } = projectContext;

  useEffect(() => {
    showProject();
  }, []);

  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ListProject;
