import { formData } from './forms';
import example from './example';
import typesExample from './TypesExample';

const form = document.querySelector('form')!;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = formData(form);
  console.log(data);
});

const person: any = {};
person.speak;
console.log(person.speak);
console.log("hello")

example();

typesExample();