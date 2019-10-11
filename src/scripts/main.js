console.log("Objects as things")

const expense = {
  dateCreated: "01/01/2017",
  location: "Bob's Burgers",
  dollarAmount: "14.34",
  purpose: "Lunch with very important client",
  code: "1001A"
}


const expenseReport = {
  dateCreated: "02/01/2017",
  expenses: [
      {
          amount: 14.34,
          dateCreated: "01/01/2017",
          vendor: "Bob's Burgers",
          code: "1001A"
      },
      {
          amount: 51.03,
          dateCreated: "01/03/2017",
          vendor: "Sunoco",
          code: "2213D"
      },
      {
          amount: 7.22,
          dateCreated: "01/07/2017",
          vendor: "Taco Bell",
          code: "1001A"
      }
  ]
}

let employee = {
  firstName: "Michael",
  lastName: "Tambornino",
  role: "Sales Rep",
  accountNumber: "1-8349058340"
}

employee.lastName = "Tamborine"

// debugger

employee = {
  firstName: "Jisie",
  lastName: "David"
}

console.log("Employee after name change", employee)

// Function call
const rose = createEmployee("Rose", "Wisotzky", "TA", "12345-1")

console.log("Welcome Rose!", rose)

const rufusTheDog1 = {
  age: 4,
  species: "Dalmatian",
  bark: function (something) {
      return`Rufus barks 'WOOF!' at ${something}`
  }
}

// rufusTheDog1.bark("mailman")
// rufusTheDog1.bark("leaf")
// rufusTheDog1.bark("child")

console.log(`Rufus is ${rufusTheDog1.age} years old`)

console.log(`${rufusTheDog1.bark("mailman")} every single day`)


const rufusTheDog2 = {
  age: 4,
  species: "Dalmatian",
  contentsOfStomach: [],
  eat: function (item) {
      rufusTheDog2.contentsOfStomach.push(item)
  },
  puke: function () {
      rufusTheDog2.contentsOfStomach.length = 0
  },
  bark: function (something) {
      window.alert(`Rufus barks 'WOOF!' at ${something}`)
  }
}

rufusTheDog2.eat("leftovers")
rufusTheDog2.eat("treat")
rufusTheDog2.puke()
rufusTheDog2.eat("bunny")

console.log(rufusTheDog2.contentsOfStomach)
