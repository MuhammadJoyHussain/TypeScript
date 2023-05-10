1. What is TypeScript, and how is it different from JavaScript?

Ans: TypeScript is a superset of JavaScript that adds optional static typing and other features to JavaScript. It was developed by Microsoft and released in 2012.

JavaScript is a dynamic language, which means that variables can hold any type of value and the types can change at runtime. In contrast, TypeScript allows developers to define the types of variables, function parameters, and return values at compile-time. This provides benefits such as catching type-related errors earlier in the development process, improved tooling support, and better code readability and maintainability.

In addition to static typing, TypeScript also includes other features that are not present in JavaScript, such as interfaces, classes, and enums. These features make it easier to write and manage larger, more complex codebases.

TypeScript code is compiled into JavaScript code, which means that it can run on any platform that supports JavaScript. This makes it a popular choice for web and mobile app development, as well as for building server-side applications with Node.js.

2. Can you explain the difference between "interface" and "type" in TypeScript?

Ans: In TypeScript, both interface and type are used to define shapes of objects, but they have some differences in their syntax and semantics.

interface: An interface is a contract that defines the structure of an object. It can only define the shape of an object and cannot include implementation details or initialization logic.

type:  A type is a way of defining a type alias for an existing type. It allows you to define a custom name for a type, and reuse it throughout your codebase.

3. Can you give an example of how to use generics in TypeScript?
Ans: Generics allow you to define functions, classes, and interfaces that can work with a variety of data types, rather than a single specific data type. This can make your code more reusable and flexible.

function reverse<T>(arr: T[]): T[] {
     const len = arr.length;

     for (let i = 0; i < len / 2; i++) {
         const temp = arr[i];
         arr[i] = arr[len - 1 - i];
         arr[len - 1 - i] = temp;
     }

     return arr;
 }

 const str = ['a', 'b', 'c', 'd'];
 const rev = reverse(str);

4. What is the difference between an "unknown" and "any" type in TypeScript?
Ans: In TypeScript, both unknown and any are used to represent values of any type. However, there are some key differences between the two types.

The any type is used to indicate that a value can be of any type. When a variable is of type any, you can call any property or method on it without getting a type error, and TypeScript won't perform any type checking on the value. This means that you lose some of the type safety that TypeScript provides, since you can't be sure what type the value actually is.

On the other hand, the unknown type is used to indicate that a value is of an unknown type. When a variable is of type unknown, you can't call any property or method on it without first checking its type using a type guard. This means that you have to perform some type checking before you can use the value, but it also means that you can be more confident in the type safety of your code.

5. What is the "as" keyword used for in TypeScript?
Ans: "as" keyword allows us to tell the TypeScript compiler that we know the type of a value better than it does.

Type assertions are a way to override TypeScript's static type checking and treat a value as a different type than the one TypeScript inferred. This can be useful in cases where you know more about the type of a value than TypeScript can determine through type inference, or when you want to convert a value from one type to another.