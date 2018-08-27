// Code your solution in this file!
const logDriverNames = function (drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
};

const logDriversByHometown = function (drivers, location) {
  const newDrivers = drivers.filter(function (driver) {
    return driver.hometown === location;
  });
  logDriverNames(newDrivers);
};

const driversByRevenue = function (drivers) {
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
};

const driversByName = function (drivers) {
  return [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
};

const totalRevenue = function (drivers) {
  return drivers.reduce(function (total, n) {
    return total + n.revenue;
  }, 0);
};

const averageRevenue = function (drivers) {
  return totalRevenue(drivers) / drivers.length;
};
