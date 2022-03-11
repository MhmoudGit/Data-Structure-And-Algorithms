/* DATA STRUCTURE */
/* SETS */
// functions has, values, add, remove, union, size, intersect, difference, subset

class Sets {
  constructor() {
    // this will hold the set
    this.collection = [];
  }
  // this method will check for the presence of an element and return true or false
  has = (element) => {
    return this.collection.indexOf(element) !== -1;
  };
  // this method will return all values in the set
  values = () => {
    return this.collection;
  };
  // this method will add an element to the set
  add = (element) => {
    !this.has(element) && this.collection.push(element);
  };
  // this method will remove an element from the set
  remove = (element) => {
    if (this.has(element)) {
      let index = this.collection.indexOf(element);
      this.collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the collection
  size = () => {
    return this.collection.length;
  };

  // this method will return a union of 2 sets as a new set
  uninon = (otherSet) => {
    let uninonSet = new Sets();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach((e) => uninonSet.add(e));
    secondSet.forEach((e) => uninonSet.add(e));
    return uninonSet;
  };
  // this method will return the intersection of 2 sets as a new set
  intersect = (otherSet) => {
    let intersectSet = new Sets();
    let firstSet = this.values();
    firstSet.forEach((e) => otherSet.has(e) && intersectSet.add(e));
    return intersectSet;
  };
  // this method will return the difference of 2 sets as a new set
  difference = (otherSet) => {
    let differenceSet = new Sets();
    let firstSet = this.values();
    firstSet.forEach((e) => !otherSet.has(e) && differenceSet.add(e));
    return differenceSet;
  };
  // this method will test if the set is subset of a different set
  subset = (otherSet) => {
    let firstSet = this.values();
    return firstSet.every((value) => {
      return otherSet.has(value);
    });
  };
}

let myset = new Sets();

myset.add(3);
myset.add(4);
console.log(myset.values());

let otherset = new Sets();
otherset.add(4);
otherset.add(5);
console.log(otherset.values());

let union = otherset.subset(myset);
console.log(union);
