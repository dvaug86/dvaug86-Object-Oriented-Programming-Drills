//Object Literals , Pseudo Classes and methods
/*
let person1 = {
    name: 'Collin',
    sayHello: function(){
        console.log(`Hello! My name is ${this.name}.`)
        }
        }
    
let person2 = {
    name: 'JohnAllen',
    sayHello: function(){
    console.log(`Hello! My name is ${this.name}.`)
    }
    }

let person3 = {
    name: 'Cam',
    sayHello: function(){
    console.log(`Hello! My name is ${this.name}.`)
    }
    }
    
    let person4 = {
    name: 'Mike',
    sayHello: function(){
    console.log(`Hello! My name is ${this.name}.`)
    }
    }
    
    
let person5 = {
    name: 'Matt',
    sayHello: function(){
    console.log(`Hello! My name is ${this.name}.`)
    }
    }

function Person_Info(name, city, age){
    this.name = name;
    this.city = city;
    this.age = age;
}

Person_Info.prototype.greet = function() {
    alert(`Hey! My name is ${this.name}. I am ${this.age} and live in ${this.city}.`);
}

let p1 = new Person_Info('Collin', 'Jackson', 35);
p1.greet();

let p2 = new Person_Info('JohnAllen', 'New York', 19);
p2.greet();

let p3= new Person_Info('Cam', 'London', 105);
p3.greet();

let p4 = new Person_Info('Mike', 'Tokyo', 45);
p4.greet();

let p5 = new Person_Info('Matt', 'Chicago', 3);
p5.greet();

person1.sayHello();
person2.sayHello();
person3.sayHello();
person4.sayHello();        
person5.sayHello();

class Friends {
    constructor(name, city, age){
        this.name = name;
        this.city = city;
        this.age = age;
    }
    yo(){
        alert(`Greetings! I am ${this.name}. I was born ${this.age} years ago, and I reside in ${this.city}.`);
    }
}

let friend1 = new Friends('Collin', 'Jackson', 35);
friend1.yo();

let friend2 = new Friends('JohnAllen', 'New York', 19);
friend2.yo();

let friend3= new Friends('Cam', 'London', 105);
friend3.yo();

let friend4 = new Friends('Mike', 'Tokyo', 45);
friend4.yo();

let friend5 = new Friends('Matt', 'Chicago', 3);
friend5.yo();

*/
//Inheritances
class Vehical {
    constructor(type, manufacturer, num_wheels){
        this.type = type;
        this.manufacturer = manufacturer;
        this.num_wheels = num_wheels; 
    }
    aboutVehical(){
        alert(`This vehical is a ${this.type} by ${this.manufacturer} with ${this.num_wheels} tires.`)
    }
}
let vehical1 = new Vehical('sedan', 'ford', 4);
vehical1.aboutVehical();

class Truck extends Vehical{
    constructor(type, manufacturer, num_wheels, num_doors, truck_bed){
        super(type, manufacturer, num_wheels);
        this.num_doors = num_doors;
        this.truck_bed = truck_bed;
    }
    aboutVehical(){
    if(this.truck_bed == 'yes'){
        alert(`This vehical is a ${this.type} by ${this.manufacturer} with ${this.num_wheels} tires, ${this.num_doors} doors and has a truckbed.`)
    }else{
        alert(`This vehical is a ${this.type} by ${this.manufacturer} with ${this.num_wheels} tires, ${this.num_doors} doors and is without a truckbed.`)

    }
}
}
let truck1 = new Truck('truck', 'ford', 4, 2, 'no');
truck1.aboutVehical();

class Sedan extends Vehical{
    constructor(type, manufacturer, num_wheels, num_doors, size, mpg){
        super(type,manufacturer,num_wheels)
        this.size = size;
        this.mpg = mpg;
        this.num_doors = num_doors;
    }
    aboutVehical(){
        alert(`This vehical is a ${this.size} ${this.type} by ${this.manufacturer} with ${this.num_wheels} tires and ${this.num_doors} doors and has a gas milage of ${this.mpg}mpg.`);
    }   
}
let sedan1 = new Sedan('sedan', 'ford', 4, 4, 'large', 33);
sedan1.aboutVehical();

class Motorcycle extends Vehical{
    constructor(type, manufacturer, num_wheels, handlebars, doors){
        super(type, manufacturer, num_wheels)
        this.handlebars = handlebars;
        this.doors = doors;
    }
    aboutVehical(){
        if( this.num_wheels == 2 && this.handlebars =='true' && this.doors == 0){
            alert(`This vehical is a ${this.type} by ${this.manufacturer} with ${this.num_wheels} wheels, ${this.doors} doors and handlebars`);
        }
        else{
            alert('This is not a motorcycle!');
        }
    }
}
let motorcycle1 = new Motorcycle('motorcycle', 'Harley', 2, 'true', 0);
motorcycle1.aboutVehical();
let motorcycle2 = new Motorcycle('motorcycle', 'Harley', 2, 'true', 2);
motorcycle2.aboutVehical();