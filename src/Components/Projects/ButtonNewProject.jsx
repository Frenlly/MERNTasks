import React, { useContext } from "react";
import FormNewProject from "./FormNewProject";
import { ProjectContext } from "../../Context/Projects/projectContext";

const ButtonNewProject = () => {
  const projectContext = useContext(ProjectContext);
  const { formProject, setFromNewProject } = projectContext;
  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={() => setFromNewProject()}
      >
        Nuevo Proyecto
      </button>

      {formProject ? <FormNewProject /> : null}
    </>
  );
};

export default ButtonNewProject;
