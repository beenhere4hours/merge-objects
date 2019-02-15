const should = require('chai').should();
const mergeObjects = require("../index").mergeObjects;

it('should return true if the objects are combined properly', function () {
    const object1 = {firstName: "John", lastName: "Doe", address: {street: "123 Main St"}};
    const object2 = {id: "1234567890", address: {state: "OH"}};
    const expectedResult = {address: {state: "OH", street: "123 Main St"}, firstName: "John", id: "1234567890", lastName: "Doe"};

    mergeObjects(object1, object2).should.eql(expectedResult);
});
