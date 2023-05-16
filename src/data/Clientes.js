export async function obtenerClientes() {
    // console.log(import.meta.env); esto nos permite ver las variables de entorno existentes en el projecto
    const respuesta = await fetch(import.meta.env.VITE_API_URL) // Por default el method de fetch es GET 
    const resultado = await respuesta.json()
    return resultado
}
export async function obtenerCliente(id) {
    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`)
    const resultado = await respuesta.json()
    return resultado
}


export async function agregarClientes(datos) {
    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {

    }
}

export async function actualizarCliente(id, datos) {
    console.log(id);
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {

    } 
}