/*eslint-env browser*/

//STEP 1

//CAT CLASS - NAMED FUNCTION
/*
function Cat (noise, social, environment) {
    this.sound = noise;
    this.sociallyDependent = social;
    this.environment = environment;
    //TEST 
      window.console.log("Cats" + " " + this.sound + ", are " + this.sociallyDependent + ", and are typically " + this.environment + " animals" );
}
*/


//TEST
/*
var kamaraCat = new Cat("purr", "not socially dependent creatures", "indoor");
*/



//DOG CLASS - ANONYMOUS FUNCTION

/*
var Dog = function (noise, social, environment) {
    this.sound = noise;
    this.sociallyDependent = social;
    this.environment = environment;
    
}
*/


//STEP 2
/*
function Cat (noise, social, environment) {
    this.sound = noise;
    this.sociallyDependent = social;
    this.environment = enviornment;
    
}
var kamaraCat = new Cat();
*/


//DOG CLASS - ANONYMOUS FUNCTION

/*
var Dog = function (noise, social, environment) {
    this.sound = noise;
    this.sociallyDependent = social;
    this.environment = environment;
    
}
var rooDog = new Dog();
*/

//STEP 3

/*
function Animal() {
    "use strict";
    this.animalMessage = function () {
        return "The animal has been created";
    };
    
}
var myAnimal = new Animal();
window.console.log(myAnimal.animalMessage());
*/

//STEP 4


/*
function Animal() {
    "use strict";
    this.animalMessage = function (animal) {
        return "The " + animal + " has been created";
    };
    
}
var myAnimal = new Animal();
window.console.log(myAnimal.animalMessage("emu"));
*/


//STEP 5

/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.animalType = type;
    this.animalBreed = breed;
    this.animalColor = color;
    this.animalHeight = height;
    this.animalLength = length;
    this.animalMessage = function () {
        return "This animal is a " + this.animalType + ", " + this.animalBreed + "," + this.animalColor + ". She " + this.animalHeight + " and is " + this.animalLength + ".";
        
    };
}   
var myAnimal = new Animal("canine", "bull dog mix", " who has brindle markings", "is 1.5 feet high", "4 feet long");
window.console.log(myAnimal.animalMessage());
*/



//STEP 6

/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.animalType = type;
    this.animalBreed = breed;
    this.animalColor = color;
    this.animalHeight = height;
    this.animalLength = length;
    this.animalMessage = function () {
        return "This animal is a " + this.animalType + ", " + this.animalBreed + "," + this.animalColor + ". She " + this.animalHeight + " and is " + this.animalLength + ".";
        
    };
}
var myAnimal = new Animal("canine", "bull dog mix", " who has brindle markings", "is 1.5 feet high", "4 feet long");
var property;
for (property in myAnimal) {
    window.console.log(property);
}
*/


//STEP 7

/*
function Animal(type, breed, color, height, length) {
    "use strict";
    this.animalType = type;
    this.animalBreed = breed;
    this.animalColor = color;
    this.animalHeight = height;
    this.animalLength = length;
    this.speak = function (color) {  //this.propery allows to create a pub.meth.
       if (this.animalType === "dog") {
           return "The " + color + " " + this.animalType+ " is barking!";
           
       }
        else if (this.animalType === "cat") {
            return "The " + color + " cat is meowing!";
            
        }
        
    };
}
  
var myAnimal = new Animal("dog");
window.console.log(myAnimal.speak("brindle"));
*/


//USING PROTOTYPE PROPERTY

/*function Animal(type, breed, color, height, length) {
    "use strict";
    this.animalType = type;
    this.animalBreed = breed;
    this.animalColor = color;
    this.animalHeight = height;
    this.animalLength = length;
}

Animal.prototype.speak = function(color) {
     if (this.animalType === "dog") {
           return "The " + color + " " + this.animalType+ " is barking!";
           
       }
        else if (this.animalType === "cat") {
            return "The black cat is meowing!";
            
        }
    
}
  
var myAnimal = new Animal("dog");
window.console.log(myAnimal.speak("brindle"));*/



//STEP 8



/*
function Animal(type) {
    "use strict";
    var animalType = type,
        CheckType = function (dog, cat) {
            if (animalType === "dog") {
                return dog;
           
            }
                else if (animalType === "cat") {
                return cat;
            
            }
        
        };
}

Animal.prototype.speak = function (animalKind) {
    "use strict";
    if (this.animalType === "dog") {
        return "The " + animalKind + " is making a noise!";
           
    }
        else {
            return "The " + animalKind + " is making a noise!";

            
        }
    
};


var myAnimal = new Animal();
window.console.log(myAnimal.speak("dog"));
*/





//STEP 9

/*
var myStr = 'There ain\'t no clean way to make a hundred million bucks. Somewhere along the line guys got pushed to the wall, nice little businesses got the ground cut out from under them... Decent people lost their jobs. Big money is big power and big power gets used wrong. It\'s the system.'; 

String.prototype.findWords = function () {
    "use strict";
    var re = /big/gi;
    var found = myStr.match(re).length;
    alert("The word big has been found " + found + " times.");
}
window.console.log(myStr.findWords());
*/


