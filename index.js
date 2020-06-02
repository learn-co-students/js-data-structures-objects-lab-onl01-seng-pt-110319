// Write your solution in this file!
// updateDriverWithKeyAndValue()- this function should take in three arguments:
//  a driver Object, a key and a value.
//   This function should not mutate the driver and 
//   should return a new driver that has an updated value 
//   for the key passed in.


let driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });


}
updateDriverWithKeyAndValue();

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value) {

  obj[key] = value;
 
  return obj;

}

function deleteFromDriverByKey(obj, key) {
    const newObj = {... obj }

    delete newObj[key];

    return newObj;
}

function destructivelyDeleteFromDriverByKey(obj, key) {
    delete obj[key]

    return obj;
}