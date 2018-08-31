function logDriverNames(drivers) {
  drivers.forEach( driver => {
    console.log(driver["name"]);
  })
}

function logDriversByHometown(drivers, hometown) {
  let newDrivers = drivers.filter( x => x.hometown === hometown)
  newDrivers.forEach( driver => {
    console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  return [...drivers].sort(function (a,b){
    return a.revenue - b.revenue;
  })
}

function driversByName(drivers) {
  return [...drivers].sort(function (a,b){
    return (a.name).localeCompare(b.name);
  })
}

function totalRevenue(drivers) {
  return drivers.reduce(function (total, currdriver){
    return currdriver.revenue + total
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
