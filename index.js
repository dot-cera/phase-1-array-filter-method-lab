function findMatching(array, driver){
    const theDriver = driver.toUpperCase();
    const matchingDrivers = array.filter(element => element.toUpperCase() === theDriver)
    return matchingDrivers;
}

function fuzzyMatch(array, begginingLetters){
    const matchingDrivers = array.filter(element => element.startsWith(begginingLetters));
    return matchingDrivers;
}

function matchName(array, driver){
    const matchingDrivers = array.filter(element => element.name === driver) 
    return matchingDrivers;
}