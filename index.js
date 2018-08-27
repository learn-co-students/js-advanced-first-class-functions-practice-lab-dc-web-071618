// Code your solution in this file!
const logDriverNames = function (driversObj) {
  driversObj.forEach(function (driver) {
    console.log(driver.name);
  });
}

const logDriversByHometown = function (driversObj, location) {
  driversObj.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

const driversByRevenue = function (driversObj) {
  return driversObj.slice().sort(function (driverA, driverB) {
    return driverA.revenue - driverB.revenue;
  });
}

const driversByName = function (driversObj) {
  return driversObj.slice().sort(function (driverA, driverB) {
    return driverA.name.localeCompare(driverB.name);
  });
}

const totalRevenue = function (driversObj) {
  return driversObj.reduce(function (total, driver) {
    return total + driver.revenue
  }, 0)
}

const averageRevenue = function (driversObj) {
  return totalRevenue(driversObj)/driversObj.length
}
