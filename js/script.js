//Cargar datos de consulta: devolver la información de contacto en función de la opción elegida.
//Crear presupuesto calculando horas de servicio de Consultoría Personal o Empresarial 
//con monto específico. Hora de asesoría personal $4500, mes de asesoría personal $35000,
//hora de asesoría empresarial $7000, mes asesoría empresarial $65000
//Pedir al usuario que elija asesoría por horas o mensual
//Si elije horas, preguntar cuántas horas y devolver el monto final
//Si elije mes, preguntar cuántos meses y devolver el monto final.

//IMPORTANTE: La contratación por horas implica utilizar las horas solicitadas
// dentro de los 30 días desde su contratación.



// const cliente = []

//  alert('Por favor, si está interesado en nuestros servicios ingrese "continuar"')
 
//  let inicio = prompt()

// // Incorporación de while
 
// while(inicio === 'continuar' || 'Continuar' || 'CONTINUAR') {

//     let opcion= prompt('Ingrese su elección de asesoría, siendo las posibilidades: Asesoría Personal y Asesoría Empresarial')

// // Incorporación de método push para comenzar a guardar en un array la información solicitada

//     cliente.push(opcion)

//     switch(opcion){
//         case 'Asesoría Personal':
//         case 'asesoría Personal':
//         case 'Asesoría personal':
//         case 'asesoría personal':
//         case 'Asesoria Personal':
//         case 'asesoria Personal':
//         case 'Asesoria personal':
//         case 'asesoria personal':   
//         case 'ASESORÍA PERSONAL':
//         case 'ASESORIA PERSONAL':


//         alert('Por favor ingrese "horas" si desea una asesoría por horas, o "mes" si desea asesoría mensual')

//         let opcion= prompt('Ingrese su elección')
        
//         let valorHoraPersona=4500;
//         let valorMesPersona= 35000;
        
//         let cantidadDeHoras=0;
//         let cantidadDeMeses=0;
//         let resultadoHora=0;
//         let resultadoMes=0;
        
//         function presupuestoHora (horas, precio) {return horas * precio;};
        
//         function presupuestoMes (mes, precio) { return mes * precio;};

//         cliente.push(opcion)
   
        
//         if((opcion === 'horas') || (opcion === 'Horas') || (opcion === 'HORAS')){
        
//             cantidadDeHoras=prompt('Ingrese la cantidad de horas');

//             cliente.push(cantidadDeHoras)
        
//             resultadoHora=presupuestoHora (cantidadDeHoras,valorHoraPersona);
        
//             alert('El monto a pagar por su asesoría es de $'+ resultadoHora);
          
//         }
        
//         else if((opcion === 'Mes')|| (opcion === 'mes')|| (opcion === 'MES')){
        
//             cantidadDeMeses=prompt('Ingrese la cantidad de meses')

//             cliente.push(cantidadDeMeses)
        
//             resultadoMes= presupuestoMes (cantidadDeMeses,valorMesPersona)
            
//                  alert('El monto a pagar por su asesoría es de $'+ resultadoMes);
             
//          }

//          cliente.push(resultadoHora||resultadoMes)
         

//         alert('Por cualquier otra consulta contactarse a personas@reload.com');
    
//         break;
//         case 'Asesoría Empresarial':
//         case 'asesoría Empresarial':
//         case 'Asesoría empresarial':
//         case 'asesoría empresarial':
//         case 'Asesoria Empresarial':
//         case 'asesoria Empresarial':
//         case 'Asesoria empresarial':
//         case 'asesoria empresarial':   
//         case 'ASESORÍA EMPRESARIAL':
//         case 'ASESORIA EMPRESARIAL':

//         alert('Por favor ingrese "horas" si desea una asesoría por horas, o "mes" si desea asesoría mensual')

//         let opcionEmpresa= prompt('Ingrese su elección')
        
         

//         // PRESUPUESTO
        
//         let valorHoraEmpresa=7000;
//         let valorMesEmpresa= 65000;
        
//         let cantidadDeHorasEmpresa=0;
//         let cantidadDeMesesEmpresa=0;
//         let resultadoHoraEmpresa=0;
//         let resultadoMesEmpresa=0;

