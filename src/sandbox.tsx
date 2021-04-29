export default function main() {
  //let greet: Function;
  // example 1
  let greet: (a: string, b: string) => void;
  greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
  };
  greet('jerry', 'hello');
  // example2

  let calc: (a: number, b: number, c: string) => number;

  calc = (numOne: number, numTwo: number, action: string) => {
    if (action === 'add') {
      return numOne + numTwo;
    } else {
      return numOne - numTwo;
    }
  };
  console.log(calc(10, 3, 'subtract'));
  // example3
  let logDetails: (obj: { name: string; age: number }) => void;
  type person = { name: string; age: number };
  logDetails = (ninja: person) => {
    console.log(`${ninja.name} is a`);
  };
}
