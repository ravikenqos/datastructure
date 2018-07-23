//  function Nodef(value){
//      this.data = value;
//      this.next = null;
//  }
 
//  let node = new Nodef(10);
 
//  console.log(node);

 class LinkedList{

    constructor(){
        this.head = null
         
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

     
    add(val){
        let newNode = {
            data: val,
            next: null
        }

        if(this.isempty()){
            this.head = newNode;
            return
        }  
        
        let current = this.head;
        while(current.next !== null ){
            current = current.next;
        }
        
        current.next = newNode;
         

    }
     
 }

 let list = new LinkedList();
 list.add(10);  
 list.add(20);
 list.add(30);  

 console.log(list);
 console.log(list.chkSize());