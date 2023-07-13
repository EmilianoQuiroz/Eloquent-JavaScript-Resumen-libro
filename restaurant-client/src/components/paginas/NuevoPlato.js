import React from "react";
import { useFormik } from 'formik';

const NuevoPlato = () => {
  // Validacion y lectura de los datos del formulario
  const formik = useFormik({
    initialValues: {
        nombre: '',
        precio: '',
        categoria: '',
        imagen: '',
        descripcion: '',
    },
    onSubmit: (datos) => {
      console.log(datos);
    },
  });
  return (
    <>
      <h1 className="text-3xl font-light mb-4">Agregar Plato</h1>

      <div className="flex justify-center mt-10">
        <div className="max-w-3xl w-full">
          <form
            onSubmit={formik.handleSubmit}
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="nombre"
              >
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlined"
                placeholder="Nombre del plato"
                value={formik.values.nombre}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Precio
              </label>
              <input
                type="number"
                id="precio"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlined"
                placeholder="Precio del plato"
                min="0"
                value={formik.values.precio}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="precio"
              >
                Categoria
              </label>
              <select
                id="precio"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlined"
                name="categoria"
                value={formik.values.categoria}
                onChange={formik.handleChange}
              >
                <option value="">--- Seleccine ---</option>
                <option value="desayuno">"Desayuno"</option>
                <option value="almuerzo">"Almuerzo"</option>
                <option value="cena">"Cena"</option>
                <option value="bebidas">"Bebidas"</option>
                <option value="postre">"Postre"</option>
                <option value="ensalada">"Ensalada"</option>
              </select>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="imagen"
              >
                Imagen
              </label>
              <input
                type="file"
                id="imagen"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlined"
                value={formik.values.imagen}
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="descripcion"
              >
                Descripcion
              </label>
              <textarea
                type="text"
                id="descripcion"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outlined h-40"
                placeholder="Descripcion del plato"
                value={formik.values.descripcion}
                onChange={formik.handleChange}
              ></textarea>
            </div>
            <input
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 w-full mt-5 p-2 text-white uppercase font-bold rounded-md"
              value="Agregar Plato"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default NuevoPlato;
