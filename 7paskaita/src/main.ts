
type ListNode<T> = {
  data: T,
  next: ListNode<T> | null
};

type ForEachCallback<T> = (value: T) => void;


// 1.
class List<Type> {
  // 2.
  private head: ListNode<Type> | null;

  private tail: ListNode<Type> | null;

  // 2.
  constructor(initialNode?: ListNode<Type>) {
    if (initialNode !== undefined) {
      this.head = initialNode;
      this.tail = initialNode;
    } else {
      this.head = null;
      this.tail = null;
    }
  }

  private addFirstElement = (node: ListNode<Type>) => {
    this.head = node;
    this.tail = node;
  }

  // 3.
  public addNodeStart = (node: ListNode<Type>): void => {
    if (this.head === null) {
      this.addFirstElement(node);
    } else {
      node.next = this.head;
      this.head = node;
    }
  };

  // 4.
  public addNodeEnd = (node: ListNode<Type>): void => {
    if (this.tail === null) {
      this.addFirstElement(node);
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  // 5.
  public forEach = (callback: ForEachCallback<Type>): void => {
    if (this.head === null) return;

    let currentNode: ListNode<Type> = this.head;

    while (true) {
      callback(currentNode.data);
      if (currentNode.next === null) break;
      currentNode = currentNode.next;
    }
  };
}

// 1.
const stringNode1: ListNode<string> = { data: 'labas', next: null };
const stringNode2: ListNode<string> = { data: 'vakaras', next: stringNode1 };

// 2. | 3. | 5.
const stringList: List<string> = new List();

const numberNode: ListNode<number> = { data: 5, next: null };
const numberList: List<number> = new List(numberNode);

// 3.
const stringNodeToAdd1: ListNode<string> = { data: 'Serbentautas', next: null };
const stringNodeToAdd2: ListNode<string> = { data: 'Vardas', next: null };
const stringNodeToAdd3: ListNode<string> = { data: 'Mano', next: null };

// 4.
const numberNodeToAdd1: ListNode<number> = { data: 1, next: null };
const numberNodeToAdd2: ListNode<number> = { data: 2, next: null };
const numberNodeToAdd3: ListNode<number> = { data: 3, next: null };


console.group('1. Sukurkit?? s??ra??o mazgo strukt??r?? ListNode, bet kokiam duomen?? tipui');
{
  console.log({
    listNode1: stringNode1,
    listNode2: stringNode2,
  });
}
console.groupEnd();

console.group('2. Sukurkite s??ra??o klas?? List');
{
  console.log('Tu??ias string s??ra??as');
  console.log(stringList);

  console.log('number s??ra??as');
  console.log(numberList);
}
console.groupEnd();

console.group('3. Sukurkite metod?? prid??ti s??ra??o elementui ?? s??ra??o priek??.');
{
  console.log('String s??ra??as');
  console.log(stringList);

  console.log('Pridedamas Mazgas 1', stringNodeToAdd1);
  stringList.addNodeStart(stringNodeToAdd1);
  console.log('S??ra??as po prid??jimo', { ...stringList });

  console.log('Pridedamas Mazgas 2', stringNodeToAdd2);
  stringList.addNodeStart(stringNodeToAdd2);
  console.log('S??ra??as po prid??jimo', { ...stringList });

  console.log('Pridedamas Mazgas 3', stringNodeToAdd3);
  stringList.addNodeStart(stringNodeToAdd3);
  console.log('S??ra??as po prid??jimo', { ...stringList });
}
console.groupEnd();

console.group('4. Sukurkite metod?? prid??ti s??ra??o elementui ?? s??ra??o priek??.');
{
  console.log('String s??ra??as');
  console.log(numberList);

  console.log('Pridedamas Mazgas 1', numberNodeToAdd1);
  numberList.addNodeEnd(numberNodeToAdd1);
  console.log('S??ra??as po prid??jimo', { ...numberList });

  console.log('Pridedamas Mazgas 2', numberNodeToAdd2);
  numberList.addNodeEnd(numberNodeToAdd2);
  console.log('S??ra??as po prid??jimo', { ...numberList });

  console.log('Pridedamas Mazgas 3', numberNodeToAdd3);
  numberList.addNodeEnd(numberNodeToAdd3);
  console.log('S??ra??as po prid??jimo', { ...numberList });
}
console.groupEnd();

console.group('5. Sukurkite metod?? List.forEach klas??je List, kuris vykdyt?? parametru perduot?? funkcij??');
{
  console.log('string s??ra??o spausdinimas');
  stringList.forEach((str) => console.log(str));

  const stringArr: string[] = [];
  const putInStringArr = (x: number): void => {
    stringArr.push(String(x));
  };

  console.log('number s??ra??o spausdinimas');
  numberList.forEach(putInStringArr);
  const numberListStringRepresentation: string = stringArr.join(' ??? ');
  console.log(numberListStringRepresentation);
}
console.groupEnd();
