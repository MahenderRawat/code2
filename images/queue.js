class Queue{

    constructor(){
        this.front = -1;
        this.rear = -1;
        this.queue=[];
    }

    enqueue(element){
        if(this.front ==-1){
            this.front = this.front+1;
            this.rear = this.rear+1;           
        }
        else{
            this.rear = this.rear+1;
        }
        this.queue[this.rear]=element;
    }

    dequeue(){
        if(this.front == this.rear){
            this.queue[this.front]=undefined;
            this.front=-1;
            this.rear=-1;
        }
        else{   
            this.queue[this.front]=undefined;
            this.front=this.front+1;
        }
    }

    isEmpty(){
        if(this.front && this.rear == -1){
            return true;
        }
        else{
            return false;
        }
    }
}

obj=new Queue();
obj.enqueue(2);
obj.enqueue(4);
obj.enqueue(7);
console.log(obj.queue, obj.front, obj.rear);
obj.dequeue();
obj.dequeue();

console.log(obj.queue, obj.front, obj.rear);
console.log(obj.isEmpty());