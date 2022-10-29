
// ELEMENTOS INDEX

// Crear una neuva página html con un simulador de presupuestos para que ingrese 
// el cliente los datos necesarios y se le devuelva una aproximación de costos
//  Por cada click en el boton calcular realizar dos acciones:
// 1. Devolver un el monto total
// 2. Pushear info en la class clientesPresupuesto y guardar como JSON en localStorage

let inputNombrePresupuesto = document.getElementById('nombrePresupuesto')

let inputServicio = document.getElementById('servicio')

let inputModalidad = document.getElementById('modalidad')

let inputCantidad = document.getElementById('cantidad')

let inputCalcular = document.getElementById('calcular')

const clientesPresupuesto = [
    {

    }
]

let valorHoraPersona=4500;
let valorMesPersona= 35000;
let valorHoraEmpresa=7000;
let valorMesEmpresa= 65000;

inputNombrePresupuesto.addEventListener('change',() => {
    clientesPresupuesto.push(inputNombrePresupuesto.value)

    
} )

inputServicio.addEventListener('change',() => {
    clientesPresupuesto.push(inputServicio.value)

    
} )

inputModalidad.addEventListener('change',() => {
    clientesPresupuesto.push(inputModalidad.value)


} )

inputCantidad.addEventListener('change',() => {
    clientesPresupuesto.push(inputCantidad.value)

    
} )

inputCalcular.addEventListener('change',() => {

    if((inputServicio==='Asesoría Personal')&& (inputModalidad==='Horas')){

        let total= inputCantidad.value*valorHoraPersona

        clientesPresupuesto.push('Monto total' +total)

    alert('El monto aproximado total es de $' + total)

    }

    console.log(clientesPresupuesto)

    
}) 













// ELEMENTOS CONTACTO

let nombreConsulta = document.getElementById('nombre')

let mailConsulta = document.getElementById('e-mail')

let telefonoConsulta = document.getElementById('telefono')

let mensajeConsulta = document.getElementById('mensaje')

let enviarConsulta = document.getElementById('enviar')

const clientesConsulta = [
    {
        nombre: nombreConsulta,
        mail: mailConsulta,
        telefono: telefonoConsulta,
        mensaje: mensajeConsulta
    }
]

// Por cada click en el boton enviar, siempre y cuando los 4 campos
// estén completos, pushear el objeto a la class consulta y guardar información
// localStorage como JSON, conservando el array de objetos.
