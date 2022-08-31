

let age = 29;
console.log('возвраст', typeof age);

let userName ="Vitya";
console.log ('имя', typeof userName);

let bigNum = 4n;
console.log('огромное число', typeof bigNum);
 
let trueVal = 5>1;
console.log( typeof trueVal);  
console.log( 'истина', trueVal);
let falseVal = 5<1;
console.log( typeof falseVal);
console.log( 'ложь', falseVal);

let city = null;
console.log( city); 
console.log(typeof city); 

let telephone;
console.log(telephone);
console.log(typeof telephone);

let matrix =['1','2','3'];
console.log (typeof matrix);
console.log(matrix);

let matrix2 ={planet:'Earht', system:'Sun'};
console.log(typeof matrix2);
console.log(matrix2);

let spriteSym = Symbol('GG')
console.log(typeof spriteSym)

function calculate (a,b,c){
  let value = a+b;
  let values = value/c;
  console.log(values)
  console.log(typeof calculate)
}
calculate(5,1,2);