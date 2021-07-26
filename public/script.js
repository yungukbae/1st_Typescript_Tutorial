"use strict";
// const anchor = document.querySelector('a')!;
// // if(anchor){
// //     console.log(anchor.href)
// // }
// console.log(anchor.href)
// const form = document.querySelector('form')!;
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
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
invoices.forEach(inv => {
    // console.log(inv.client, inv.details, inv.amount, inv.format()); => error, details is private
    // inv.client = 'something else'; => error, client is read only
    console.log(inv.client, inv.amount, inv.format());
});
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
