import {
  FORM_NEW_PROJECT,
  SHOW_PROJECT,
  ADD_PROJECT,
  ACTUAL_PROJECT,
  DELETE_PROJECT,
} from "../../Types";

const projectReducer = (state, action) => {
  switch (action.type) {
    case FORM_NEW_PROJECT:
      return {
        ...state,
        formProject: true,
      };
    case ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        formProject: false,
      };
    case SHOW_PROJECT:
      return {
        ...state,
        projects: action.payload,
      };
    case ACTUAL_PROJECT:
      return {
        ...state,
        project: state.projects.filter(
          (project) => project.id === action.payload.id
        ),
      };
    case DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects.filter(
          (project) => project.id !== action.payload
        ),
        project: null,
      };

    default:
      return state;
  }
};

export default projectReducer;
