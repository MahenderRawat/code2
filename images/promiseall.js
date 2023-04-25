const posts = [
    { title: 'Post One', body: 'This is post one', updateTime: new Date().getTime() },
    { title: 'Post Two', body: 'This is post two', updateTime: new Date().getTime() }
];

function getPost(){
      
    setTimeout(()=>{
        let output='';
        posts.forEach((post,index)=>{
            output += `<li>${post.title }, ${post.updateTime} </li>`;
            document.body.innerHTML=output;
        });
        
    },10);
    
}

function createPost(post){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }
            else{
                reject('Error: Something went wrong');
            }
        },100);   
        });
    }

function deleteLastPost(){
    return new Promise((resolve, reject)=>{

   setTimeout(()=>{
    const success = posts.pop();

        if(success){
            resolve('post deleted successfully');
            getPost();
        }
        else{
            reject('Error deleting post');
        }
    },5000)
    })
}

    //Promise.all

    // const promise1 = Promise.resolve('Hellow World');
    // const promise2 = 10;
    // const promise3 = new Promise((resolve, reject)=>
    // setTimeout(resolve,2000,'Goodbye')
    // );

    // Promise.all([promise1, promise2, promise3]).then(values=>console.log(values));

const updateLastUserActivityTime = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(new Date().getTime());
    },1000);
});

// Promise.all([createPost({title:'Post Three', body: 'this is post three'}),updateLastUserActivityTime,getPost()])
// .then([()=>{getPost()},console.log(updateLastUserActivityTime),])
// .catch()

Promise.all([createPost({title:'Post Three', body: 'this is post three'}), updateLastUserActivityTime])
  .then(([post, activityTime]) => {
    console.log('Post created:', post);
    console.log('Last activity time updated:', activityTime);
    return getPost();
  })
  .then(() => {
    console.log('Posts displayed');
  })
  .catch(error => {
    console.error(error);
  });


deleteLastPost();