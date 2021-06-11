import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
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
        <h1>Registrate</h1>

        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              placeholder="Nombre"
              id="name"
              name="name"
              value={userData.name}
              onChange={onChange}
            />
          </div>

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
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm Password"
              id="confirmPassword"
              name="confirmPassword"
              value={userData.confirmPassword}
              onChange={onChange}
            />
          </div>

          <div className="campo-form">
            <button type="submit" className="btn btn-primario btn-block">
              Crear Cuenta
            </button>
          </div>
        </form>

        <Link to="/" className="enlace-cuenta">
          Iniciar Sesion
        </Link>
      </div>
    </div>
  );
};

export default Register;
