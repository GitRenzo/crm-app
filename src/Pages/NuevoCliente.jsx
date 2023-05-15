import { useNavigate, Form, useActionData, redirect } from "react-router-dom"
import Formulario from "../Componentes/Formulario"
import Error from "../Componentes/Error"
import { agregarClientes } from "../data/Clientes"

// Un action siempre tiene un request
export async function action({ request }) {
    // console.log('submit el formulario');
    // El form data esta incluido en el request y es la forma en la que accedemos a la info del formulario
    const formData = await request.formData()
    const datos = Object.fromEntries(formData)
    // Validacion

    const email = formData.get('email') //El valor del que obtienes el get es el "name" del Formulario html, en este caso el FOrmulario.jsx
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

    await  agregarClientes (datos) 
    return redirect('/')
}


const NuevoCliente = () => {
    const navigate = useNavigate()
    const errores = useActionData()
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Nuevo cliente</h1>
            <p className="mt-3">Llena todos los campos para registrar un nuevo cliente</p>

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
                    <Formulario />

                    <input
                        type="submit"
                        className="mt-5 w-full bg-blue-800 p-3 uppercase font-bold text-white text-lg hover:cursor-pointer hover:bg-blue-500"
                        value="Registrar cliente"
                    />
                </Form>
            </div>
        </>
    )
}

export default NuevoCliente