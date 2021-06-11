import { ADD_TASK, DELETE_TASK, SHOW_TASK, TASK_COMPLETE } from "../../Types";

const TaskReducer = (state, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case SHOW_TASK:
      return {
        ...state,
        tasks: action.payload,
      };
    case TASK_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? action.payload : task
        ),
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
};

export default TaskReducer;
