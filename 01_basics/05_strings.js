const name = "sunit"
const repoCount = 50

// console.log(name + repoCount + "Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sunit-hc')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "    Sunit    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sunitanda.vercel.app/sunit%20panda"

console.log(url.replace('%20', '-'))

console.log(url.includes('sunit'))

console.log(gameName.split('-'));