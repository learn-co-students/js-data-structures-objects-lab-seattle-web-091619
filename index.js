// Write your solution in this file!
let driver = {};

const updateDriverWithKeyAndValue = (driver, key, val) => {
  return Object.assign({}, driver, { [key]: val });
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, val) => {
  driver[key] = val;
  return driver;
}

const deleteFromDriverByKey = (driver, key) => {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver;
}