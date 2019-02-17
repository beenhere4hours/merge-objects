[![Build Status](https://travis-ci.org/beenhere4hours/merge-objects.svg?branch=master)](https://travis-ci.org/beenhere4hours/merge-objects)

# merge-objects
Variadic deep recursive merge of objects


```
const mergeObjects = require("@beenhere4hours/merge-objects").mergeObjects

const object1 = {firstName: "John", lastName: "Doe", address: {street: "123 Main St", city: "Youngstown"}};
const object2 = {id: "1234567890", address: {state: "OH", zip: 44504}};
const object3 = {attributes: {dob: "01-01-76", hair: "brown", eyes: "brown"}};

mergeObjects(object1, object2, object3).should.eql(expectedResult);

/*
expected result
{
  address: {street: "123 Main St", city: "Youngstown", state: "OH", zip: 44504},
  attributes: {dob: "01-01-76", hair: "brown", eyes: "brown"},
  firstName: "John",
  lastName: "Doe",
  id: "1234567890"
};
*/


```
