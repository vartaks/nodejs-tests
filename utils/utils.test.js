const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);

    expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum) => {
        expect(sum).toBe(7).toBeA('number');

        // Call to done function is required for testing async functions.
        done(); 
    });
});

it('should square a number', () => {
    var res = utils.square(9);

    expect(res).toBe(81).toBeA('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(7, (square) => {
        expect(square).toBe(49).toBeA('number');

        // Call to done function is required for testing async functions.
        done();
    });
});

it('should verify first and last names are set', () => {
    var person = {
        age: 33,
        location: 'Mumbai'
    };

    var res = utils.setName(person, 'Sourabh Vartak');

    expect(person).toEqual(res);

    expect(res)
        .toInclude({
            firstName: 'Sourabh',
            lastName: 'Vartak'
        })
        .toBeA('object');
});

it('should expect some values', () => {
    expect(12).toNotBe(15);
    expect({name: 'sourabh'}).toNotEqual({name: 'Sourabh'});
    expect([2,3,4]).toInclude(4);
    expect([2,3,4]).toExclude(5);

    expect({
        name: 'Sourabh',
        age: 33,
        location: 'Mumbai'
    }).toInclude({
        age: 33
    });
});