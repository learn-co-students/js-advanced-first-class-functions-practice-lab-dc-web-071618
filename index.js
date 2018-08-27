// Code your solution in this file!
const logDriverNames = function (drivers) {
  const callback = function (el) {
    console.log(el.name);
  }
  drivers.forEach(callback)
}

const logDriversByHometown = function(drivers, town) {
  drivers.forEach(function (driver) {
    if (driver.hometown === town) {
      console.log(driver.name)
    }
  })
  }

const driversByRevenue = function(drivers){
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue
  })
}

const driversByName = function(drivers){
  return [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name)
  })
}

const totalRevenue = function(drivers) {
  return drivers.reduce(function (allRev, driver) {return driver.revenue + allRev;}, 0);
}

const averageRevenue = function(drivers) {
  return totalRevenue(drivers) / drivers.length;
}
