import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkededList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, 4]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('myString');
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(742);
linkedList.add(-463);
linkedList.add(45);
linkedList.add(82);

linkedList.sort();
linkedList.print();

export function sortingProject() {}
