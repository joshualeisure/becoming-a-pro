// Arrays (orderderd lists)

let names = ["Michael", "Melissa", "Andrea"];

let values = [true, {}, [], 2, "awesome"];

// When to use arrays
// -- When you need order
// -- When you need fast access / insertion and removal (sort of....)

// Big O of Arrays
// -- Insertion - It depends....
// -----adding to end (push) - O(1)
// -----adding to start (unshift) - O(n) -> have to move index over for each element
// -- Removal - It depends....
// -----remove from end (pop) - O(1)
// -----remove from start (shift) - O(n) -> have to move index over for each element
// -- Searching - O(N)
// -- Access - O(1)
// -----arr[1] -> ez
// -- Let's see what we mean by that!

// Big O Array Operations
// -- push -  O(1)
// -- pop -  O(1)
// -- shift -  O(N)
// -- unshift-   O(N)

// -- concat -   O(N) --- merges 2 or more array
// -- slice -  O(N) --- returns a shallow copy
// -- splice -   O(N) --- remove/add elements at beginning, middle, or end

// -- sort -  O(N * log N) --- slowest
// -- forEach/map/filter/reduce/etc. -  O(N)

// Limitations of Arrays
// -- Inserting at the beginning is not as easy as we might think!
// --> There are more efficient data structures for that!
