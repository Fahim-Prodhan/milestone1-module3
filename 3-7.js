class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor (){
        this.head = null;
        this.tail = null;
        this.length = null;
    }

    append(value){
        const newNode = new Node(value)
        // if the linkedList empty
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }{
            // if not empty;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }
    prepend(value){
        const newNode = new Node(value)
        // if the linkedList empty
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode;
        }
    }
    insert(){}
    remove(){}
    print(){
        let temp = this.head;

        while(temp !== null){
            console.log(temp.value);
            temp = temp.next
        }
    }
    
}

const linkedList = new LinkedList();
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)

linkedList.prepend(3);
linkedList.prepend(2);
linkedList.prepend(1);
linkedList.print();
