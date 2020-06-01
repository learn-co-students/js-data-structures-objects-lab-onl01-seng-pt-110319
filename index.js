// Write your solution in this file!
const driver = {};


function updateDriverWithKeyAndValue(oldDriver, key, value) {
   return Object.assign({}, oldDriver, {
     [key]: value
   });
   
}

function destructivelyUpdateDriverWithKeyAndValue(oldDriver, key, value) {
   return Object.assign(oldDriver, {
     [key]: value
   });
   
}

function deleteFromDriverByKey(oldDriver, key) {
  let newDriver = Object.assign({}, oldDriver);
    delete newDriver[key];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(oldDriver, key) {
  let newDriver = Object.assign(oldDriver);
    delete oldDriver[key];
    return oldDriver;
}