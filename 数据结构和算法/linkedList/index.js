import { LinkedList } from './linkedList.js';

let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
console.log(list);
console.log(list.removeAt(0));
console.log(list.removeAt(1));
console.log(list);
list.insert(0,0);
list.insert(2,10);
console.log(list);
console.log(list.toString())

