// Arrays: Creation and Access

// Arrays creation
// 1: Using square brackets
const animals = ['🐱','🐭','🐨'];

// 2: Using 'new' keyword
const moreAnimals = new Array('🐹','🐰','🦊');

// Accessing values
const cat = animals[0]; 
console.log(cat); // Prints 🐱
console.log(cat); // Prints 🐱


// Extra: const and Arrays: can't reassign, but can change values
console.log(animals); // Prints '🐱','🐭','🐨'
animals[0] = '🐹' 
console.log(animals); // Prints '🐹','🐭','🐨'

animals = moreAnimals; // 🚫 Error: 'TypeError: Assignment to constant variable.'