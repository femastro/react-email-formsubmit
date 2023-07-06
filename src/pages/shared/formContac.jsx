import { Fragment } from "react";
import { useForm } from "react-hook-form";
import { formApi } from "./config";

function FormContac() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleChange = (e) => {
    const valor = e.target.value;
    if (valor === "Otro") {
      document
        .querySelector("#root > div > div > form > div:nth-child(5) > div")
        .classList.remove("hidden");
    } else {
      document
        .querySelector("#root > div > div > form > div:nth-child(5) > div")
        .classList.add("hidden");
    }
  };

  const onSubmit = handleSubmit(async (e) => {
    console.log(e);
    const form = document.getElementById("form");
    await form.submit();
  });

  return (
    <Fragment>
      <div className="bg-zinc-700 max-w-xl p-5 rounded-xl mx-auto mt-10">
        <form
          action={formApi}
          method="POST"
          id="form"
        >
          <div className="text-4xl mb-5 text-center w-full">Contacto</div>
          <div>
            <label htmlFor="name" className="mt-5">
              Nombre y Apellido :
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md mb-3"
              placeholder="Su Nombre y Apellido"
              id="name"
            />
            {errors.name && (
              <p className="text-red-500">Su nombre es requerido !</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="email">Su Email :</label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md mb-3"
              placeholder="Ingrese su email"
              id="email"
            />
            {errors.email && (
              <p className="text-red-500">Su email es requerido !</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="phone">Su Teléfono :</label>
            <input
              type="text"
              name="phone"
              {...register("phone", { required: true })}
              className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md mb-3"
              placeholder="Ej. 115553344"
              id="phone"
            />
            {errors.phone && (
              <p className="text-red-500">Su teléfono es requerido !</p>
            )}
          </div>
          <div className="mt-2">
            <label htmlFor="subject">Asunto :</label>
            <select
              name="subject"
              id="subject"
              {...register("subject", { required: true })}
              className="w-full bg-zinc-200 text-black px-4 py-2 rounded-md mb-3"
              onClick={handleChange}
            >
              <option value="">Seleccione...</option>
              <option value="Sugerencias">Sugerencias</option>
              <option value="Consultas">Consultas</option>
              <option value="Reclamos">Reclamos</option>
              <option value="Garantias">Garantias</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.subject && (
              <p className="text-red-500">El asúnto es requerido !</p>
            )}
            <div className="mt-2 hidden">
              <label htmlFor="subject2">
                <span className="text-red-600 font-bold">* </span>Otro : &nbsp;
              </label>
              <input
                type="text"
                name="otherSubject"
                className="bg-zinc-200 text-black px-4 py-2 rounded-md mb-3 shadow-orange-400/50"
                placeholder="Ej. Otro asunto"
                id="otherSubject"
              />
            </div>
          </div>
          <div className="mt-2">
            <label htmlFor="consulta">Consulta :</label>
            <textarea
              type="text"
              name="consulta"
              {...register("consulta", { required: true })}
              className="textArea w-full bg-zinc-200 text-black px-4 py-2 rounded-md mb-3"
              placeholder="Ej. Consulta."
              id="consulta"
            />
            {errors.consulta && (
              <p className="text-red-500">El texto es requerido !</p>
            )}
          </div>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_next"
            value="https://email.mastrosoft.com.ar/thanks"
          />
          <button
            type="button"
            onClick={onSubmit}
            className=" w-full px-5 py-3 mt-5 mb-3 rounded-xl shadow-md text-center font-extrabold bg-blue-800 hover:bg-blue-700 shadow-gray-600/50 hover:shadow-gray-400/50"
          >
            Enviar
          </button>
        </form>
      </div>
    </Fragment>
  );
}

export default FormContac;
