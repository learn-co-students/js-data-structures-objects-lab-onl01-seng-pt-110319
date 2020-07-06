// Write your solution in this file!



function updateDriverWithKeyAndValue(driver,key,value){
    return Object.assign({},driver,{[key]: value});
}
const driver = {key:`value`}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;
    return driver;
}
function deleteFromDriverByKey(obj, key) {
   const deleteDriver = Object.assign({}, obj)
    delete deleteDriver[key]
  
    return deleteDriver;
  }

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key];
    return driver;
}

