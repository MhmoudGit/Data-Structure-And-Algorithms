/* DATA STRUCTURE */

/* STACKS */
// functions used : push, pop, peek, length
var letters = []; //our stack
const word = "racecar";
let rword = "";

// put letters of word into stack
let words = [...word];
words.map((one) => letters.push(one));

// pop off the stack in reverse order
words.map((one) => (rword += letters.pop(one)));
// if (rword === word){
//     console.log(word + ' is a pailndrome');
// } else { console.log(word + ' is not a pailndrome'); }
//<<<< loging stack pailndrome i Learned


/// my pailndrome checker
const reverseThis = (word) => {
  let letters = [];
  let x = word.split("");
  x.map((one) => letters.push(one));
  let reversedWord = letters.reverse().join("");
  return reversedWord;
};

const isPailndrome = (word) => {
  if (word !== reverseThis(word)) {
    return word + " is not a pailndrome";
  }
  return word + " is a pailndrome";
};

// console.log(isPailndrome('raceca'))  <<<< loging my Pailndrome


// Manual using stack in javascript >>>>
//Creates a satck (maybe thats how arrays work ?!!):
class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  // Adds a value onto the end of the stack
  push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  size() {
    return this.count;
  };

  // Return the value at the end of the stack
  peek() {
    return this.storage[this.count - 1];
  };
}


// trying a homemade stack 😆
let myStack = new Stack();

myStack.push('car')
myStack.push('anothercar')
console.log(myStack.peek())
console.log(myStack.size())
console.log(myStack.pop())
console.log(myStack.size())
console.log(myStack.peek());

