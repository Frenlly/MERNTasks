import React from "react";

import Sidebar from "../Layout/Sidebar";
import Header from "../Layout/Header";
import FormTasks from "../Tasks/FormTasks";
import TasksList from "../Tasks/TasksList";

const Projects = () => {
  return (
    <div className="contenedor-app">
      <Sidebar />

      <div className="seccion-principal">
        <Header />
        <FormTasks />
        <main>
          <div className="contenedor-tareas">
            <TasksList />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Projects;
