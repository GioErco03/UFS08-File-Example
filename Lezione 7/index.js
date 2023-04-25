/*Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
On separate lines (one console.log statement for each), log the recipe information so it looks like:
Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa*/


const recipe = {
    title: 'Mole',
    servings: 2,
    ingredients: ['cinnamon', 'cumin', 'cocoa'],
}

console.log(recipe.title)
console.log('Serves: ' + recipe.servings)
/*for (let i of Object.keys(recipe.ingredients)) {
    console.log(recipe.ingredients[i])
}*/
recipe.ingredients.forEach((ingredients) => {
    console.log(ingredients)
})
/*Keep track of which books you read and which books you want to read!

Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'*/

const books = [
    {
        title: 'The Hobbit',
        author: 'XXXXXXXXXXXXXX',
        alreadyRead: true,
    },
    {
        title: 'The Lord of the Rings',
        author: 'XXXXXXXXXXXXXX',
        alreadyRead: false,
    },
]
//Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
for (let i = 0; i < books.length; i++) {
    if (books[i].alreadyRead) {
        console.log(
            'You already read ' + books[i].title + ' by ' + books[i].author
        )
    } else {
        console.log(
            'You still need to read ' +
                books[i].title +
                ' by ' +
                books[i].author
        )
    }
}
books.forEach((book) => {
    console.log(book.title + ' by ' + book.author)
})

//-----------------------------------------------------------------------------------------------------------------------------


//First, implement the method calculate(str) that takes a string like "1 + 2" in the format “NUMBER operator NUMBER” (space-delimited) and returns the result. Should understand plus + and minus -.
class Calculator {
    constructor() {
        this.methods = {
            '+': (a, b) => a + b,
            '-': (a, b) => a - b,
        }
        this.calculate = function (str) {
            let split = str.split(' '), a = +split[0], op = split[1], b = +split[2]
            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN
            }
            return this.methods[op](a, b)
        }
        this.addMethod = function (name, func) {
            this.methods[name] = func
        }
    }
}
let calc = new Calculator()
calc.addMethod('*', (a, b) => a * b)
calc.addMethod('/', (a, b) => a / b)
calc.addMethod('**', (a, b) => a ** b)


let result = calc.calculate('5 * 5')
console.log(result)


//Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

let arr = [4, 5, 9];

function shuffle(array) {
    for (let i = 0; i < array.length -1 ; i++) {
        array.sort(() => Math.random() - 0.5)
        //array[i] = arr[parseInt((Math.random()*3))]
    }
    return array
}
let array = shuffle(arr)
console.log(array)

//Scrivete la funzione getAverageAge(users)che ottiene un array di oggetti con proprietà agee restituisce l'età media.

function getAverageAge(arrObj) {
    let somma = 0
    for(let i = 0; i<arrObj.length;i++)
    {
        somma = arrObj[i].age + somma
    }
    let media = somma / arrObj.length
    return media
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr2 = [ john, pete, mary ];

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28

