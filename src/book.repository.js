class BookRepository {

    /**
     * @param db
     */
    constructor(db) {
        this.db = db;
    }

    save (book) {
        this.db.get('books').push(book).write();
    }

    /**
     * Nombre total de livre
     */
    getTotalCount() {
        var total;
        total = this.db.get('books').size().value();
        return total;
    }

    /**
     * Somme du prix de tous les livre
     */
    getTotalPrice() {
        let tmp = this.db.get('books').map('price').value();
        return tmp.reduce((total, current) => total + current);
    }


    /**
     * Retourne un livre
     */
    getBookByName(bookName) {
        return this.db.get('books').filter({name: bookName}).value();
    }

    /**
     * Nombre de livre ajouté par mois
     *
     *  [
     *      {
     *          year: 2017,
     *          month, 2,
     *          count, 129,
     *          count_cumulative: 129
     *      },
     *      {
     *          year: 2017,
     *          month, 3,
     *          count, 200,
     *          count_cumulative: 329
     *      },
     *      ....
     *  ]
     */
    getCountBookAddedByMont(bookName) {

        //Variables declaration
        const results = [];
        let year, month, count=1, count_cumulative=0, date='';

        //Retrieving all books named bookName
        const TotalBooks = this.db.get('books').filter({name: bookName}).value();
        if(TotalBooks.length === 0)
        {
            //Throwing an exception in case no book exists in the database
            throw "This book does not exist in the database!";
        }

        let length=TotalBooks.length;
        for(let x=0 ; x<length ; x++){

            let book = TotalBooks[x];

            //Splitting the date attribute's value into 3 values and treat them one by one
            date = book.added_at.split("-");
            year = date[0];
            month = parseInt(date[1])+1;

            if(results.filter(result => result.year === year && result.month === month).length !== 0){
                let index = results.findIndex(result => result.year === year && result.month === month);
                count_cumulative += 1;
                results[index]["count"] +=1;
                results[index]["count_cumulative"] = count_cumulative;
            }

            else
            {
                count_cumulative += 1;
                results.push({ year, month, count, count_cumulative});
            }
        }
        return results;
    }

}


module.exports = BookRepository;