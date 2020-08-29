// FizzBuzz rules
// prit numbers 1 to 100
// if number is divisible by 3, print Fuzz
// if number is divisible by 5, print Buzz
// if number is divisible by both 3 & 5, print FizzBuss
// otherwise print the number

// ex: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, etc

const FizzBuzz = () => {
    for (let i = 1; i < 100; i++) {
        if(i % 3 === 0) {
            console.log(`${i}: Fizz`);
        }
        else if (i % 5 === 0) {
            console.log(`${i}: Buzz`);
        }
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i}: FizzBuzz`)
        }
        else {
            console.log(i);
        }
    }
}

FizzBuzz();