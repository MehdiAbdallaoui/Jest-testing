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

    }

}


module.exports = BookRepository;