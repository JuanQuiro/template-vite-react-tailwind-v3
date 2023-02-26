import React from "react";

export const Formulario = () => {
  return (
    <div className="grid justify-center ">
      <h1 className=" text-xl shadow-2xl text-white bg-purple-600 font-semibold mt-10 px-80 py-2">
        Enviar nuevo Email
      </h1>
      <div id="cargando" className="grid  pb-10 justify-center bg-white">
        <p className=" text-black  mt-6 font-semibold ">Para:</p>
        <input
          type="text"
          name="para"
          id="para"
          placeholder="Pancho@gmail.com"
          className="w-80 text-black"
        />
        <p className=" text-black  mt-6 font-semibold ">Asunto:</p>
        <input
          type="text"
          name="para"
          id="para"
          placeholder="Helados"
          className="w-80  text-black"
        />
        <p className=" text-black  mt-6 font-semibold ">Mensaje:</p>
        <input
          type="text"
          name="para"
          id="para"
          placeholder="Los helados señor..."
          className="w-80  text-black"
        />
      </div>
      <div className=" flex flex-wrap justify-around bg-purple-600">
        <button
          onClick={(e) => {
            alert("Fin");
          }}
        >
          <p className="btn btn-accent my-2 text-black">Enviar</p>
        </button>
        <button>
          <p className="btn btn-secondary text-black">Reset</p>
        </button>
      </div>
    </div>
  );
};
