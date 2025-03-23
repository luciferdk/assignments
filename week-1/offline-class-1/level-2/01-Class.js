
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
}

let co = new Animal("cow", 4);
let donk = new Animal("donky", 4);

console.log(co,donk);


