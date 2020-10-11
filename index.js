// Write your solution in this file!

const driver = {}

function updateDriverWithKeyAndValue(obj, key, value){
    const newObj = {...obj}
        newObj[key] = value 
        return newObj
}

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    const newObj = obj 
        newObj[key] = value 
        return newObj
}

function deleteFromDriverByKey(obj, key){
    const newObj = {...obj} 
    delete newObj[key] 
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key){
    const newObj = obj 
    delete newObj[key] 
    return newObj
}