class Stack{

    constructor(){
        this.top=-1;
        this.stack=[];
    }

    push(element){
        this.top=this.top+1;
        this.stack[this.top]=element;
    }

    pop(){
        this.stack.pop();
        this.top=this.top-1;
    }

    peek(){
        return this.stack[this.top];
    }

    isEmpty(){
        if(this.top==-1)
            return true;
        
        else
            return false;
        
    }
}
    x=new Stack()
    x.push(1);
    x.push(2);
    x.push(4);
    x.pop();
       
    console.log(x.stack);
    console.log(x.peek());
    console.log(x.isEmpty());
