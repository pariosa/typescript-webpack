import example from './example';
import { formData } from './forms';
import main from './sandbox';
import typesExample from './TypesExample';
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = formData(form);
    console.log(data);
});
const person = {};
person.speak;
example();
typesExample();
main();
//# sourceMappingURL=index.js.map