//variables

var nombrate; //declare la variable
nombrate = 'kevin'; // la inicialize


//funciones
//practicando funciones expresivas, existen dos tipos declarativas y expresivas, 
//la clase de variables esta en el cuaderno solo son, number, string, booleans,
// null and undefinded, arrays y objetos.

//asi que practiquemos funciones, empezemos con la expresiva:
//solo hay dos maneras de retornar con console.log o return
var saludar = function(persona)  //funcion expresiva = genera una variable que tiene adentro una funcion
{
    const saludando = 'Hola, bienvenido a la base de datos ' + persona;

    console.log(saludando);
}//retornando con console.log 

function saludare(persona) //funcion declarativa = se puede mandar a llamar antes de que esta sea declarada, es su ventaja
{
    const saludando = 'Hola, bienvenido a la base de datos ' + persona;

    return saludando;
}//retornando con return

function suma(a,b)
{
    const laSuma = a  +  b;
    return laSuma; 
} //haciendo una funcion para sumar xd

function sumare(a,b)
{
    return  a  +  b; 
} //haciendo una funcion para sumar  de otra forma xd

// funciono :D recuerda siempre colocar dentro el parametro = personam, colocar
// si son numeros (20), si son strings ('juan'), si son booleans(true,false), si son null o undefined, (null,undefined)
//objetos y arrays para este momento no lo sabemos xd, pero por lo que he visto podriamos utilizar los arrays y objetos 
// como una variable o constante dentro de una funcion y asi los llamamos dentro y claro aqui es donde surge, los metodos 
// de los arrays y programacion orientada a objetos porque para separarlos y obtener un elemento o elementos de ese 
//objeto o array hay que separarlos usando otras funciones o metodos de los arrays

//scope = Global y local.

var nombre = 'lucas';//Scope Global

function sumaDeNombres()
{
    var apellido = 'castro';//Scope Local
    const resultado = nombre + ' ' + apellido;
    return resultado;
}

// nombre; // lucas 
// apellido; // apellido is not defined
// la variables dentro de una funcion estan dentro de un scope local solo esta dentro de la funcion, mientas
// que es el scope global esta dentro de todo el codigo.

// hoisting = donde tenemos que colocar las variables y funciones, forma correcta de posicionar codigo

fun();

console.log(nombrare);
function fun()
{
    const resultado = 'hola, como estas? ' + nombrare;
    return resultado;
}

var nombrare = 'kevin';

// undefined

// y con la funcion no va a funcionar y el resultado seria undefined
//por ello la forma correcta es:

var nombrares = 'kevin';

funi();

function funi()
{
    const resultado = 'hola, como estas? ' + nombrares;
    return resultado;
}



// el hoisting nos decia que en versiones anteriores a emascript 6 tenemos que declarar e inicilaizar las variables
// al principio ya que podria pasar que si la colocamos de ultimo y antes de ella habia una funcion que llamaba a esa 
//variable, el resultado seria undefined
//con la funcion si no importa si la llamamos antes igualmente va a funcionar, el detalle son las variables

//Coercion = se utiliza para cambiar el tipo de variable de los valores

var aa = 4 + '7'; //47 typeof = se vuelve un string y se concatenan -- ecuacion de suma implicita donde el string convierte 
//el numero en un string
var bb = 4 * '7'; //28 typeof = se vuelve un number y se multiplican -- ecuacion de multiplicacion implicita 
// que convierte el string en un numero
// ahora convirtamos un numero en un string
var cc = 2 + true; // 3 typeof = se queda como numero pero si siempre le sumamos un solo true le sumaremos un numero
var dd = false - 3; //-3 typeof = se queda como numero pero se queda con el mismo resultado ya que false es 0

var aaa = 20; //number
var bbb = aaa + ''; // lo convertimos en string
var ccc = String(aaa); // lo convertimos en string de otra forma 
var ddd = Number(ccc);  // lo volvemos a convertir en un numero

//valores true y false = que es falso?  y que es verdadero ?

//Boolean() = false
//Boolean(0) = false
//Boolean(1) = true
//Boolean(NaN) = false
//Boolean(undefined) = false
//Boolean(null) = false
//Boolean('') = false
//Boolean('a') = true
//Boolean([]) = true
//Boolean({}) = true
//Boolean(function (){}) = true