//         function presupuestoHoraEmpresa (horas, precio) {return horas * precio;};
        
//         function presupuestoMesEmpresa (mes, precio) { return mes * precio;};
        
//         cliente.push(opcionEmpresa)
        
//         if((opcionEmpresa === 'horas') || (opcionEmpresa === 'Horas') || (opcionEmpresa === 'HORAS')){
        
//             cantidadDeHorasEmpresa=prompt('Ingrese la cantidad de horas');
        
//             cliente.push(cantidadDeHorasEmpresa)

//             resultadoHoraEmpresa=presupuestoHoraEmpresa (cantidadDeHorasEmpresa,valorHoraEmpresa);
        
//             cliente.push(cantidadDeMesesEmpresa)

//             alert('El monto a pagar por su asesoría es de $'+ resultadoHoraEmpresa);
          
//         }   
        
//         else if((opcionEmpresa === 'Mes')|| (opcionEmpresa === 'mes')|| (opcionEmpresa === 'MES')){
        
//             cantidadDeMesesEmpresa=prompt('Ingrese la cantidad de meses')
        
//             resultadoMesEmpresa= presupuestoMesEmpresa (cantidadDeMesesEmpresa,valorMesEmpresa)
            
//                  alert('El monto a pagar por su asesoría es de $'+ resultadoMesEmpresa);
          
//                  cliente.push(resultadoHoraEmpresa||resultadoMesEmpresa)

//          }

//         alert('Por cualquier otra consulta contactarse a empresas@reload.com');
     
//         break;

//         default:
//         alert('Datos inválidos')


//     }

//     break

    
// }
 
// console.log(cliente)


// // HIGH ORDER FUNCTION + Métodos includes, filter, Math


// Suponiendo que los datos de varios clientes ya han sido ingresados
// y alojados en un array de clientes, se buscará:
// 1- La cantidad de clientes en la modalidad Perosnal y Empresarial
// 2- El monto total de cada modalidad.

//let valorHoraPersona=4500;
//let valorMesPersona= 35000;
//let valorHoraEmpresa=7000;
//let valorMesEmpresa= 65000;


// const clientes = [
//     {
//     id:1,
//     servicio: 'Asesoría Personal',
//     modalidad: 'Horas',
//     cantidad: 12 ,
// total: 54000,
//     },

//     {
//     id:2,
//     servicio: 'Asesoría Personal',
//     modalidad: 'Horas',
//     cantidad: 8 ,
//     total: 36000,
//     },

//     {id:3,
//     servicio: 'Asesoría Empresarial',
//     modalidad: 'Mes',
//     cantidad: 3 ,
//     total: 195000,
//     },

//     {id:4,
//     servicio: 'Asesoría Empresarial',
//     modalidad: 'Mes',
//     cantidad: 6 ,
//     total: 390000,
//     },

//     {id:5,
//     servicio: 'Asesoría Personal',
//     modalidad: 'Mes',
//     cantidad: 3, 
//     total: 105000,
//     }
// ]


// // Cantidad de clientes en Consultoría Personal

// const asesoriaPersonal= clientes.filter((el) => el.servicio.includes ('Personal'))

// console.log(asesoriaPersonal)

// // Cantidad de clientes en Consultoría Empresarial

// const asesoriaEmpresarial= clientes.filter((el) => el.servicio.includes ('Empresarial'))

// console.log(asesoriaEmpresarial)

// // Monto total de cada asesoría

// const totalPersonas = asesoriaPersonal.reduce((acc,el) => acc + el.monto,0)

// console.log('La totalidad a cobrar por Asesoría Personal es $' + totalPersonas)

// const totalEmpresas = asesoriaEmpresarial.reduce((acc,el) => acc + el.monto,0)

// console.log('La totalidad a cobrar por Asesoría Personal es $' + totalEmpresas)

// // Monto más alto a cobrar

// let montos = clientes.map((el) => el.monto)

// console.log(montos)

// console.log(Math.max(...montos))

// // Monto más bajo a cobrar

// console.log(Math.min(...montos))





