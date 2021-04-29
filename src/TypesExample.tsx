export default function TypesExample(): void {
  //explicit types
  let character: string;
  let age: number;
  let isLoggedIn: boolean;

  //arrays
  let ninjas: string[];

  //dissallowed, cannot use before definition
  //ninjas.push('billy');

  //allowed
  ninjas = ['yashi', 'mario'];

  //disallowed
  // ninjas = [{name:"mark",age:12}];
  let mixed: (string | number | boolean)[] = [];
  mixed.push(false);
  mixed.push('test');
  mixed.push(21);
  console.log(mixed);

  let uid: string | number;

  uid = 123;

  let myObject: object;
  myObject = { test: '123', test2: 1234 };
  let ninja: {
    name: string;
    age: number;
    beltColor: string;
  };
  ninja = { name: 'bernie', age: 78, beltColor: 'black' };

  let mixed2: any[] = [];
  mixed2.push(3);
  mixed2.push('marios');
  mixed2.push({ name: 'luigi' });
  console.log(mixed2);
}
//
