

// ------------------------- FORMULARIO CONTACTO -------------------------//

// Por cada click en el boton enviar, siempre y cuando los 4 campos
// estén completos, pushear el objeto a la class consulta y guardar información
// localStorage como JSON, conservando el array de objetos.

//                      DOM Y EVENTOS

let nombreConsulta = document.getElementById('nombre')

let mailConsulta = document.getElementById('e-mail')

let telefonoConsulta = document.getElementById('telefono')

let mensajeConsulta = document.getElementById('mensaje')

let enviarConsulta = document.getElementById('enviar')

const clientesConsulta = []

nombreConsulta.addEventListener('change',() => {

    clientesConsulta.push('Nombre: '+nombreConsulta.value)
  
} )

mailConsulta.addEventListener('change',() => {

    clientesConsulta.push('E-mail: '+mailConsulta.value)
  
} )

telefonoConsulta.addEventListener('change',() => {

    clientesConsulta.push('Teléfono: '+telefonoConsulta.value)
  
} )

mensajeConsulta.addEventListener('change',() => {

    clientesConsulta.push('Mensaje: '+mensajeConsulta.value)
  
} )


enviarConsulta.addEventListener('click',(event) => {

    console.log('Consulta Enviada')

    console.log(clientesConsulta)

    event.preventDefault();

    let clientesConsultaJSON = JSON.stringify(clientesConsulta)

      // Guardar en LOCALSTORAGE el array con los datos del cliente

    localStorage.setItem('Cliente', clientesConsultaJSON)

    console.log(clientesConsultaJSON)

    let cliente1 = JSON.parse(localStorage.getItem(clientesConsultaJSON))

   
  
} )

// Solicitar la info del localStorage

console.log(localStorage.getItem('Cliente'))