// Write your solution in this file!

let driver = {name: "Sam", address: "11 Brodway"};


function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){ 
    driver[key] = value
    return driver

}

function updateDriverWithKeyAndValue(driver, key, value){ 
return Object.assign({}, driver, { [key]: value});
}

function destructivelyDeleteFromDriverByKey(driver, key, value){ 
    delete driver[key]
    return driver
}

function deleteFromDriverByKey(driver, key){ 
   const driverx = Object.assign({}, driver)
    delete driverx[key]
    return driverx
}