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
