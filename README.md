[![Build Status](https://travis-ci.org/beenhere4hours/merge-objects.svg?branch=master)](https://travis-ci.org/beenhere4hours/merge-objects)

merge-objects
=====

Variadic deep recursive merge of objects

## Installation
`npm i @beenhere4hours/merge-objects`

## Usage

### merge multiple objects

```
const mergeObjects = require("@beenhere4hours/merge-objects").mergeObjects

const object1 = {firstName: "John", lastName: "Doe", address: {street: "123 Main St", city: "Youngstown"}};
const object2 = {id: "1234567890", address: {state: "OH", zip: 44504}};
const object3 = {attributes: {dob: "01-01-76", hair: "brown", eyes: "brown"}};

// can accept a variable number of parameters, so add as many as you'd like
mergeObjects(object1, object2, object3);

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

### deep copy object
Create a new, deep copy, of an object that has the same properties and values, but is not the same object.
```
const mergeObjects = require("@beenhere4hours/merge-objects").mergeObjects

const original = {firstName: "John", lastName: "Doe", address: {street: "123 Main St", city: "Youngstown"}};

// pass in an object literal as the first param or target
let copy = mergeObjects({}, original);

```

## Tests

  `npm test`
