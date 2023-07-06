import { Fragment } from "react";
import Logo from "../assets/Logo.png";

function Thanks() {
  return (
    <Fragment>
      <br />
      <div className="md:container mx-auto">
        <div className="w-100 mb-5">
          <img src={Logo} alt="Image" className="mx-auto" />
          <hr />
        </div>
        <div className="bg-zinc-800 shadow-2xl shadow-gray-400/50 max-w-2xl text-center p-10 rounded-xl mx-auto mt-5">
          <p>Mensaje Enviado !</p>
          <h1 className="text-3xl">Gracias por su consulta.</h1>
        </div>
        <div className="md:w-100 text-center mt-5 mb-5">
          <hr />
          <div className="grid grid-flow-col justify-stretch mt-5 mb-5">
            <div className="mt-5">
              <br />
              <b>HORARIOS DE ATENCION</b>
              <br />
              Lunes a Viernes de 9:00 a 19:00 hs.
              <br />
              Sabados de 9:00 a 13:00 hs.
              <br />
            </div>
            <div className="mt-5">
              <br />
              <b>UBICACION DE NUESTRO LOCAL</b>
              <br />
              Av. Independencia 3502 <br />
              Ciudad Aut. de Buenos Aires,
              <br />
              Argentina
            </div>
            <div className="mt-5">
              <br />
              <b>TELEFONO DE CONTACTO</b>
              <br />
              (+54) 11 4932 8112
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Thanks;
