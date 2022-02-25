// primitive data type (Number, String, Boolean, BigInt, undefined, null and symbol)
var a = 5;
var c = a;
c = 34;

// non-primitive data type (Object : Array and Function)
var obj = { name: 'name' };

// dynamic data type -- change data type with value assign
obj = a;
a = 'hello hello'
console.log(obj);

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