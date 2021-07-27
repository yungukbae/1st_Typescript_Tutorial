// interface IsPerson{

//     name: string;
//     age: number;
//     speak(a: string): void;
//     spend(a: number): number;

// }

// const me: IsPerson = {
//     name: 'shaun',
//     age: 30,
//     speak(text: string): void {
//         console.log(text);
//     },
//     spend(amount: number): number{
//         console.log('I spent', amount);
//         return amount
//     }
// };

// const greetPerson = (person: IsPerson) => {
//     console.log('hello',person.name)
// }

// greetPerson(me);
// console.log(me);


import {Invoice} from './classes/invoice.js'
import { ListTemplates } from './classes/listTmeplates.js';
import {Payment} from './classes/payment.js'
import {HasFormatter} from './interfaces/HasFormatter.js'

const form = document.querySelector('.new-item-form') as HTMLFormElement;  //type casting
// console.log(form.children);

//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    let values: [string, string, number];
    values = [tofrom.value, details.value, amount.valueAsNumber]

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(...values)
    }else{
        doc = new Payment(...values)
    }

    console.log(
        doc
    )

    list.render(doc, type.value, 'end');
})

// tuples
let arr = ['ryu',25,true]
arr[0] = false;
arr[1] = 'yoshi';
arr = [30, false, 'yoshi'];

let tup: [string, number, boolean] = ['ryu',25, true];
tup[0] = 'ken';
tup[1] = 30;

// let student: [string, number];
// student = [234234, 'ken'];
// student = ['chun-li',223423];