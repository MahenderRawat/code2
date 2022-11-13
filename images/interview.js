const result = async()=>{
    // console.log('a');
    // console.log('b');
    const cDisp = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log('c')),1000});
    });

    const dDisp = new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(console.log('d')),5000});
    });
    // console.log('e');
    // console.log('f');
        
    console.log('a');
    console.log('b');
    let c = await cDisp;
    let d = await dDisp;
    console.log('e');
    console.log('f');

}

result();