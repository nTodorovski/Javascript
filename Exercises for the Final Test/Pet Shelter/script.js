function Animal(name, type, breed, preferredFood, age, isHealthy) {
    this.name = name;
    this.type = type;
    this.breed = breed;
    this.preferredFood = preferredFood;
    this.age = age;
    this.isHealthy = isHealthy;
    this.owner = "";
    this.eat = function(){ return `${this.type} ${this.name} is eating ${this.preferredFood}.`};
    this.adopt = function(name, lastname){
        for(i=0;i<people.length;i++){
            if(people[i].firstName === name && people[i].lastName === lastname){
                this.owner = `${people[i].firstName} ${people[i].lastName}`;
                people[i].pets.push(this.type+" "+this.name);
            }
        }
    };
    this.isAdopted = function(){ 
        if(this.owner = ""){
            return false;
        }else{
            return true;
        }
    };
}

let vardarishte = [];
vardarishte.push((new Animal("Sharko", "Dog", "German Shepherd" , "steak", 6, "healthy")));
vardarishte.push((new Animal("Buck", "Cat", "Persian" , "fish", 2, "healthy")));
vardarishte.push((new Animal("Max", "Rabbit", "Dutch" , "carrot", 3, "sick")));
vardarishte.push((new Animal("Charlie", "Monkey", "Chimpanzee" , "banana", 5, "healthy")));
vardarishte.push((new Animal("Rocky", "Parrot", "Macaws" , "vegetables", 7, "sick")));


function Person(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.pets = [];
    this.adopt = function(shelter,msg){
        let shelter1 = shelter;
        for(i=0;i<shelter1.length;i++){
            if(shelter1[i].type === msg){
                shelter[i].owner = `${this.firstName} ${this.lastName}`;
                this.pets.push(shelter1[i]);
                vardarishte.splice(i,1);
            }
        }
    }
    this.abandon = function(type,name){
        for(i=0;i<this.pets.length;i++){
            if(this.pets[i].type === type && this.pets[i].name === name){
                this.pets[i].owner = "";
                vardarishte.push(this.pets[i]);
                this.pets.splice(i,1);
            }
        }
    }
}


let people = [];
people.push((new Person("Nikola","Todorovski",26)));
people.push((new Person("Petko","Petkovski",26)));


// BONUS 1
// people[0].adopt(vardarishte,"Cat")
// people[1].adopt(vardarishte,"Monkey")
// people
// vardarishte


// BONUS 2
// people[0].abandon("Cat","Buck")
// people[1].adopt(vardarishte,"Cat")
// people
// vardarishte