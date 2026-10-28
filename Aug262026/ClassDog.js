class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }

  speak() {
    console.log(`Woof! My name is ${this.dogName}`);
  }

  calculateFood(days) {
    return this.weight * 0.1 * days;
  }
}

let myDog = new Dog("Jacky", 30, "brown", "labrador");

myDog.speak();
console.log(myDog.calculateFood(7));