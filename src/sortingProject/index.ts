class Sorter {
  // number[] and string types restricts the shared methods on each of these types.
  // But the use of 'instance of' ensures that typescript will give full access
  // to all the properties and methods on both strings and arrays when used.
  // 'instance of' is called a typeguard
  constructor(public collection: number[] | string) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        // All of this only works if collection is number[]
        // If collection is an aray of numbers
        if (this.collection instanceof Array) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHandNumber = this.collection[j];
            this.collection[j] = this.collection[j + 1];
            this.collection[j + 1] = leftHandNumber;
          }
        }

        // Only going to work if collection is a string
        // If colleciton is a string, do this logic instead:
        // ~~logic to compare and swap characters
      }
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);

export function sortingProject() {}
