//PROMISE.ALL in ASYNC AWAIT

console.log('person1 : shows ticket');
console.log('person2 : shows ticket');

const preMovie = async()=>{

    const promiseWifeBringingTickets = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket');
        },3000 );
    });

    const getPopcorn = new Promise((resolve,reject)=>resolve('Popcorn'));

    const getCandy = new Promise((resolve,reject)=>resolve('Candy'));

    const getColdDrinks = new Promise((resolve,reject)=>resolve('ColdDrink'));

    let ticket = await promiseWifeBringingTickets;

    let [popcorn, Candy, ColdDrink] = await Promise.all([getPopcorn, getCandy, getColdDrinks]);

    console.log(`Now we have ${popcorn}, ${Candy}, ${ColdDrink}`);

    return ticket;

}

preMovie().then((m) => console.log(`person3 : shows ${m}`));

console.log('person4 : shows ticket');
console.log('person5 : shows ticket');

//FOR ERROR HANDLING(use of TRY & CATCH)

const preMovie1 = async()=>{

    const promiseWifeBringingTickets1 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject('ticket');
        },6000 );
    });

    let ticket
    try{
        ticket = await promiseWifeBringingTickets1;
    } catch(e){
        ticket = 'sad face';
    }

    return ticket;

}
preMovie1().then((e)=> console.log(`person X : shows ${e}`));

// PRACTICAL EXAMPLES OF ASYNC AWAIT- TESTING

const testUserForm = async() =>{

    const loadUserForm = new Promise((resolve,reject)=> {
        setTimeout(()=> resolve('page loaded'), 3000);
    });

    const enterUserName = new Promise((resolve,reject)=>{
        setTimeout(()=> resolve('user entered'),4000);
    });

    const verifyUserDetails = () =>{

    }

    await loadUserForm;
    await enterUserName;
    const testResult = verifyUserDetails();

    return testResult;
}