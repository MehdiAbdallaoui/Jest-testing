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
});


describe('Book repository total count', function () {

    test('Total count of books', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            size : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue(1)
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalCount()).toBe(1);
    });
});

describe('Total price of books', function () {
    test('Total price of books', () => {

        const dbMock = {
            //on déclare les méthodes utilisées dans book.repository.js
            get : jest.fn().mockReturnThis(),
            map : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue([3,3,3])
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getTotalPrice()).toBe(9);
    });
});

describe('Get book by name', function () {

    test('Get book by name', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue("test")
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName("test")).toEqual("test");
    });
});

/*
describe('Count books added per month', function () {

    test('Count books added per month', () => {

        const dbMock = {
            get : jest.fn().mockReturnThis(),
            filter : jest.fn().mockReturnThis(),
            value : jest.fn().mockReturnValue("5")
        };
        const repository = new BookRepository(dbMock);

        expect(repository.getBookByName("test")).toEqual("5");
    });
});*/
