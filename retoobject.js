var cantidad = 0;//inicializamos en cero la cantidad que le vamos a pedir al usuario que desea registrar;
var autos = [];//declaramos nuestro array

function carsi(marca,modelo,annio)//parametros que vamos a recibir para crear nuestro objeto
{
    this.marca = marca; //de esta forma generamos una funcion para generar nuevos elementos dentro de nuestro objeto
    this.modelo = modelo; 
    this.annio = annio;
}

cantidad = prompt('¿Cuantos autos deseas registrar?')//preguntamos a los usuarios la cantidad de registros, asi sabremos
//cuanto durara nuestro ciclo for

for(var i=0; i < cantidad; i++)
{   
    var marca = prompt('Ingresa la marca:  '); //asi podriamos hacer que los usuarios registren el valor del elemento 
    //usando prompt
    var modelo = prompt('Ingresa el modelo:  ');
    var annio = prompt('Ingresa el annio:  ');

    var carsiNuevo = new carsi(marca , modelo , annio); //con esto hagarramos los valores que nos da el usuario y los
    //acomodamos dentro de un objeto cada ves que se repite el ciclo creano un nuevo objeto

    autos.push(carsiNuevo);// de esta forma introducimos el objeto dentro de nuestro array o arreglo
}

console.log(autos); //llamamos al arreglo, objeto que acabamos de crear 

