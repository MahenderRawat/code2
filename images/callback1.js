const posts = [
    { title: 'Post One', body: 'This is post one', createdAt: new Date().getTime()},
    { title: 'Post Two', body: 'This is post man two', createdAt: new Date().getTime()}
];

let intervalId=0;

function getPost(){
    clearInterval(intervalId);    
    intervalId = setInterval(()=>{
        let output='';
        for(let i=0; i<posts.length; i++){
            output += `<li>${posts[i].title} last updated ${(new Date().getTime() - posts[i].createdAt)/1000} seconds ago </li>`
        }
        document.body.innerHTML=output;
    },100)
    
}

function createPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    },2000)
}

function create4thPost(post,callback){
    setTimeout(()=>{
        posts.push({...post, createdAt: new Date().getTime()});
        callback();
    },4000)
}



createPost({title:'Post Three', body:'this is post three'}, getPost);

create4thPost({title:'Post Four', body:'this is post four'}, getPost);

var timer;
var count = 0;
function lastEditedInSecondsAgo(){
    count = 0;
    clearInterval(timer)
    timer=setInterval(()=>{
        count++;
        console.log(count)
    },5000);
}

