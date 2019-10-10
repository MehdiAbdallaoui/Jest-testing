const BookRepository = require('./book.repository');

describe('Book repository Save', function () {

    test('Save a book', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(1);
    });

    test('Save three books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            push : jest.fn().mockReturnThis(),
            write : jest.fn().mockReturnThis()
        };
        const repository = new BookRepository(dbMock);
        repository.save({id: 1, name: "Unit test"});
        repository.save({id: 2, name: "Unit test"});
        repository.save({id: 3, name: "Unit test"});

        expect(dbMock.write.mock.calls.length).toBe(3);
    });
});


describe('Book repository total count', function () {

    test('Total count of books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(4)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(4);
    });
});

describe('Total price of books', function () {

    test('The price in case no book exists', () => {

        const dbMock = {
            //on déclare les méthodes utilisées dans book.repository.js
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([null])
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(null);
    });

    test('Total price of books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([3,5,10])
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(18);
    });
});

describe('Get book by name', function () {

    test('Get book by name', () => {

        var bookName = "test";
        const dbMock = {
            get: jest.fn().mockReturnThis(),
            filter: jest.fn().mockReturnThis(),
            value: jest.fn().mockReturnValue({
                "id": 1,
                "name": bookName,
                "price": 6.1,
                "added_at": "2019-01-01",
            })
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName(bookName).name).toBe(bookName);
    });
});



describe('Book repository count book add by month', function () {
    let book_simul = [
        {
            "id": 1,
            "name": "test",
            "price": 30,
            "added_at": "2019-01-01"
        },
        {
            "id": 6,
            "name": "test",
            "price": 6.1,
            "added_at": "2019-02-01"
        },
        {
            "id": 7,
            "name": "test",
            "price": 6.1,
            "added_at": "2019-02-01"
        }];

    test('Count the amount of a specific book added by month', () => {

        //We store in an array the expected result, in order to facilitate the code reading
        let expected_result = [{  year: '2019', month: 2, count: 1, count_cumulative: 1 }, {year: '2019', month: 3, count: 2, count_cumulative: 3 } ];
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(book_simul)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getCountBookAddedByMont("test")).toStrictEqual(expected_result);
    });

    test('Count the amount of a specific book that does not exist in the database', () => {
        let no_book = [];
        const dbMock = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(no_book)
        };
        const repository = new BookRepository(dbMock);

        expect(function () {repository.getCountBookAddedByMont("testFalse")}).toThrow("This book does not exist in the database!");
    });
});