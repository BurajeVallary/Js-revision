//Question 1
let word ="beautiful";
const words=word.slice(5);

console.log(words);

//Question 2

const food ="I was feeling hungry today";
let us="eat";
var position =6;
var pos =[food.slice(0,position)+ " "+us+ food.slice(position)];
console.log(pos);

//Question 3

const story="The quick brown fox jumps over the lazy dog";
let fox=(story.match(/the/g) || []).length;
console.log(fox)

let brown=(story.match(/brown/g) || []).length;
console.log(brown);

//Question 4

const string1="We are going to school";
const find="now";
console.log(`The world "${find}" ${string1.includes(find)? "is" :"is not"} in the sentence`);

const string2="The child was sitting on the table before it fell";
const fin="sitting";
console.log(`The world "${fin}" ${string2.includes(fin)? "is" :"is not"} in the sentence`);

//Question 5

let one="wonderful";
let view=one.toUpperCase();
console.log(view)

let two="amaizing";
let outcome=two.toLowerCase();
console.log(outcome);

let three="BEneath";
let out=three.toLowerCase();
console.log(out);

const four="A beautiful wedding";
const or =four.split(" ")
.map(w=>w[0].toUpperCase() + w.substring(1).toLowerCase())
.join (" ");
console.log(or)

