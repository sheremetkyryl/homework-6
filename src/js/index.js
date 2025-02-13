//1

let counter = 1;
while (counter <= 10) {
    console.log(counter);
    counter++;
}

//2

for(let number = 2; number <= 20; number++) {
    if(number % 2 !== 0){
        continue
    }
    console.log(number)
}

//3

for(let num = 1; num <= 10; num++) {
    console.log(`7 * ${num} = ${7 * num}`)
}

//4

let n = 20;

for(let numbers = 1; numbers < n; numbers++){
    if(n > numbers) {
        console.log(numbers);
    } else if (n <= numbers) {
        break;
    }
}


//5


let num2 = 1;

while(num2 <= 20) {
    if(num2 % 3 === 0) {
        num2++;
        continue
    }
    console.log(num2);
    num2++;
}