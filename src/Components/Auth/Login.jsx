import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              value={userData.email}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={userData.password}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <button type="submit" className="btn btn-primario btn-block">
              Iniciar Sesion
            </button>
          </div>
        </form>

        <Link to="/register" className="enlace-cuenta">
          Crea un cuenta
        </Link>
      </div>
    </div>
  );
};

export default Login;
