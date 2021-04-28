export default function example() {
    let names = ['luigi', 'mario', 'peach'];
    names.push('toad');
    let numbers = [10, 20, 30];
    numbers.push(25);
    let mixed = ['ryu', 'ken', 11, 12,];
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
        name: "peter",
        job: {
            title: "engineer"
        }
    };
    //allowed
    person = {
        age: 21,
        name: "shrek",
        job: {
            title: "swampman"
        }
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
}
//# sourceMappingURL=example.js.map