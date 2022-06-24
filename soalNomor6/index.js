const angka = [1,4,7,9,12]



// membuat array baru dari array angka yang isinya adalah bilangan habis dibagi 2

const filteredArray = angka.filter(item => item % 1 === 0);



console.log(filteredArray) // Output: [4, 7, 9, 12]