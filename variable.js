// primitive data type (Number, String, Boolean, BigInt, undefined, null and symbol)
var a = 5;
var c = a;
c = 34;

// non-primitive data type (Object : Array and Function)
var obj = { name: 'name' };

// dynamic data type -- change data type with value assign
obj = a;
a = 'hello hello'

// True/False
'3' === 3;  // false
0 === false;  // false
0 === true;  // false

'3' == 3;  // true
'' == 0;   // true
'0' == false;    // true
0 == false;  // true
true == -5; // true

true == 'true';  // false
undefined; // false // value undefined, while no value assigned
null; // false      // value null, only while assign null
[0]; // true
var ar = [];
var arr = [];
var arr2 = arr; // storing reference
a == true; // false
a == false; // true
!a; // false
// implicit conversion
ar == arr2; // false
arr == arr2; // true

varUp = 5;  // will work Hoisting
var varUp = 'sfd';

data = 1;   // will work GLOBAL Leaking
// letUp = 4;  // ReferenceError: Cannot access 'letUp' before initialization  // for 'let' and 'const'
let letUp = 1;
letUp = 2;
// closure or encapsulation
function increase() {
    let count = 0;
    return () => ++count;
}
var money = increase(); // money = () => ++count    // with a count ref as private variable
var age = increase();   // age = () => ++count
money(); money(); money(); money(); money(); money(); money(); money(); money(); money(); money();  // = 11
age(); age(); age(); age(); age(); age(); age();    // = 7

// count;  // not accessible, Local variable

// callback function
function operate(num1, num2, operation) {
    return operation(num1, num2);
}
function add(num1, num2) {
    return num1 + num2;
}
function diff(num1, num2) {
    return num1 - num2;
}

var arrD = [1, 2, 3, 4];
delete arrD[2]; // returns true     // not appropriate
arrD;    // [1, 2, empty, 4]