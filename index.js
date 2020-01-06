// Code your solution in this file!
function returnFirstTwoDrivers(array){
    const newArray = array.slice(0,2)
    return newArray
};

function returnLastTwoDrivers(array){
    const newArray = array.slice(-2)
    return newArray
};

const selectingDrivers = [
    returnFirstTwoDrivers, 
    returnLastTwoDrivers
];

function createFareMultiplier(number){
    return function(n){
        return n * number;
    }
}

const fareDoubler = createFareMultiplier(2);
// const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const fareTripler = createFareMultiplier(3);


function selectDifferentDrivers(array, xfunction){
    return xfunction(array);
}