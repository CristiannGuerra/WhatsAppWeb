const extractFormData = (formJSX) => {
    
    // Instanciamos un objeto con la clase FormData
    const formData = new FormData(formJSX)
  
    // Obtenemos el valor de un campo en especifico de nuestro formulario
    // const nombre = formData.get("username")
    // console.log(nombre)
  
    // Obtenemos todas las keys del Objeto
    // Luego las colocamos en un array
    const formKeys = formData.keys().toArray()
  
    // Creamos un objeto/dict vacio para generar un objeto key/value
    const formValues = {}
  
    // Iteramos por formKeys, agregando cada key al objeto vacio formValues
    // Luego le asignamos a cada key a traves del metodo get() el valor a cada key
    for (const key of formKeys) {
      formValues[key] = formData.get(key)
    }
  
    return formValues
  }

export default extractFormData