import React, { useReducer } from "react";
import { ProjectContext } from "./projectContext";
import projectReducer from "./projectReducer";
import { v4 as uuidv4 } from "uuid";

import {
  FORM_NEW_PROJECT,
  SHOW_PROJECT,
  ADD_PROJECT,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../Types";

const projects = [
  { id: 1, name: "CRM" },
  { id: 2, name: "Pagina WEB Dana" },
  { id: 3, name: "Compras del Super" },
  { id: 4, name: "Master Broker" },
];

const PojectState = (props) => {
  const initialState = {
    formProject: false,
    projects: [],
    tasks: [],
    project: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const setFromNewProject = () => {
    dispatch({
      type: FORM_NEW_PROJECT,
    });
  };

  const showProject = () => {
    dispatch({
      type: SHOW_PROJECT,
      payload: projects,
    });
  };

  const addProject = (project) => {
    project.id = uuidv4();

    dispatch({
      type: ADD_PROJECT,
      payload: project,
    });
  };

  const actualProject = (project) => {
    dispatch({
      type: ACTUAL_PROJECT,
      payload: project,
    });
  };

  const deleteProject = (projectId) => {
    dispatch({
      type: DELETE_PROJECT,
      payload: projectId,
    });
  };

  return (
    <ProjectContext.Provider
      value={{
        formProject: state.formProject,
        projects: state.projects,
        project: state.project,
        showProject,
        addProject,
        actualProject,
        setFromNewProject,
        deleteProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default PojectState;
