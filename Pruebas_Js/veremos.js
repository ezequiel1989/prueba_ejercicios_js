/*
var personaUno = {
    nombre: "ezequiel",
    apellido: "chiesa",
    edad: 31
}

var personaDos = {
    nombre: "joel",
    apellido: "silva",
    edad: 33
}

function cumpleanos(persona) { //no altera el objeto original, devuelve un objeto igual pero con un año mas
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
*/

//al pasar el objeto por la funcion, se modifica
/*
function cumpleanos(persona) {
    persona.edad += 1;
    console.log("ahora tiene " + persona.edad + " años, felicidades");
    if (persona.edad === 35) {
        console.log("Ya tendría que jubilarse");
    }
}
*/

// uso de forEach
/*
var array1 = ["perro", "gato", "raton", "mosca"]

array1.forEach(function(index, element) {
    console.log(index + " " + element);
})
*/

/*
function mascota(nombre, tipo, raza, peso, sonido) {
    this.nombre = nombre,
        this.tipo = tipo,
        this.raza = raza,
        this.peso = peso,
        this.sonido = sonido
}

mascota.prototype.saludo = function() {
    console.log("Hola soy un " + this.tipo + " me llamo " + this.nombre + " y mi onomatopeya es " + this.sonido);
}

var nestor = new mascota("nestor", "gato", "callejero", 16, "miauuuuuu");

var gaucho = new mascota("gaucho", "perro", "callejero", 22, "guau");
*/

/*
llamado() {
    console.log(this.nombre + " ha acudido felizmente a tu llamado")
}
*/

var X = 0;
var listado = [];

clss Mascota {
    constructor(animal, nombre, peso, sonido, ID) {
        this.animal = animal,
            this.nombre = nombre,
            this.peso = peso,
            this.sonido = sonido,
            this.ID = X;

        X += 1;
    }

    agregar() {
        listado.push(this.nombre)
    }

    saludar() {
        console.log(this.nombre + " escucho que lo llamaas y vino feliz a romper las pelotas")
    }

    molestar() {
        console.log(this.sonido)
        console.log(this.nombre + " es un " + this.animal + " de mucho caracter, no lo molestes")
    }

    alimentar() {
        console.log(this.nombre + " subio un poquito de peso")
        this.peso += 1;
    }
}

class Perro extends Mascota {
    constructor(animal, nombre, peso, sonido, ID, raza, domestico, descripcion) {
        super(animal, nombre, peso, sonido, ID)
        this.raza = raza,
            this.domestico = true,
            this.descripcion = "es el mejor amigo del hombre"
    }
}

var nestor = new Mascota("gato", "nestor", 18, "miau", true)

var martina = new Mascota("g", "martina", 13, "miaurauuuuu", true)

var dylan = new Perro("perro", "dylan", 34, "guau worf", true, "labrador")

//var animales = [nestor, martina, dylan]

animales.forEach(element => {
    element.saludar()
});