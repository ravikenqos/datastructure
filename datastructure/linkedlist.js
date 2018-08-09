class Nodes {
    constructor(data){
        this.data = data;
        this.next = null;
    }

    getKey(){
        return this.data;
    }

    getNext(){
        return this.next;
    }


}


// let  nodes = new Nodes(10);
// console.log(nodes);

//  function Nodef(value){
//      this.data = value;
//      this.next = null;
//  }
 
//  let node = new Nodef(10);
 
//  console.log(node);

 class LinkedList{

    constructor(){
        this.head = null
        this.size = 0; 
    }
    
    isempty(){
        return this.head === null;
    }

    chkSize(){

        let current = this.head;
        let count = 0;
        while(current !==null ){
            count++;
            current = current.next
        }
        return count;
    }

     
    add(data){

        let  nodes = new Nodes(data);


        if(this.isempty()){
            this.head = nodes;
            this.size++;
            return
        }  
        
        let current = this.head;
        while(current.next !== null ){
            current = current.next;
        }
        
        current.next = nodes;

        this.size++; 

    }
     
 }

  let list = new LinkedList();

 list.add(10);  
 list.add(20);
 list.add(30);  

 console.log(list);

console.log(list.chkSize());

