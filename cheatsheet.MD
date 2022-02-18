Java Script cheatsheet

  # Including JavaScript in HTML Pages
    <script type="text/javascript" src="cheatsheet.js">
      JS code Here
    </script>



  # Attaching an external JS file
    <script src="app.js">

  # Comments
    // Single line comment
    //* Multi line comment */

  # Variables
    var = can be reassigned but only within the scope of the function.
    let = can be reassigned but not re-declared.
    const = cannot be reassigned.

  # Data Types
    1.String - "Hello World"
    2.Number - 123
    3.Boolean - true or false
    4.Object - {name: "John", age: 34}
    5.Array - [1, 2, 3, 4]
    6.Function - function myFunction() { }
    7.Undefined - var x;
    8.Null - var x = null;
    9.Symbol - Symbol( "something" );

  # Arrays
    var myArray = ["John", "Mary", "Peter", "Sally"];
    var fruits = ["Apple", "Banana", "Orange", 1,2,3];

  # Arrays Methods
    1.push() - adds an element to the end of an array
    2.pop() - removes the last element of an array
    3.shift() - removes the first element of an array
    4.unshift() - adds an element to the beginning of an array
    5.splice() - removes elements from an array
    6.slice() - copies elements from an array
    7.indexOf() - returns the index of an element in an array
    8.join() - joins all elements of an array into a string
    9.sort() - sorts the elements of an array
    10.reverse() - reverses the order of the elements of an array
    11.concat() - joins two or more arrays
    12.map() - creates a new array by performing a function on each element of an array
    13.toString() - converts an array to a string
    14.every() - tests whether all elements in an array pass a test
    15.some() - tests whether some elements in an array pass a test
    16.lastIndexOf() - returns the last index of an element in an array
    17.filter() - creates a new array with all elements that pass a test

  # Functions
    function myFunction(parameter1, parameter2) {
      // code goes here
    }
  
  # Operators
    1.Arithmetic Operators
      + - * / %
    2.Comparison Operators
      == != === !== > < >= <=
    3.Logical Operators
      && || !
    4.Assignment Operators
      = += -= *= /= %=
    5.Bitwise Operators
      & | ^ ~ << >> >>>
  
  # If Statements
    if (condition) {
      // return code here
    } else {
      // return code here
    }

  # Loops
    for loop
      for (before loop; condition; after loop) {
        // code here
      }
    
    while loop
      initialization;
        while (condition for loop) {
          // code here
          reintialization;
        }

    do while loop
      initialization;
        do {
          // code here
          reintialization;
        } while (condition for loop);