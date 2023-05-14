// The loader works as useEffet no quiet the same but it works that way
// In React Router DOM, a loader is a function that is used to fetch data for a route. 
// The loader function is passed to the Route element as a property, and it is called when the route is first rendered. 
// The loader function can return any type of data, including strings, objects, arrays, or even Promises.


// Loaders and useEffect are both React hooks that can be used to fetch data. However, there are some key differences between the two hooks.

// Loaders are specific to React Router, while useEffect can be used in any React component.
// Loaders are also called when the route is first rendered, while useEffect can be called at any time. 
// Finally, loaders can only return data, while useEffect can return any type of value.
export function loader(){
    return 'Desde loader'
}

function Index() {
    return (
        <>
            <h1 className="font-black text-4xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus cliente</p>
        </>
    )
}

export default Index