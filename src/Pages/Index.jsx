// The loader works as useEffet no quiet the same but it works that way
// In React Router DOM, a loader is a function that is used to fetch data for a route. 
// The loader function is passed to the Route element as a property, and it is called when the route is first rendered. 
// The loader function can return any type of data, including strings, objects, arrays, or even Promises.


// Loaders and useEffect are both React hooks that can be used to fetch data. However, there are some key differences between the two hooks.

// Loaders are specific to React Router, while useEffect can be used in any React component.
// Loaders are also called when the route is first rendered, while useEffect can be called at any time. 
// Finally, loaders can only return data, while useEffect can return any type of value.



// *******************
import { useLoaderData } from "react-router-dom"
import Cliente from "../Componentes/Cliente";
import { obtenerClientes } from "../data/Clientes";

export function loader() {
    const clientes = obtenerClientes()
    return clientes
}


function Index() {
    const clientes = useLoaderData()
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus clientes</p>
            {clientes.length ?
                (
                    <table className="w-full bg-white shadow mt-5 table-auto">
                        <thead className="bg-blue-800 text-white">
                            <tr>
                                <th className="p-2">Cliente</th>
                                <th className="p-2">Contacto</th>
                                <th className="p-2">Editar</th>
                            </tr>
                        </thead>

                        <tbody>
                            {clientes.map((cliente) => (
                                <Cliente
                                    cliente={cliente}
                                    key={cliente.id}
                                />
                            ))}
                        </tbody>
                    </table>
                )
                :
                (<p className="text-center mt-10">No hay clientes</p>)
            }
        </>
    )
}

export default Index
// *****************
