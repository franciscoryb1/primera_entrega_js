// Nombre
let nombre = prompt('Ingrese su nombre:');
while (!isNaN(nombre)) {
    alert("Error! Ingrese un nombre valido.");
    nombre = prompt('Ingrese su nombre:');
    }
// Apellido
let apellido = prompt('Ingrese su apellido:');
while (!isNaN(apellido)) {
    alert("Error! Ingrese un apellido valido.");
    apellido = prompt('Ingrese su apellido:');
    }
// Edad
function obtener_edad(edad){
    var patron = /^[1-9]+$/;
    while(true){
        if(edad === null || edad < 18 || patron.test(edad) === false){
            edad = prompt('Error! Ingrese una edad valida: ')
        }
        else{
            return edad
        }
    };
}
let edad = obtener_edad(prompt('Ingrese su edad: '))


alert(`Perfecto! Configuremos su vehiculo...`)
let suma = 0;


// Autos
function elegir_auto(suma){
    const autos = {
        etios: 6000000,
        corolla: 10000000,
        hilux: 15000000};
    let auto = prompt(`Elija un auto:
    - etios ($6.000.000)
    - corolla ($10.000.000)
    - hilux ($15.000.000)`);
    while(true){
        if(auto in autos){
            let resultado = {
                selecc: auto,
                suma: autos[auto]
            }
            return resultado
        }else{
            alert("El auto ingresado no esta disponible.")
            auto = prompt(`Elija un auto:
            - etios ($6.000.000)
            - corolla ($10.000.000)
            - hilux ($15.000.000)`)
        }
    }
    };

eleccion = elegir_auto(suma)
suma = eleccion.suma
auto = eleccion.selecc
alert(`Por el momento lleva seleccionado los siguientes items:
- Toyota ${auto} ($${suma})

Total: $${suma}`)


// Colores
function elegir_color(suma){
    const colores = {
    blanco: 0,
    negro: 200000,
    rojo: 400000,
    gris: 700000};
    let color = prompt(`Elija un color:
        - blanco ($0)
        - negro ($200.000)
        - rojo ($400.000)
        - gris ($700.000)`);
    while(true){
        if(color in colores){
            let resultado = {
                color: color,
                precio: colores[color],
                suma: suma += colores[color]
            }
            return resultado
    }else{
        alert("El color ingresado no esta disponible.")
        color = prompt(`Elija un color:
        - blanco ($0)
        - negro ($200.000)
        - rojo ($400.000)
        - gris nardo ($700.000)`)
    }
}
};

eleccion_color = elegir_color(suma)
color = eleccion_color.color
precio = eleccion_color.precio
suma = eleccion_color.suma

alert(`Por el momento lleva seleccionado los siguientes items:
- Toyota ${auto} ($${suma})
- Color ${color} ($${precio})

Total: $${suma}`)


// Calculadora de cuotas
function cotizador(suma){
    const opciones = {
        '1': resultado = {
            total: suma,
            cuotas: 1
        },
        '12': resultado = {
            total: suma * 1.25,
            cuotas: ((suma * 1.25)/12).toFixed(2)
        },
        '24': resultado = {
            total: suma * 1.5,
            cuotas: ((suma * 1.5)/24).toFixed(2)
        },
        '48': resultado = {
            total: suma * 2,
            cuotas: ((suma * 2)/48).toFixed(2)
        }
    };
    let eleccion = prompt(`En cuantas cuotas va a abonar su vehiculo?:
    - En 1 cuota. Final $${suma}
    - En 12 cuotas (Interes del 25%) Final $${(suma * 1.25)}
    - En 24 cuotas (Interes del 50%) Final $${suma * 1.5}
    - En 48 cuotas (Interes del 100%) Final $${suma * 2}`);
    while(true){
        if(eleccion in opciones){
            let resultado = opciones[eleccion]
            let valor_total = resultado.total
            let valor_cuotas =  resultado.cuotas
            alert(`Abonara su vehiculo en ${eleccion} cuotas de $${valor_cuotas}, saldo final: $${valor_total}`);
            break;
        }
        else{
            alert("Error! Elija entre una de las opciones disponibles: ")
            let eleccion = prompt(`En cuantas cuotas va a abonar su vehiculo?:
            - En 1 cuota. Final $${suma}
            - En 12 cuotas (Interes del 25%) Final $${(suma * 1.25)}
            - En 24 cuotas (Interes del 50%) Final $${suma * 1.5}
            - En 48 cuotas (Interes del 100%) Final $${suma * 2}`)
            // console.log('ERROR')
        }
    }
}
cotizador(suma)




alert(`Detalles finales de su compra:
- Cliente: ${nombre} ${apellido}
- Edad: ${edad}
- Toyota ${auto} ($${suma})
- Color ${color} ($${precio})

PRECIO FINAL: $${suma}`)

alert('Muchas gracias por elegirnos!')