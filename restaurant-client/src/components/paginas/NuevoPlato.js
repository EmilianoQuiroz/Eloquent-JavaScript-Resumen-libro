import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
 
import { FirebaseContext } from "../../firebase";
 
const NuevoPlato = () => {
  // Context con las operaciones de firebase
  const { firebase } = useContext(FirebaseContext);
 
  // validacion y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      nombre: "",
      precio: "",
      categoria: "",
      imagen: "",
      descripcion: "",
    },
    validationSchema: Yup.object({
      nombre: Yup.string()
        .min(3, "Los nombres deben tener almenos 3 caracteres")
        .required("El Nombre del plato es obligotario"),
      precio: Yup.number()
        .min(1, "Agrega el precio de tu producto")
        .required("El Precio del plato es obligotario"),
      categoria: Yup.string().required(
        "La Categoría del plato es obligotaria"
      ),
      descripcion: Yup.string()
        .min(10, "La descripción debe ser más larga")
        .required("La descripción es obligatoria"),
    }),
    onSubmit: async (datos) => {
      try {
        // le mando la colección donde debe crearse y el cuerpo como objeto
        const res = await firebase.insertDocument("productos", { ...datos });
        // en caso recibo un id quiere decir que se insertó
        if (res.id) {
          console.log("insercción de cuerpo correcta:", res.id);
        }
      } catch (error) {
        console.log(error);
      }
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
                onBlur={formik.handleBlur}
              />
            </div>
            { formik.touched.nombre && formik.errors.nombre ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.nombre}</p>
              </div>
            ) : null }

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
                onBlur={formik.handleBlur}
              />
              { formik.touched.precio && formik.errors.precio ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.precio}</p>
              </div>
            ) : null }

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
                onBlur={formik.handleBlur}
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
            { formik.touched.categoria && formik.errors.categoria ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.categoria}</p>
              </div>
            ) : null }

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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
              ></textarea>
            </div>
            { formik.touched.descripcion && formik.errors.descripcion ? (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                <p className="font-bold">Hubo un error:</p>
                <p>{formik.errors.descripcion}</p>
              </div>
            ) : null }

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
