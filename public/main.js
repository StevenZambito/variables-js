function main() {
  // if (document.querySelector('h1.hello-world')) {
  //   document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  // }
  const numberOfCupsOfCoffee = 0
  const fullName = 'Steven Zambito'

  console.log(
    `My name is ${fullName} and I drink ${numberOfCupsOfCoffee} cups of coffee per day.`
  )

  const person = {
    fullName: 'Steven Zambito',
    luckyNumber: 13,
    favoriteMovies: ['Star Wars', 'Kill Bill', 'Harry Potter'],
  }

  const userName = window.prompt('What is your name?')
  console.log(`Hello ${userName}! Welcome!`)

  const ageNumberAnswer = window.prompt('How old are you?')
  const firstOperand = parseFloat(ageNumberAnswer)

  const luckyNumberAnswer = window.prompt('What is your lucky number?')
  const secondOperand = parseFloat(luckyNumberAnswer)

  const sum = secondOperand + firstOperand
  const difference = firstOperand - secondOperand
  const quotient = firstOperand / secondOperand
  const remainder = firstOperand % secondOperand

  console.log(
    `The sum of ${secondOperand} and ${firstOperand} is ${sum}. ${firstOperand} minus ${secondOperand} is ${difference}. ${firstOperand} divided by ${secondOperand} is ${quotient}. The remainder of ${firstOperand} and ${secondOperand} is ${remainder}.`
  )

  let numbers = [
    97,
    65,
    7,
    68,
    24,
    39,
    61,
    26,
    28,
    99,
    42,
    8,
    47,
    39,
    37,
    72,
    54,
    85,
    84,
    34,
    7,
    88,
    6,
    8,
    87,
    45,
    2,
    52,
    47,
    88,
    27,
    10,
    13,
    74,
    25,
    23,
    61,
    64,
    11,
    93,
    1,
    8,
    74,
    84,
    94,
    47,
    7,
    7,
    66,
    37,
    76,
    79,
    6,
    44,
    39,
    52,
    19,
    17,
    53,
    78,
    35,
    48,
    93,
    100,
    68,
    21,
    87,
    92,
    43,
    53,
    36,
    92,
    53,
    81,
    5,
    62,
    17,
    20,
    29,
    90,
    42,
    34,
    63,
    93,
    29,
    73,
    17,
    55,
    78,
    85,
    2,
    12,
    40,
    1,
    58,
    24,
    31,
    93,
    27,
    46,
  ]
  const statistics = {
    smallest: 0,
    largest: 0,
    sum: 0,
    average: 0,
    sumOfOdd: 0,
    countOfEven: 0,
  }

  let smallestValue = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallestValue) {
      smallestValue = numbers[i]
    }
  }
  statistics.smallest = smallestValue

  let largestValue = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largestValue) {
      largestValue = numbers[i]
    }
  }
  statistics.largest = largestValue

  let sumValue = 0
  for (let i = 0; i < numbers.length; i++) {
    sumValue += numbers[i]
  }
  statistics.sum = sumValue

  let averageValue = 0
  for (let i = 0; i < numbers.length; i++) {
    averageValue += numbers[i]
  }
  statistics.average = averageValue / numbers.length

  let sumOfOddValue = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
      sumOfOddValue += numbers[i]
    }
  }
  statistics.sumOfOdd = sumOfOddValue

  let countOfEvenValue = 0
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
      countOfEvenValue++
    }
  }
  statistics.countOfEven = countOfEvenValue

  console.log(statistics)
}

document.addEventListener('DOMContentLoaded', main)
