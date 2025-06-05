console.log("=== Arithmetic Operators ===");
let a = 10, b = 3;
console.log("a + b =", a + b);       
console.log("a - b =", a - b);       
console.log("a * b =", a * b);     
console.log("a / b =", a / b);      
console.log("a % b =", a % b);       
console.log("a ** b =", a ** b);     
a++;
console.log("a++ =", a);            
b--;
console.log("b-- =", b);            

console.log("\n=== Assignment Operators ===");
let x = 5;
x += 3; console.log("x += 3:", x);   
x -= 2; console.log("x -= 2:", x);   
x *= 2; console.log("x *= 2:", x);   
x /= 4; console.log("x /= 4:", x);   
x %= 2; console.log("x %= 2:", x);   
x **= 3; console.log("x **= 3:", x);

console.log("\n=== Comparison Operators ===");
let p = 10, q = "10";
console.log("p == q:", p == q);     
console.log("p === q:", p === q);  
console.log("p != q:", p != q);     
console.log("p !== q:", p !== q);   
console.log("p > 5:", p > 5);       
console.log("p < 5:", p < 5);       
console.log("p >= 10:", p >= 10);   
console.log("p <= 9:", p <= 9);   

console.log("\n=== Logical Operators ===");
let isTrue = true, isFalse = false;
console.log("true && false:", isTrue && isFalse);       
console.log("true || false:", isTrue || isFalse);   
console.log("!true:", !isTrue);                     

console.log("\n=== Bitwise Operators ===");
let m = 5, n = 3;
console.log("5 & 3:", m & n);   
console.log("5 | 3:", m | n);   
console.log("5 ^ 3:", m ^ n);   
console.log("~5:", ~m);         
console.log("5 << 1:", m << 1); 
console.log("5 >> 1:", m >> 1); 
console.log("5 >>> 1:", m >>> 1); 

console.log("\n=== Ternary Operator ===");
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Age Check:", result); 

console.log("\n=== Type Operators ===");
let str = "Hello";
console.log("typeof str:", typeof str);       
console.log("typeof age:", typeof age);       
console.log("typeof isTrue:", typeof isTrue); 
console.log("[] instanceof Array:", [] instanceof Array); 
console.log("str instanceof String:", str instanceof String); 

