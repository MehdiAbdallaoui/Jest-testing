const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);


repository.save({
    'id' : 1,
    "name" :"test",
    'price' :6.1,
    "added_at" : '2019-01-01'
});

//Display the total number of books
console.log(repository.getTotalCount());

//Display the total price of books
console.log(repository.getTotalPrice());

//Display the book by indicating its name
console.log(repository.getBookByName("Mehdi's book"));

//Display the total of books added per month by indicating its name
console.log(repository.getCountBookAddedByMont("Mehdi's book"));