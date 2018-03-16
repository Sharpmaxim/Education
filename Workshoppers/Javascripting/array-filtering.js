var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers = numbers.filter(function evenNumbers(number) {
    return number%2 === 0;    
});
console/console.log(numbers);
