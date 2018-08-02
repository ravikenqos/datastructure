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


class CircularLinkedList{

    constructor(){
        this.head = null
        this.size = 0; 
		this.current = null;
		//this.head.connect(this.head);
		
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
	
  insertAfter(currentNode, item){
		try{
			console.log(currentNode);			
			let nodes = new Nodes(item);
			console.log(nodes);
			let current = this.head;
			let i = 0;
			 while(current.next !== null){
				if(current.data === currentNode){
					nodes.next = current.next
					current.next = nodes;
					return
				} else {
					current = current.next;	
				}
				 
			} 
			
			if(current.next === null){
				current.next = nodes;
			}			

		}catch(err){
			console.error(err);
		}        
    }
	
	
   firstNode(){
	    this.current = this.head.data;
        return this.head.data;
    }
 
    lastNode(){
        try{    
            if(this.chkSize() > 0){
                let current = this.head;
                let node;
                while(current.next != null ){
                    current = current.next;
                    if(current.next === null){
                        node = current.data;
                    }
                }

				
                return node;
            }
        }catch(err){

        } 
    }  
	
	getcurrent(){
		return this.current;
	}
	
	getNext(){
		let current = this.head;
		
		while(current.next != null){
			if(current.data == this.current){
				let node = this.current = current.next.data;
				return node;			
			} else {
				current = current.next;
			}	
					
		}
		
	}

     
 }



  let list = new CircularLinkedList();

 list.add(10);  
 list.add(20);
 list.add(30);
 list.add(40);
 list.current = 40;
 
//console.log(list.current);
// console.log(list.firstNode());
 console.log(list.getcurrent());
 list.insertAfter(list.getcurrent(), 50);
console.log(list);


	
	
	
	
	