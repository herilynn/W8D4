function sum(arg1, arg2){ //don't actuallys arg here
  // console.log(arg1); 
  // console.log(arg2);
  let result = 0;
  for (let i = 0; i < arguments.length; i++){
    result += arguments[i];
  };
return result;
}

// let apple = sum(1, 2, 3, 4, 5);
// console.log(apple);
// console.log(sum());
// console.log(sum(1, 2, 3, 4, 5));

//..............

function sum2(a, b, c, d, e){
  return a + b + c + d + e;
};
apple = [1, 2, 3, 4, 5]; //represents what input as your 1st param; i.e "a"

console.log(sum2(...apple)); //... in front is syntax; can't explain

//..........
