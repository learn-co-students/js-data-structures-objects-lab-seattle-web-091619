let driver = {};
let updatedDriver = {};
function updateDriverWithKeyAndValue(driverObject, key, value)
{
    updatedDriver[key] = value;
    Object.assign(updatedDriver, driver)
    //for (var attr in driver){updatedDriver[attr] = driver[attr]};
    return updatedDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driverObject, key, value)
{
    
    driverObject[key] = value;
    return driverObject;
}

function deleteFromDriverByKey(driver, key)
{
    //for (var attr in driver) {updatedDriver[attr] = driver[attr]};
    Object.assign(updatedDriver, driver);
    delete updatedDriver[key];
    return updatedDriver;
}
function destructivelyDeleteFromDriverByKey(driver, key)
{
    delete driver[key];
    return driver;
}