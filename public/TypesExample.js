export default function TypesExample() {
    //explicit types
    let character;
    let age;
    let isLoggedIn;
    //arrays
    let ninjas;
    //dissallowed, cannot use before definition
    //ninjas.push('billy');
    //allowed
    ninjas = ["yashi", "mario"];
    //disallowed
    //ninjas = [{name:"mark",age:12}];
    let mixed = [];
    mixed.push(false);
    mixed.push("test");
    mixed.push(21);
    console.log(mixed);
    let uid;
    uid = 123;
    let myObject;
    myObject = { test: "123", test2: 1234 };
    let ninja;
    ninja = { name: "bernie", age: 78, beltColor: "black" };
    let mixed2 = [];
    mixed2.push(3);
    mixed2.push("marios");
    mixed2.push({ name: "luigi" });
    console.log(mixed2);
}
//
//# sourceMappingURL=TypesExample.js.map