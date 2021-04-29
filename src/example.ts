export default function example() {
  let names = ['luigi', 'mario', 'peach'];

  names.push('toad');

  let numbers = [10, 20, 30];
  numbers.push(25);

  let mixed = ['ryu', 'ken', 11, 12];
  //it still has to be an array, but the values are anything

  //the basic type cannoy be recast
  //mixed = 'test'

  //this isnt allowed since theres no objects in the array
  //mixed.push({guy:'shrek'});

  //these are all allowed
  //since declared array has mixed types
  mixed.push('shrek');
  mixed.push(13);
  mixed[1] = 2;

  //not allowed due to types being strict for these arrays
  // names.push(11);
  // numbers.push('warios');

  let person = {
    age: 31,
    name: 'peter',
    job: {
      title: 'engineer',
    },
  };
  //allowed
  person = {
    age: 21,
    name: 'shrek',
    job: {
      title: 'swampman',
    },
  };

  //disallowed
  /*
    person = {
        age:10,
        name:"person",
        job:{
            title:undefined
        }
    }*/

  // Functions
  let greet: Function;

  greet = () => {
    console.log('Absdasconffdfs');
  };

  const add = (a: number, b: number, c: number | string = 11): void => {
    console.log(a + b);
    console.log(c);
  };

  add(3, 4, 11);

  const minus = (a: number, b: number): number => {
    return a - b;
  };

  let result = minus(10, 7);
  console.log(result);

  // Type Alias
  type StringOrNum = string | number;
  type objWithName = { name: string; uid: StringOrNum };
  const logDetails = (uid: StringOrNum, item: string): void => {
    console.log(`${item} has a uid of ${uid}`);
  };

  const greetMe = (user: objWithName): void => {
    console.log(`${user.name} says hello`);
  };

  // Function types and typing
  //let greet: Function;
  // example 1
  let greet2: (a: string, b: string) => void;
  greet2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
  };
  greet2('jerry', 'hello');
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
  let logDetailsTwo: (obj: { name: string; age: number }) => void;
  type person = { name: string; age: number };
  logDetailsTwo = (ninja: person) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
  };
  logDetailsTwo({ name: 'peter', age: 21 });
}
