export default function main() {
    //let greet: Function;
    // example 1
    let greet;
    greet = (name, greeting) => {
        console.log(`${name} says ${greeting}`);
    };
    greet('jerry', 'hello');
    // example2
    let calc;
    calc = (numOne, numTwo, action) => {
        if (action === 'add') {
            return numOne + numTwo;
        }
        else {
            return numOne - numTwo;
        }
    };
    console.log(calc(10, 3, 'subtract'));
    // example3
    let logDetails;
    logDetails = (ninja) => {
        console.log(`${ninja.name} is a`);
    };
}
//# sourceMappingURL=sandbox.js.map