import { obtenerCliente, actualizarCliente } from "../data/Clientes";
import { Form, useNavigate, useLoaderData, useActionData, redirect  } from "react-router-dom";
import Formulario from "../Componentes/Formulario";
import Error from "../Componentes/Error";

export async function loader({ params }) { //Los params vienen por defecto en el loader, no los estamos enviando de otra parte 
   console.log(params);
   const cliente = await obtenerCliente(params.clienteId)
   if (Object.keys(cliente) === 0) {
      throw new Response('', {
         statis: 404,
         statusText: 'No hay resultados  '
      })
   }
   // console.log(cliente);
   return cliente
}

export async function action({ request, params }) {
   const formData = await request.formData()
   const datos = Object.fromEntries(formData)

   const email = formData.get('email')  
   const errores = []

   if (Object.values(datos).includes('')) {
      errores.push('Todos los campos son obligatorios')
   }
   let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");
   if (!regex.test(email)) {
      errores.push('El email no es valido')
   }

   // Retornar datos si hay errores
   if (Object.keys(errores).length) {
      return errores
   }

   await actualizarCliente(params.clienteId, datos)
   return redirect('/')
}

function EditarCliente() {
   const navigate = useNavigate()
   const cliente = useLoaderData()
   const errores = useActionData( )
   // console.log(cliente);
   return (
      <>
         <h1 className="font-black text-4xl text-blue-900">Editar cliente</h1>
         <p className="mt-3">A continuación podras modificar los datos de un cliente  </p>

         <div className="flex justify-end">
            <button
               className="bg-blue-800 text-white px-3 py-1 font-bold uppercase"
               onClick={() => navigate(-1)} //this returns to the previous page 
            >
               Volver
            </button>
         </div>

         <div className="bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20">

            {/* Preguntale a ChatGPT que hace esto exactamente */}
            {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}  

            <Form
               method="post"
               noValidate
            >
               <Formulario
                  cliente={cliente}
               />

               <input
                  type="submit"
                  className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer hover:bg-blue-500"
                  value="Guardar cambios "
               />
            </Form>
         </div>
      </>
   )
}

export default EditarCliente