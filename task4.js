let a = 1, b = 1;

let c = ++a; // value of c = 2
let d = b++; // value of d = 1
//
let a = 2;

let x = 1 + (a *= 2);// x is 5
//
"" + 1 + 0 // "10"
"" - 1 + 0 // -1
true + false // 1
6 / "3" //2
"2" * "3" // 6
4 + 5 + "px" // "9px"
"$" + 4 + 5// "$45"
"4" - 2 // 2
"4px" - 2 // Nan
7 / 0 // Infinity
"  -9  " + 5// "  -9  5"
"  -9  " - 5//-14
null + 1//1
undefined + 1// Nan
" \t \n" - 2// -2


//Answer
let a = prompt("First number?", "1");
let b = prompt("Second number?", "2");

alert(a + b); // 12