//operadores
//matetmaticos = 3 + 2, 50 + 10, 10 * 20, 20 / 2
// de string = 'diego ' + 'de granda' = diego de granda
//negacion
// !false = con esto (!) negamos que sea falso y nos devuelve true
//comparacion
// 3 == '3'; esto nos devuelve que es true porque ambos son tres y no mira que tipo de variables son
// 3 === '3'; esto nos devuelve que es false porque podran ser el mismo numero pero no son el mismo tipo de variable
//ya que uno es string y el otro es number
//5 > 3; true
// 5 < 3; false
// 5 = 3; false
// 5 >= 3; true, porque hay una validacion de dos pasos y una de ellas se cumple
// 5 <= 3; false, porque ninguna es cierta
// a && b; si a y b son verdad se cumple la condicion, esto quiere decir si ambos son true, se cumple 
//a || b; si a o b, algunas de las son verdaderas, esto quiere decir que cumple la condicion pero si ninguna es true
// no cumple la condicion pero por lo menos aqui puede ser alguna de las dos 
//de incremento
// var edad = 40; edad++, el resultado sera 41, suma de uno en uno
//var edad = 40; edad--, el resultado sera 39, resta de uno en uno
//var edad = 40; edad += 2, el resultado sera 42, suma de dos en dos
//var edad = 40; edad -= 2, el resultado sera 38, resta de dos en dos

var edade = 40;
edade --;
//reto-logrado
function solution (secreto)
{
    return secreto > 5;
}

// condicionales

function condicionales(numero)
{
    var resultado = numero === 1 ? "Si soy un uno" : "No, no soy uno";// esto es un tipo de validacion en la cual (?) actua
    // como el que realiza la pregunta, en la cual de ser cierta hagarra al caso de la izquierda y si no es cierta
    //hagarra el caso de la derecha.
    return resultado;
}
// condicional if
if(true)
{
    console.log('hola');
}//retorna hola

if(false)
{
    console.log('hola');
}// no retorna nada porque es falso
if (true)
{
    console.log('es la true');
} else
{
    console.log('es la false');
}// aqui diferenciamos que el else es cuando es falso y no se cumplio, mientras el if es si se cumple
function verificadora(kike)
{
if ( kike < 5)
{
    console.log('es la true menor');
} else if ( kike > 5)
{
    console.log('es la true mayor');
} else
{
    console.log('es la false false');
}// aqui creamos uno usando else if si se llega a cumplir otra condicion y if si se cumple la principal y el 
// else para decirnos que no se cumplio
}

//juego de piedra papel o tijera

function jueguitoIf(parametro)
{   
    var resultado = Math.floor(Math.random()*3);//Math.random = se utiliza para dar un numero del 0 al 1 en decimal pero 
    // da salida a un numero aleatorio
    // Math.floor = se utiliza para que un numero decimal se convierta en un numero entero

    var piedra = 0;
    var tijera = 1;
    var papel = 2;

    if(parametro === 'piedra')
    {
        parametro === piedra;
        if( resultado === papel)
        {
            console.log('perdiste');
        } else if (resultado === tijera)
        {
            console.log('ganaste');
        } else
        {
            console.log('empate');
        }
    } 
    else if (parametro === 'tijera')
    {
        parametro === tijera;
        if( resultado === papel)
        {
            console.log('ganaste');
        } else if (resultado === piedra)
        {
            console.log('perdiste');
        } else
        {
            console.log('empate');
        }
    }
    else if(parametro === 'papel')
    {
        parametro === papel;
        if( resultado === piedra)
        {
            console.log('ganaste');
        } else if (resultado === tijera)
        {
            console.log('perdiste');
        } else
        {
            console.log('empate');
        }
    } else
    {
        console.log('no has ingresado el valor correcto')
    }
}
// condicional switch = es como tipo de if pero esta ves funcionan para detectar por casos especificos solo los que 
// coinciden con los cases y si no devuelve lo que se coloque en default.

function validarSwitch(numero)
{
    switch (numero) {
        case 18:
            console.log('tienes la edad para votar');
            break;
        case 20:
            console.log('Bienvenido al sistema electoral, vota por primera ves');
            break;
        case 65:
            console.log('lo siento amigo ya estas viejo para votar');
            break;
    
        default:
            console.log('aun no tienes la edad para votar');
            break;
    }
}

function jueguitoSwitch(parametro)
{   
    var resultado = Math.floor(Math.random()*3);

    var piedra = 0;
    var tijera = 1;
    var papel = 2;
    
    switch (parametro) 
    {
        case 'piedra':
            parametro === piedra;
            switch (resultado) {
                case tijera:
                    console.log('ganaste');
                    break;
                case papel:
                    console.log('perdiste');   
                    break;
            
                default:
                    console.log('empate'); 
                    break;
            }
            break;
        case 'tijera':
            parametro === tijera;
            switch (resultado) {
                case piedra:
                    console.log('perdiste');
                    break;
                case papel:
                    console.log('ganaste');
                    break;
            
                default:
                    console.log('empate');
                    break;
            }
            break;
        case 'papel':
            parametro === papel;
            switch (resultado) {
                case tijera:
                    console.log('ganaste');
                    break;
                case piedra:
                    console.log('perdiste');
                    break;
            
                default:
                    console.log('empate');
                    break;
            }
            break;
    
        default:
            console.log('no has ingresado el valor correcto')
            break;
    }
}
//reto platzi
function solution1(article) 
{
    switch (article) {
        case 'computadora':
            console.log('Con mi computadora puedo programar usando JavaScript');
        break;
        case 'celular':
            console.log('En mi celular puedo aprender usando la app de Platzi');
        break;
        case 'cable':
            console.log('¡Hay un cable en mi bota!');
        break;
        default:
            console.log('Artículo no encontrado');
        break;
    }
}
//arrays dentro de un array se guardan numbers, strings and objects
//metodos de los arrays

