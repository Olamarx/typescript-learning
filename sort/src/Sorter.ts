interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}
export class Sorter {
  constructor(public collection: Sortable ) {}

    sort(): void {
      const { length } = this.collection
      // this.collection.?
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            // this.collection === number[]
            if (this.collection.compare(j, j+1)) {
            this.collection.swap(j, j+1);
          }
        }
       }
    }
}
