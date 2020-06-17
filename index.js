// Write your solution in this file!
const driver = {}

function updateDriverWithKeyAndValue(obj, key, value) {
    return Object.assign({}, obj, { [key]: value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;

    return driver;
}

function deleteFromDriverByKey(driver, key){
    const newDriver = Object.assign({}, driver);
    let name = key
    delete newDriver[name];
    return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
    let name = key
    delete driver.name;

    return driver;
}