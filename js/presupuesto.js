
// ------------------------- FORMULARIO PRESUPUESTOS -------------------------//

// Crear una neuva página html con un simulador de presupuestos para que ingrese 
// el cliente los datos necesarios y se le devuelva una aproximación de costos
//  Por cada click en el boton calcular realizar dos acciones:
// 1. Devolver un el monto total
// 2. Pushear info en la class clientesPresupuesto y guardar como JSON en localStorage
//  para luego poder recuperar la información de todos los clientes registrados, y,
//  de ser necesario, filtrar por tipo de servicio, modalidad y cantidad de tiempo.

// Tener en cuenta que para que funcione lo propuesto a continuación
// se deberá pasar de un input a otro con el mouse, porque el evento válido es 'change', 
// si cambiamos con el teclado utilizando tab no se almacenan los elementos en el array


// Obtener la información de nodos de cada input

let inputNombrePresupuesto = document.getElementById('nombrePresupuesto')

let inputServicio = document.getElementById('servicio')

let inputModalidad = document.getElementById('modalidad')

let inputCantidad = document.getElementById('cantidad')

let inputCalcular = document.getElementById('calcular')

const clientesPresupuesto = []


//                      DOM Y EVENTOS


inputNombrePresupuesto.addEventListener('change', () => {
    clientesPresupuesto.push('Nombre: '+inputNombrePresupuesto.value)
})

inputServicio.addEventListener('change',() => {

    clientesPresupuesto.push('Servicio: '+inputServicio.value)
  
} )

inputModalidad.addEventListener('change',() => {

    clientesPresupuesto.push('Modalidad: '+inputModalidad.value)
  
} )


inputCantidad.addEventListener('change',() => {

    clientesPresupuesto.push('Cantidad: '+inputCantidad.value)
  
} )

// En función de los datos ingresados, devolver al cliente la el presupuesto aproximado
// Por el momento se utiliza un alert, al incorporar librerías esto cambiará
// Y al incorporar backend, esta información se devolverá mediante un mail con mayores especificaciones

inputCalcular.addEventListener('click',(event) => {

    let valorHoraPersona=4500;
    let valorMesPersona= 35000;
    let valorHoraEmpresa=7000;
    let valorMesEmpresa= 65000;

    let totalPersonaHora= inputCantidad.value*valorHoraPersona;
    let totalPersonaMes= inputCantidad.value*valorMesPersona;
    let totalEmpresaHora= inputCantidad.value*valorHoraEmpresa;
    let totalEmpresaMes= inputCantidad.value*valorMesEmpresa;

    if((inputServicio.value === ('Asesoría Personal' || 'Asesoria Perosnal' || 'asesoría personal' || 'asesoria peronal' || 'asesoría Personal' || 'Asesoría personal' || 'Asesoria personal'|| 'ASESORIA PERSONAL'||'ASESORÍA PERSONAL'))
    && inputModalidad.value === ('Hora' || 'hora'|| 'HORA')){
        
        clientesPresupuesto.push('Monto total: $'+totalPersonaHora)

    alert(`El monto aproximado por su asesoría es de $ ${totalPersonaHora}`)

    } else if((inputServicio.value === ('Asesoría Personal' || 'Asesoria Perosnal' || 'asesoría personal' || 'asesoria personal' || 'asesoría Personal' || 'Asesoría personal' || 'Asesoria personal'|| 'ASESORIA PERSONAL'||'ASESORÍA PERSONAL'))
    && inputModalidad.value === ('Mes' || 'mes'|| 'MES')){
        
        clientesPresupuesto.push('Monto total: $'+totalPersonaMes)

    alert(`El monto aproximado por su asesoría es de $ ${totalPersonaMes}`)

    } else if ((inputServicio.value === ('Asesoría Empresarial' || 'Asesoria Empresarial' || 'asesoría empresarial' || 'asesoria empresarial' || 'asesoría Empresarial' || 'Asesoría empresarial' || 'Asesoria empresarial'|| 'ASESORIA EMPRESARIAL'||'ASESORÍA EMPRESARIAL'))
    && inputModalidad.value === ('Hora' || 'hora'|| 'HORA')){
        
        clientesPresupuesto.push('Monto total: $'+totalEmpresaHora)

    alert(`El monto aproximado por su asesoría es de $ ${totalEmpresaHora}`)

    } else if ((inputServicio.value === ('Asesoría Empresarial' || 'Asesoria Empresarial' || 'asesoría empresarial' || 'asesoria empresarial' || 'asesoría Empresarial' || 'Asesoría empresarial' || 'Asesoria empresarial'|| 'ASESORIA EMPRESARIAL'||'ASESORÍA EMPRESARIAL'))
    && inputModalidad.value === ('Mes' || 'mes'|| 'MES')){
        
        clientesPresupuesto.push('Monto total: $'+totalEmpresaMes)

    alert(`El monto aproximado por su asesoría es de $ ${totalEmpresaMes}`)
    }

    event.preventDefault();

    inputNombrePresupuesto.value = "";
    inputServicio.value = "";
    inputModalidad.value = "";
    inputCantidad.value = "";

    console.log(clientesPresupuesto)

    // Guardar en localStorage el array con los datos del cliente

    let clientesPresupuestoJSON = JSON.stringify(clientesPresupuesto)
    
    localStorage.setItem('Cliente',clientesPresupuestoJSON)


    console.log(clientesPresupuestoJSON)
   

} )
     
// Solicitar la info del localStorage

console.log(localStorage.getItem('Cliente'))



// Esto sería en caso de necesitar recorrer el array y solicitar sólo un elemento
// Cuando ya tenga varios alojados en el localStorage

// for (let i = 0; i>localStorage.lenght; i++){

//     const key = localStorage.key(i);

//     const valor = localStorage.getItem(key);

//     console.log(`Clave: ${key} - Valor: ${valor}`)
// }




