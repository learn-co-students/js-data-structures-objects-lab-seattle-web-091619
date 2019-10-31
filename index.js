// Write your solution in this file!
let driver = {}
// const address = {
//     street1: '11 Broadway',
//     street2: '2nd Floor',
//     city: 'New York',
//     state: 'NY',
//     zipCode: 10004
//   };

  function updateDriverWithKeyAndValue(driver, key, value) {
    return Object.assign({}, driver, {[key]: value})
  }

  function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
      driver[key] = value;
      return driver;
  }

  function deleteFromDriverByKey(driver, key) {
    let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    return newDriver;
  }

  function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
  }

  console.log(driver)