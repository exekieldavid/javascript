// input [1, 2, 3, 4, 5] ; [1,2,3] ; [5, 1, 2]
// output [5, 4, 3, 2, 1] ; [3,2,1] ; [2, 1, 5]

// Variables
// Function

let def = [3, 2, 1];
let abc = [1, 2, 3, 4, 5]; 
let input = [ 7, 2, 1, 5, 2 ]; 
let penny = [ 'dog' ];

// new version
let shit = x => {
  if (Array.isArray(x)) {

    // 
    for (let i = x.length - 1; i >= 0; i--)
          console.log(x[i])
         
    console.log('\n');
    return 'abc';
  }
  
  return 1;
}

let a = [1, 2, 6, 12, 35, 49];

let c = [1,2,3];

// let target = 8;

// return true if 6 is in array,
// return false otherwise

/* weapons:
    - Variables
    - Functions
    
    - If
    - For Loop
*/

let binarySearch = (arr, target) => {
  if (Array.isArray(arr)) {
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) return true;
    } 
                  
    return false;  
  }
}

let b = [2, 3, 4, 5, 6, 8, 10];

let target = 7;

let binarySearch2 = (arr, target) => {
  let begin = 0;
  let end   = arr.length;
  
  while (begin <= end) {
    let mid = (begin + end) / 2;
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else if (arr[mid] < target) begin = mid + 1;
  }
  
  return false;
}


console.log(binarySearch(b, target));

// google binary search visualization


// Time Complexity: O(log n)

// console.log(binarySearch(a, target));
// console.log(binarySearch(c, target));

// scoping


// Make good notes for syntax
// Stick with one coding language

// Make notes on (types)Strings, Booleans, Numbers, Integers, Arrays, Objects
// Understand if statement
// Understand For Loops
// Comments

//https://github.com/stampedethegoat/main/wiki/Computers

//console.log(reverse(penny));



// 1. Data Structures and Algorithms
// 2. Projects
// 3. Behavioral

// End goal: Get an Interview --> Job

// https://github.com/

