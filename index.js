/**
 * Deep recursive merge of object2 into object1
 * @param {Object} object1
 * @param {Object} object2
 * return {Object}
 */
exports.mergeObjects = function (object1, object2) {
   for (var property in object2) {
      // ES5 will coerce a primitive to an object
      // so don't trust isEnumerable
      // and check for object type
      if (object1.hasOwnProperty(property) &&
          object2.propertyIsEnumerable(property) &&
          typeof object2[property] === "object") {

        mergeObjects(object1[property], object2[property]);

      } else {
        object1[property] = object2[property];
      }
  }

  return object1;
};
