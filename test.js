class Animal {
    static say_hello(){
        return "hello";
    }
}

class Gato extends Animal{
    constructor(name, plate){
        super();
        this.name = name;
        this.plate = plate;
    }

    static createPerro(obj){
        const perro = new Gato();
        return Object.assign(perro, obj);
    }
}

let perro = new Gato();

function f(callback) {
    callback("cucu", "123sdaed");
}

f((name, plate) => {
    perro = Object.assign(perro, {name: name, plate: plate});
});


console.log(perro instanceof Gato);
console.log(perro);