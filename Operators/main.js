console.log("=== Arithmetic Operators ===");
let a = 10, b = 3;
console.log("a + b =", a + b);       // 13
console.log("a - b =", a - b);       // 7
console.log("a * b =", a * b);       // 30
console.log("a / b =", a / b);       // 3.333...
console.log("a % b =", a % b);       // 1
console.log("a ** b =", a ** b);     // 1000
a++;
console.log("a++ =", a);             // 11
b--;
console.log("b-- =", b);             // 2

console.log("\n=== Assignment Operators ===");
let x = 5;
x += 3; console.log("x += 3:", x);   // 8
x -= 2; console.log("x -= 2:", x);   // 6
x *= 2; console.log("x *= 2:", x);   // 12
x /= 4; console.log("x /= 4:", x);   // 3
x %= 2; console.log("x %= 2:", x);   // 1
x **= 3; console.log("x **= 3:", x); // 1

console.log("\n=== Comparison Operators ===");
let p = 10, q = "10";
console.log("p == q:", p == q);     // true (type coercion)
console.log("p === q:", p === q);   // false
console.log("p != q:", p != q);     // false
console.log("p !== q:", p !== q);   // true
console.log("p > 5:", p > 5);       // true
console.log("p < 5:", p < 5);       // false
console.log("p >= 10:", p >= 10);   // true
console.log("p <= 9:", p <= 9);     // false

console.log("\n=== Logical Operators ===");
let isTrue = true, isFalse = false;
console.log("true && false:", isTrue && isFalse);   // false
console.log("true || false:", isTrue || isFalse);   // true
console.log("!true:", !isTrue);                     // false

console.log("\n=== Bitwise Operators ===");
let m = 5, n = 3;
console.log("5 & 3:", m & n);   // 1
console.log("5 | 3:", m | n);   // 7
console.log("5 ^ 3:", m ^ n);   // 6
console.log("~5:", ~m);         // -6
console.log("5 << 1:", m << 1); // 10
console.log("5 >> 1:", m >> 1); // 2
console.log("5 >>> 1:", m >>> 1); // 2

console.log("\n=== Ternary Operator ===");
let age = 20;
let result = (age >= 18) ? "Adult" : "Minor";
console.log("Age Check:", result); // Adult

console.log("\n=== Type Operators ===");
let str = "Hello";
console.log("typeof str:", typeof str);       // string
console.log("typeof age:", typeof age);       // number
console.log("typeof isTrue:", typeof isTrue); // boolean
console.log("[] instanceof Array:", [] instanceof Array); // true
console.log("str instanceof String:", str instanceof String); // false