function arrays()
{

var frutas = ['cereza','pera','fresa','manzana'];//sirve con numeros y strings
console.log(frutas.length); //length se utiliza para ver cuantos elementos hay dentro de nuestro array o arreglo
console.log(frutas[0]);//Asi es para ingresar a nuestros elementos dentro del array-- esto es una forma basica claro, 
//cuando es lineal
console.log(frutas);//asi visualizaremos nuestro arreglo completo
var añadirFrutaUltimo = frutas.push('uva');// el metodo del array .push no sirve para agregar nuevos elementos a nuestro array
console.log(frutas);//vemos resultado en consola
var eliminarUltimaFrutas = frutas.pop();// con este metodo .pop simplemente eliminamos el ultimo elemento de nuestro array
console.log(frutas);//vemos resultado en consola
var añadirFrutaPrincipio = frutas.unshift('piña');// con el metodo .unshift simplemente añadimos un nuevo elemento al 
//principio de nuestro array
console.log(frutas);//vemos resultado en consola
var eliminarPrincipioFrutas = frutas.shift();//con este metodo .shift eliminamos el primer elemento de nuestro array
console.log(frutas);//vemos resultado en consola
var encontrarFruta = frutas.indexOf('cereza');//con este metodo .indexOf nos ayuda a buscar a un elemento de nuestro 
//array y darnos la posicion de el 
console.log(encontrarFruta);//vemos resultado en consola

}
//reto platzi--logrado identificando si es un string o no es string
function solutionu(arraySecreto)
{
    var kike = arraySecreto[0];
    if ( typeof kike === 'string')
    {
        return true;
    } else
    {
        return false;
    }
} 

//ciclos o loots

//ciclo for = este ciclo nos ayuda realizar una funcion para cada elemento de nuestro array o la ves recorriendo
// nuestro array u objeto y asignando una tarea o valor a cada uno
//manera 1
function probandoFor()//omitir la funcion, no quiero que se vuelva lo de adentro un scope global
{
    var frutas = ['cereza','pera','fresa','manzana'];
    function saludare(persona)
    {  
        console.log(`hola, ${persona}`);

    }
    for (var i = 0; i < frutas.length; i++)//importante el length para que tome a nuestro array como un numero
    { // en el primero se declara la variable, en el segundo damos la condicion y en el 
      // tercero asignamos que recorra hacia adelante con ++ o que sume o que recorra hacia atras -- o le reste.
        saludare(frutas[i]);
    } 
    
}
// manera 2
function probandoFor1()//omitir la funcion-- la funcion solo es para encapsular lo de adentro y no se haga un scope global
{
    var frutas = ['cereza','pera','fresa','manzana'];
    function saludare(persona)
    {  
        console.log(`hola, ${persona}`);

    }
    //para entender porque es var persona of frutas, primero inicializamos el parametro dentro de nuestro for, este 
    //para metro va a pertencer a una funcion que se quiera ejecutar junto con el array o objeto que se quiera ejecutar
    //para asi pasar los valores de nuestro array u objeto a la funcion y estos se ejecuten en la funcion
    for (var persona of frutas)
    { // en el primero se declara la variable, en el segundo damos la condicion y en el 
      // tercero asignamos que recorra hacia adelante con ++ o que sume o que recorra hacia atras -- o le reste.
        saludare(frutas);
    } 
    
}

function probandoWhile() // asi es como se realiza un while
{
    var frutas = ['cereza','pera','fresa','manzana'];// array
    function saludare(persona)//funcion
    {  
        console.log(`hola, ${persona}`);

    }
    while (frutas.length > 0)//en un while siempre seria array o objeto.length > o < a 0
    {
        var persona = frutas.shift(); //el .shift es porque en el arreglo en la primera vuelta llama al primero, eliminamos
        // el primero ahora llama al segundo, eliminamos al segundo ahora llama al tercero y asi sucesivamente
        saludare(persona); // dentro de la funcion la variable a la que le asignamos nuestro array
    }
}
//reto platzi
function solutionsa(estudiantes, deathCount, nuevo) 
{   
    
    if(deathCount === 0)
    {  
        const añadirUltimo = estudiantes.push(nuevo);
        console.log(añadirUltimo);
    } 
    else if(deathCount === 1)
    {
        var eliminarUltimo = estudiantes.pop();
        var agregado = eliminarUltimo.push(nuevo);
        return agregado;
    } 
    else
    {
        for (var i = 0; i < deathCount; i--)
        {
            var eliminarUltimop = estudiantes[i].pop();
        }
        var agregadop = eliminarUltimop.push(nuevo);
        return agregadop;
    }
}