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

