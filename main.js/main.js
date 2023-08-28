let nombre = "";

function inicio(validar) {
  nombre = prompt(
    "Bienvenido/a a mi primera pre-entrega, de seguro has de tener un lindo nombre quizás quieras hacernos saber cual es?"
  );

  validar = alert("Su bello nombre es: " + nombre);

  let cambioNombre = prompt(
    "en caso de que el nombre ingresado este mal escrito o no fue de su agrado, por favor  seleccione alguna de estos números :  \n 1 (deseo cambiarlo) \n 2 (esta bien asi)"
  );

  if (cambioNombre == 1) {
    nombre = nuevoNombre = prompt("Ingrese su lindo nombre nuevamente");
    alert("su bello nombre fue reemplazado por: " + nombre);
  } else if (cambioNombre == 2) {
    alert(
      "WOW! parece que es el nombre correcto y con razón, " +
        nombre +
        " es un nombre adecuado para alguien tan lindo/a como tu"
    );
  }
}

function compras(productos) {
  alert(
    "Bien ahora dime por cual de las compras de tu abuela has venido a recoger ?"
  );

  productos = Number(
    prompt(
      "Dime cual de los 4 productos has venido a buscar? \n Arroz \n Papas \n Fideos \n Yuca"
    )
  );

  console.log(productos);

  switch (productos) {
    case 1:
      alert(
        "Perfecto, por favor llévate las bolsas de Arroz y salúdala de mi parte"
      );
      break;
    case 2:
      alert(
        "Perfecto, por favor llévate las bolsas de Papas y salúdala de mi parte"
      );
      break;
    case 3:
      alert(
        "Perfecto, por favor llévate las bolsas de Fideos y salúdala de mi parte"
      );
      break;
    case 4:
      alert(
        "Perfecto, por favor llévate las bolsas de Yuca y salúdala de mi parte"
      );
      break;
    default:
      alert("Parece que olvidaste lo que viniste a buscar, por favor regresa y vuelve cuando recuerdes aquello que necesitas");
      break;
  }
}

function transporte() {
    alert('🌞 Hola soy tu conciencia, ahora debemos poder llegar a casa de la abuela!, para eso es necesario tomar un Bus, sabes que ruta tenemos que tomar ?');
    let ruta = 0
    while(ruta == 0) {
        ruta = Number(prompt('Por favor recuerda la ruta de autobuses que necesitamos'))
    }
    
    alert('🌞 Perfecto, recordaste cual ruta tomar, ahora en marcha!')

    let lugar = Number(prompt('Buenas soy la conductora de este autobus mi nombre es Desdémona, Puedo saber a que lugar se dirige?\n 1 = Rosario \n 2 = Villa Consuelo \n 3 = Averno \n 4 = Ciudad Norte'))

    switch (lugar) {
        case 1:
            alert('Entendido, todos abordo, proxima partida en Rosario')
            break;
        case 2:
            alert('Entendido, todos abordo, proxima partida en Villa Consuelo')
            break;
        case 3:
            alert('Entendido, todos abordo, proxima partida en Averno')
            break;
        case 4:
            alert('Entendido, todos abordo, proxima partida en Ciudad Norte')
            break;
        default:
            alert('Me temo que usted no tomo ningún destino que pena fue un placer haber pedido mi valioso tiempo en un desperdicio como usted XOXO!')
            break;
    }
}


function llegada() {
    alert('🌞 Bien, por fin llegamos ahora solo vamos a llevarle las compras a la Abuelita!')

    let entrega = Number(prompt('Deseas entregar las compras a tu abuela ? \n 1 = si, es hora de llegar \n 2 = Que se joda esa zunga'))

    if( entrega == 1) {
        alert('Gracias hijita/o por todo, siéntate preparare algo de cenar para ti 👩‍🦳')
    } else if (entrega == 2) {
        alert('Como que no me darás mis compras, que mal nieto eres, espero tu llegada en el infierno y ardas en sus llamas!!!!! ')
    }
    alert('Graciaas por jugar!')
}

inicio();
compras();
transporte()
llegada()