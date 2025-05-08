Typescript problems solving assignment.
Provide an example of using union and intersection types in TypeScript.

Answer:
If you re learning TypeScript, two things you’ll often see are Union and Intersection types. Let’s break them down in easy words.A Union lets a value be one of many types, We use the | symbol for this.
const kgToGram = (value: string | number): string | number | undefined => {
  // do something
};
value can be a string or a number; The function can return a string, a number, or undefined.

On the other hand, An Intersection means the value has to match all types combined.
type Person = { name: string };
type Employee = { id: number };

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Timee",
  id: 1,
};

So, Union and Intersection types are essential tools for writing clean, safe, and powerful code.

What are some differences between interfaces and types in TypeScript?


Answer:
We can use interface and type to describe the shape of data.We use interface when working with objects and classes. On the other hand,We use type when we need to combine many types or make things like unions.
For Interface-
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const p: Person = { name: "John", age: 30 };


We use interface when working with objects or classes. Interfaces are made for this kind of work and can be extend later.

For Type-
type Person = {
  name: string;
  age: number;
};
'Type' can be used with unions (&, |) but we can not extend it later. Type more flexible for complex types.

What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Answer:
We use enum to give names to numbers or strings.It helps us work with fixed choices — like days of the week, directions, colors and so on. For example-
enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

let today = Day.Monday;

enum Direction {
  North,   // 0
  South,   // 1
  East,    // 2
  West     // 3
}

let go = Direction.East;
console.log(go); // Output: 2

Enum uses your own string values.It gives numbers to names. Enums are very useful when you have a list of fixed options.