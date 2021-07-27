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

form.addEventListener('submit', (e:Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'invoice'){
        doc = new Invoice(tofrom.value,details.value, amount.valueAsNumber)
    }else{
        doc = new Payment(tofrom.value,details.value, amount.valueAsNumber)
    }

    console.log(
        doc
    )

    list.render(doc, type.value, 'end');
})

//GENERICS    

// const addUID = <T extends {name: string}>(obj: T) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let docOne = addUID({name: 'yoshi', age:40})
// console.log(docOne.age)


// // GENERICS with Interfaces
// interface Resource<T>{
//     uid: number;
//     resourceName: string;
//     data: T;
// }

// const docThree: Resource<object> = {
//     uid:1,
//     resourceName:'person',
//     data:{name: 'shaun'}
// }

// const docFour: Resource<string[]> = {
//     uid:2,
//     resourceName:'shoppingList',
//     data: ['test','milk','toilet roll']
// }


//ENUMS
enum ResourceType{BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface Resource<T> {
    uid:number;
    resourceType: ResourceType;
    data:T;
}

const docOne: Resource<object> = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: {title: 'name of the wind'}
}

const docTwo: Resource<object> = {
    uid:10,
    resourceType: ResourceType.PERSON,
    data: {name:'yoshi'}
}

console.log(docOne,docTwo)