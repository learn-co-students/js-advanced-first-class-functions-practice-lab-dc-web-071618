// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function(e) {
        console.log(e.name)
    })
}

function logDriversByHometown(drivers, location) {
    drivers.forEach(function(e) {
        if (e.hometown === location) {
            console.log(e.name)
        }
    })
}

function driversByRevenue(drivers) {
    return [...drivers].sort(function(a, b){
        return a.revenue - b.revenue;
    })
}

function driversByName(drivers) {
    return [...drivers].sort(function(a, b) {
        return a.name.localeCompare(b.name);
    })
}

function totalRevenue(drivers) {
    const reducer = (agg, el, i, arr) => agg + el.revenue;
    return drivers.reduce(reducer, 0)
}

function averageRevenue(drivers) {
    return totalRevenue(drivers) / drivers.length;
}

