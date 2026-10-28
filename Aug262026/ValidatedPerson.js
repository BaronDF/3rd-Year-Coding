class ValidatedPerson {
  #firstname;
  #lastname;

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.#lastname = lastname;
  }

  get firstname() {
    return this.#firstname;
  }

  set firstname(value) {
    if (value.startsWith("M")) {
      this.#firstname = value;
    } else {
      this.#firstname = "M" + value;
    }
  }
}

let person1 = new ValidatedPerson("Moon");

console.log(person1.firstname);

person1.firstname = "Madness";

console.log(person1.firstname);