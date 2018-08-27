// Code your solution in this file!

function logDriverNames(driversArray) {
  driversArray.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(driversArray, location) {
  driversArray.forEach(function (driver) {
    if (location === driver.hometown) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(driversArray) {
  return driversArray.slice().sort(function (driv1, driv2) {
    return driv1.revenue - driv2.revenue;
  });
}

function driversByName(driversArray) {
  return driversArray.slice().sort(function (driv1, driv2) {
    return driv1.name.localeCompare(driv2.name);
  });
}

function totalRevenue(driversArray) {
  return driversArray.reduce(function (sum, driver) {
    return driver.revenue + sum;
  }, 0);
}

function averageRevenue(driversArray) {
  return totalRevenue(driversArray) / driversArray.length;
}
