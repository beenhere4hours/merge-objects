const should = require('chai').should();
const mergeObjects = require("../index").mergeObjects;

describe('deep recursive copy', function () {
    it('should create deeply nested object', function () {
        const object1 = {firstName: "John", lastName: "Doe", address: {street: "123 Main St", city: "Youngstown"}};
        const object2 = {id: "1234567890", address: {state: "OH", zip: 44504}};
        const object3 = {attributes: {dob: "01-01-76", hair: "brown", eyes: "brown"}};
        const expectedResult = {
            address: {street: "123 Main St", city: "Youngstown", state: "OH", zip: 44504},
            attributes: {dob: "01-01-76", hair: "brown", eyes: "brown"},
            firstName: "John",
            lastName: "Doe",
            id: "1234567890"
        };

        mergeObjects(object1, object2, object3).should.eql(expectedResult);
    });
});

describe('deep copy', function () {
    it('should make a copy of an object not a reference to it', function () {
        const object1 = {firstName: "John", lastName: "Doe", address: {street: "123 Main St", city: "Youngstown"}};

        mergeObjects({}, object1).should.be.eql(object1);
        mergeObjects({}, object1).should.not.be.equal(object1);
    });
});

