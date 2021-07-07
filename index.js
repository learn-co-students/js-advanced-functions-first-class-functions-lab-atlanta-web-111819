const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2, drivers.length);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiple){
    return function(num){
        return num * multiple;
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, func){
   return func(drivers);
}

