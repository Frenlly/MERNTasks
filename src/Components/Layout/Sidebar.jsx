import React from "react";

import ButtonNewProject from "../Projects/ButtonNewProject";
import ListProject from "../Projects/ListPoject";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        MERN<span>Tasks</span>
      </h1>

      <ButtonNewProject />

      <div className="proyectos">
        <h2>Mis Proyectos</h2>
        <ListProject />
      </div>
    </aside>
  );
};

export default Sidebar;
