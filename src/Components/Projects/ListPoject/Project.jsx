import React, { useContext } from "react";
import { ProjectContext } from "../../../Context/Projects/projectContext";

const Project = ({ project }) => {
  const context = useContext(ProjectContext);
  const { actualProject } = context;
  return (
    <li>
      <button
        className="btn btn-blank"
        type="button"
        onClick={() => {
          actualProject(project);
        }}
      >
        {project.name}
      </button>
    </li>
  );
};

export default Project;
