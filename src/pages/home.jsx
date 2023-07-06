import { Fragment } from "react";
import FormContac from "./shared/formContac";
import Logo from "../assets/Logo.png";
function Home() {

  return (
    <Fragment>
      <br />
      <div className="2xl:container mx-auto">
        <div className="md:w-100 mb-3">
          <img src={Logo} alt="Image" className="mx-auto" />
          <hr />
        </div>
        <FormContac />
        <div className="md:w-100 text-center mt-5 mb-5">
          <div className="grid grid-flow-col justify-stretch mb-5">
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

export default Home;
