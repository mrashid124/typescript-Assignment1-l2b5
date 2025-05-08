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