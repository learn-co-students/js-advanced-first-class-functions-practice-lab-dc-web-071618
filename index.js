function logDriverNames(drivers) {
  drivers.map(x => {console.log(x.name)})
}

function logDriversByHometown(drivers, town) {
  drivers.forEach(x => {
    if (x.hometown === town) {
      console.log(x.name)
    }
  });
}

function driversByRevenue(drivers) {
  return [...drivers].sort(function (a, b) {
    return a.revenue - b.revenue;
  });
}

function driversByName(drivers) {
  return [...drivers].sort(function (a, b) {
    return a.name.localeCompare(b.name);
  });
}

function totalRevenue(drivers) {
  return drivers.reduce(function (total, currentDriver) {
    return currentDriver.revenue + total;
  }, 0);
};

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length;
};
