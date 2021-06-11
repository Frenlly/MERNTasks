import React, { useContext, useState } from "react";
import { ProjectContext } from "../../../Context/Projects/projectContext";
import { TaskContext } from "../../../Context/Tasks/taskContext";
import Error from "../../Utils/Error";

const FormTasks = () => {
  const contextProject = useContext(ProjectContext);
  const { project } = contextProject;

  const contextTask = useContext(TaskContext);
  const { addTask } = contextTask;

  const [task, setTask] = useState({
    name: "",
    status: false,
    projectId: null,
  });

  const [error, setError] = useState(false);

  if (!project) return null;

  const [actualProject] = project;

  const onChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
      projectId: actualProject.id,
    });
    e.target.value.trim() === "" ? setError(true) : setError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (task.name.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    addTask(task);

    setTask({
      name: "",
    });
  };
  return (
    <>
      {!project ? null : (
        <div className="formulario">
          <form onSubmit={onSubmit}>
            <div className="contenedor-input">
              <input
                type="text"
                className="input-text"
                placeholder="Nombre de la Tarea"
                name="name"
                value={task.name}
                onChange={onChange}
              />
            </div>

            <div className="contenedor-input">
              <button
                type="submit"
                className="btn btn-primario btn-submit btn-block"
              >
                Agregar Tarea
              </button>
            </div>
          </form>
          {error ? <Error message="Este campo no debe estar vacio" /> : null}
        </div>
      )}
    </>
  );
};

export default FormTasks;
