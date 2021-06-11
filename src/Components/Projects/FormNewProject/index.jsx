import React, { useContext, useState } from "react";
import { ProjectContext } from "../../../Context/Projects/projectContext";
import Error from "../../Utils/Error";

const FormNewProject = () => {
  const projectContext = useContext(ProjectContext);
  const { addProject } = projectContext;

  const [project, setProject] = useState({
    name: "",
  });
  const [error, setError] = useState(false);

  const onChange = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
    e.target.value.trim() === "" ? setError(true) : setError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (project.name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);
    addProject(project);

    setProject({
      name: "",
    });
  };

  return (
    <>
      <form className="formulario-nuevo-proyecto" onSubmit={onSubmit}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre Proyecto"
          name="name"
          value={project.name}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-block btn-primario">
          Agregar proyecto
        </button>
      </form>
      {error ? <Error message="Este campo no debe estar vacio" /> : null}
    </>
  );
};

export default FormNewProject;
