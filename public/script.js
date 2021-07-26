"use strict";
// const anchor = document.querySelector('a')!;
// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)
// const form = document.querySelector('form')!;
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes ${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
console.log(invOne);
console.log(invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invOne.client = 'yoshi';
invTwo.amount = 400;
console.log(invOne, invTwo);
console.log(invoices);
const form = document.querySelector('.new-item-form'); //type casting
// console.log(form.children);
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
