//Cargar datos de consulta: devolver la información de contacto en función de la opción elegida

alert('Por favor, ingrese la opción de asesoría, siendo las posibilidades: Asesoría Personal y Asesoría Empresarial')

let opcion= prompt('Ingrese su elección')

    switch(opcion){
    case 'Asesoría Personal':
    case 'asesoría Personal':
    case 'Asesoría personal':
    case 'asesoría personal':
    case 'Asesoria Personal':
    case 'asesoria Personal':
    case 'Asesoria personal':
    case 'asesoria personal':   
    case 'ASESORÍA PERSONAL':
    case 'ASESORIA PERSONAL':
        alert('Porfavor, contactarse a personas@reload.com');
        break;
    case 'Asesoría Empresarial':
    case 'asesoría Empresarial':
    case 'Asesoría empresarial':
    case 'asesoría empresarial':
    case 'Asesoria Empresarial':
    case 'asesoria Empresarial':
    case 'Asesoria empresarial':
    case 'asesoria empresarial':   
    case 'ASESORÍA EMPRESARIAL':
    case 'ASESORIA EMPRESARIAL':
        alert( 'Por favor contactarse a empresas@reload.com');
        break;

    default:
        alert('Datos inválidos')
        opcion=prompt('Ingrese su elección')
    }




//Crear presupuesto calculando horas de servicio de Consultoría Personal o Empresarial 
//con monto específico. Hora de asesoría $4500, mes de asesoría $35000
//Pedir al usuario que elija asesoría por horas o mensual
//Si elije horas, preguntar cuántas horas y devolver el monto final
//Si elije mes, preguntar cuántos meses y devolver el monto final


// alert('Por favor ingrese "horas" si desea una asesoría por horas, o "mes" si desea asesoría mensual')

// let opcion= prompt('Ingrese su elección')


// let valorHora=4500;
// let valorMes= 35000;

// let cantidadDeHoras=0;
// let cantidadDeMeses=0;
// let resultadoHora=0;

// function presupuestoHora (horas, precio) {return horas * precio;};

// function presupuestoMes (mes, precio) { return mes * precio;};



// if((opcion === 'horas') || (opcion === 'Horas') || (opcion === 'HORAS')){

//     cantidadDeHoras=prompt('Ingrese la cantidad de horas');

//     resultadoHora=presupuestoHora (cantidadDeHoras,valorHora);

//     alert('El monto a pagar por su asesoría es de $'+ resultadoHora);
  
// }

// else if((opcion === 'Mes')|| (opcion === 'mes')|| (opcion === 'MES')){

//     cantidadDeMeses=prompt('Ingrese la cantidad de meses')

//     resultadoMes= presupuestoMes (cantidadDeMeses,valorMes)
    
//          alert('El monto a pagar por su asesoría es de $'+ resultadoMes);
     
//  }

