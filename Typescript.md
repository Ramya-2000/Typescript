 ##  TYPESCRIPT  
* TypeScript is a superset of JavaScript, meaning that it does everything that JavaScript does, but with some added features. 
* It has a single open-source compiler and is developed mainly by a single vendor: Microsoft.
* Browser's can't execute typescript.Example node.js can't execute typescript. 

**Why typescript?**
* The main reason for using TypeScript is to add static typing to JavaScript.
* Static typing means that the type of a variable cannot be changed at any point in a program.
* The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient.
* When writing code in typescript is javacsript but you didn't write that javascript code you wrote typescript code with all new features and all the advantages and we get normal javascript code.

 ## TYPESCRIPT
**CORE TYPES** 
* Typescript enables us to write our own types which javascript already knows and ts all the supports.
* One of the core type we work with bot ts and js is Number.
## NUMBER
* There is no special type for integers,floats ,numbers with or without decimal are all considered as Number type.
* Other programming languages have special integer type,float type but both js and ts doesn’t have it.
## STRING
* Text that we define in three ways like: single quotes,double quotes and backticks.
## STRING 
* Values that would be true 0r false. But in javascript there will be truthy and falsy value.

## Type inference
* Type inference is used to provide type information when there is no explicit type annotation. For example, in this code

```ts
let helloworld="hello world"
    let helloworld:string
```

## OBETCT
* The fundamental way that we group and pass around data is through objects. In TypeScript, we represent those through object types

```ts
function greet(person: { name: string; age: number }) {
  return "Hello " + person.name;
}
```
## ARRAY TYPE
* A TypeScript array is an ordered list of data. To declare an array that holds values of a specific type, we use syntax:
```ts
let skill = skills[0];
console.log(typeof(skill));
```

**Array properties and methods**
* TypeScript arrays can access the properties and methods of a JavaScript. For example,  the length property to get the number of element in an array:
```ts
let series = [1, 2, 3];
console.log(series.length); // 3
```
## Tuples
* Array consists of values of homogeneous (same) types but sometimes when we need to store a collection of a different types values in a single variable, then we will go with Tuples.
```ts
Syntax:
let tuple_name = [val1, val2, val3, ...val n];  

Example:
let arrTuple = [501, "welcome", 505, "Mohan"];  
console.log(arrTuple);
```

## Enums
* Enums are one of the few features TypeScript has which is not a type-level extension of JavaScript.
* Enums allow a developer to define a set of named constants. 
* Using enums can make it easier to document intent, or create a set of distinct cases. TypeScript provides both numeric and string-based enums.
**Numeric enum**
```ts
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
```

**String enum**
* In a string enum, each member has to be constant-initialized with a string literal, or with another string enum member.
```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
```
### The any Type:
TypeScript any type allows you to store a value of any type.
##### Why we use any  in TypeScript:
Special type any is used to tell TypeScript that a variable can be of any type.
### Union Type:
* Typescript a union type variable is a variable in which can store multiple type of values(i.e. number,string etc)
* Variables are defined using the pipe ( '|' ) symbol between the types.

```js
let myVar: string | number; //myVar can store string and number types
```

### Literal Types:
There are three sets of literal types available in TypeScript today
* strings 
* numbers
* booleans
By using literal types you can allow an exact value which a string, number, or boolean must have.
### Literal Narrowing:
When you declare a variable via var or let, you are telling the compiler that there is the chance that this variable will change its contents.
### String Literal Types:
In practice string literal types combine nicely with union types, type guards, and type aliases.

### Numeric Literal Types:
TypeScript also has numeric literal types, which act the same as the string literals
### Boolean Literal Types:
Typescript also has boolean literal types you might use these to constrain object values whose properties ar interrelated.















