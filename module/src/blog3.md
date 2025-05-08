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