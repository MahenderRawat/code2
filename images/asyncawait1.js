// console.log('person1 : shows ticket');
// console.log('person2 : shows ticket');

// const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('ticket');
//     })
// },5000);

// const getPopcorn = promiseWifeBringingTickets.then((t)=>{
//     console.log('husband: we should go in');
//     console.log('wife: no i am hungry');
//     return new Promise((resolve,reject)=> resolve(`${t} with popcorn`));
// });

// const getButter = getPopcorn.then((t)=>{
//     console.log('wife: I need butter on my popcorn');
//     return new Promise((resolve,reject)=> resolve(`${t} and butter`));
// });

// getButter.then((t)=> console.log(t));

// console.log('person4 : shows ticket');
// console.log('person5 : shows ticket');

// ABOVE CODE IN ASYNC AWAIT WAY

console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const preMovie = async()=>{

    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');
        },3000 );
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve('Popcorn'));

    const getButter = new Promise((resolve,reject)=>resolve('Butter'));

    const getColdDrinks = new Promise((resolve,reject)=>resolve('ColdDrink'));

    let ticket = await promiseWifeBringingTickets;

    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    let butter = await getButter;

    console.log(`husband: i got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('thank you for the reminder');

    let colddrink = await getColdDrinks;

    console.log('wife: wait we forgot cold drinks');
    console.log(`husband: yaa i got some ${colddrink} in advance, lets go now`);


    return ticket;
}

preMovie().then((m)=>console.log(`person3 : shows ${m}`));

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');
