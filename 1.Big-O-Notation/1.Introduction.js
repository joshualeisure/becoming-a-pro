// Allows us to talk formally about how the runtime of an algorith grows as the inputs grow

// We say that an algorithm is O(f(n)) if the number of simple operations the computer has to
// is eventually less than a constant times f(n), as n increases

// f(n) could be ....
// linear (f(n) = n)
// quadratic (f(n) = n^2)
// constant (f(n) = 1)
// etc...

// ------------------------------------- //

// Simplifying Big O expressions
  // Constants don't matter O(2n) -> O(n), O(500) -> O(1), O(13n^2) -> O(n^2)
  // Smaller terms dont matter O(n + 10) -> O(n), O(n^2 + 5n + 8) -> O(n^2)
  // Big O shorthands
    // arithmetic operations are constant 
    // variable assigment is constant 
    // accessing elements in an array (by index) or object (by key) is constant 
    // In loop, complexist is the length of the loops times the complexist of whatever happens inside loop
