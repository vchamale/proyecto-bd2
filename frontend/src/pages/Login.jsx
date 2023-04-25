import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alerta from "../componentes/Alerta";
import logo from "../img/banco-chinautla-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [alerta, setAlerta] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prevenir campos vacios
    if ([email, password].includes("")) {
      setAlerta({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
    }

    if (email.split("@")[1] !== "bancochinautla.com") {
      setAlerta({
        msg: "Debe utilizar una cuenta de la organización",
        error: true,
      });
    }
    if ([email, password].includes("chamale.victor@bancochinautla.com")) {
      navigate("dashboard");
    }
  };

  useEffect(() => {
    setAlerta({
      msg: "",
      error: false,
    });
  }, [email, password]);

  const { msg } = alerta;

  return (
    <>
      <div className="w-full flex justify-center">
        <img src={logo} alt="Logo" />
      </div>
      {msg && <Alerta alerta={alerta} />}
      <form
        onSubmit={handleSubmit}
        className="mb-10 bg-white shadow rounded-lg px-10 py-10"
      >
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            placeholder="Correo de la organización"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="my-5">
          <label
            className="uppercase text-gray-600 block text-xl font-bold"
            htmlFor="password"
          >
            Contraseña
          </label>
          <input
            type="password"
            placeholder="Contraseña de registro"
            className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <input
          type="submit"
          value="Iniciar Sesión"
          className="bg-green-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-green-800 transition-colors"
        />
      </form>
      <nav className="lg:flex lg:justify-center">
        <Link
          className="block text-center my-5 text-slate-500 uppercase text-sm"
          to="/forgot_password"
        >
          Olvidé mi contraseña
        </Link>
      </nav>
    </>
  );
};

export default Login;