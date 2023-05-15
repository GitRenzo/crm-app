export async function loader({params}){ //Los params vienen por defecto en el loader, no los estamos enviando de otra parte 
console.log(params);
return {}
}
 function EditarCliente() {
  return (
     <div>EditarCliente</div>
  )
}

 export default EditarCliente