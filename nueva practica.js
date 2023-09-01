//reto de platzi -- aqui tuvimos que ingresar un arreglo de esta forma
//solutionsa(["Nath","puta","marico"], 3, "Cami") y teniamos que eliminar el ultimo valor de nuestro array y añadirle el 
// el nuevo, eso si, segun la cantidad del deathcount ibamos a eliminar del arreglo, empezando con los ultimos 
function solutionsa(estudiantes, deathCount, nuevo) 
{   
    if(deathCount === 0)
    {  
        añadirUltimo = estudiantes.push(nuevo);
        return estudiantes;
    } 
    else
    {
        for (var i = 0; i < deathCount; i++)
        {
            var eliminarUltimop = estudiantes.pop([i]);// tener muy en cuenta que no hay llamar a la variable, si no
            //siempre al array que en este caso es estudiante, ya que ahi se le sigue haciendo el seguimiento
            //y ahi aunque no se vea a primera vista, con cada variable donde colocamos el .pop p .push va cambiando
            // a la siguiente linea
        }
        var agregadop = estudiantes.push(nuevo);
        return estudiantes;
    }
}
// Objetos---> es casi lo mismo que un array pero estos de aqui ya tienen elementos a los que se les asigna un valor y 
// y por ello son diferentes

var Objecto = 
{
    marca: 'nissan', // dentro de un objeto recuerda usar comas
    annio:'2023',
    modelo:'GTR',
    detalleDelAuto: function()//tambien podemos usar funciones dentro de nuestro objeto
    {
        console.log(`Auto ${this.modelo} ${this.annio}`);//this. se utiliza para hacer referencia a algun elemento dentro
        //del objeto, asi lo obtendriamos de vuelta, esta es una forma de como podemos retornar ciertas cosas del objeto
    }
};

console.log(Objecto.modelo);// asi llamamos algo del objeto

//forma de crear un objeto de forma manual
function carsi(marca,annio,modelo)//parametros que vamos a recibir para crear nuestro objeto
{
    this.marca = marca; //de esta forma generamos una funcion para generar nuevos elementos dentro de nuestro objeto
    this.annio = annio;
    this.modelo = modelo; 
}

var carsiNuevo = new carsi('ford','1992','festiva') // asi generamos la variable que nos va a generar nuevos elementos
//dentro de nuestro objeto

//forma de crear un objeto de forma automatica
//retoobject.js
// reto de los objetos de platzi
function solutionup(car) //debemos retornar si con tiene el objeto que queremos, si lo tiene retornamos true y si no lo
//tiene retornamos false
{
    //for(var i = 0; i < car.length; i++)
    //{   
        if(car.hasOwnProperty("licensePlate"))//con hasOwnProperty podriamos buscar dentro de los objetos y retornar 
        //si tiene o no tiene esa variable
        {
            car.drivingLicense = true; // con esto asignamos algo nuevo dentro de nuestro objeto que seria el elemento
            //drivingLicense con el car. se lo añadimos y lo colamos con el nombre que le queramos colocar a nuestro 
            //nuevoelemento y el valor que queramos darle, en este caso true
        } else
        {
            car.drivingLicense = false;
        }
    //}
    return car; // aqui retornamos nuestro nuevo objeto
}

function solutionep(car)
{
if (car.licensePlate === undefined || car.licensePlate === null)//otra forma de hacerlo aqui literal decimos si en el objeto
//car. no se encuentra un elemento licensePlate y no hay nada que es igual a undefined o null, nos muestre de una false
    {
        car.drivingLicense = false;
    } else
    {
        car.drivingLicense = true;
    }
    return car;
}

//metodos de los arrays

//metodo filter. = este metodo nos sirve para crear un nuevo array de un array pero ya filtrado con los datos especificos
//que solicitamos por ejempl

var fruteriaVicenzio =  // aqui creamos nuestri array con objetos dentro
[
    {fruta: 'pera', costo: 500},
    {fruta: 'manzana', costo: 200},
    {fruta: 'uva', costo: 300},  
    {fruta: 'cambur', costo: 1500}, 
    {fruta: 'papaya', costo: 1000}, 
    {fruta: 'kiwi', costo: 700}, 
    {fruta: 'naranja', costo: 100}, 
];

var filtrandoFruteria = fruteriaVicenzio.filter(function(fruna) //aqui creamos nuestro nuevo array y gracias al metodo
//filter solo creamos el arreglo con los valores del elemento costo que sea <= 500, para eso es necesario colocar el
// nombre del nuevo array igual al array original con el .filter y dentro de la variable creamos una funcion en donde 
// se ejecuta nuestro metodo filter y returnamos el parametro de la funcion junto el elemento .costo <= 500 qu es lo que
// se busca de ese elemento o retorna todas las coincidencias
{
    return fruna.costo <= 500;

});

var creandoListaUnicaDeUnSoloElemento = fruteriaVicenzio.map(function(fruna)// con .map podriamos retornar todos elementos
//de un mismo tipo dentro de un nuevo arreglo haciendo lo siguiente parametro de la funcion . elementos que necesitamos 
//retornar dentro de nuestro nuevo arreglo
{
    return fruna.fruta;
});

var buscandoUnicoElemento = fruteriaVicenzio.find(function(fruna)// con .find podriamos retornar un elemento en especifico
//junto su acompañante si es que lo tiene dentro de esa fila de la matriz que representa ese objeto dentro del array
// asi buscando en este caso el elemento 'pera' y a su ves enviando en nuevo array lo que viene siendo 'pera' junto
// a su acompañante, o retorna simplemente la primera coincidencia
{
    return fruna.fruta === 'pera';
});

var buscandoElementos = fruteriaVicenzio.forEach(function(fruna)
//con .forEach podremos retonar los valores de los elementos fuera de un arreglo, en realidad sirve para recorrer los
// elementos especificos que coincidan con su grupo y retornaremos o recorreremos todos los valores de ese arreglo 
//pero solo los que coincidan o sean del mismo grupo de elementos
{
    console.log(fruna.fruta);
});

var buscandoElementoSome = fruteriaVicenzio.some(function(fruna)
//com .some solo retorname que si en ese grupo de elementos nos podremos encontrar con lo que buscamos, retornandonos
// valores booleanos true o false si es cierto o falso.
{
    return fruna.costo <= 700;
});

const cars = 
[
    {
        color: 'red',
        brand: 'Kia',
    },
    {
        color: 'gray',
        brand: 'Chevrolet',
        licensePlate: 'AAA111',
    },
    {
        licensePlate: 'RGB255',
    },
];
solutio(cars);

function solutio(cars) 
{
    // 👇 Este es el código que no funciona
    return cars.filter(function (car) {
    if (car.licensePlate) 
    {
        return true;
    } else 
    {
        return false;
    }
    });
}