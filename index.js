function findMatching(taxiDrivers, driver) {        
    return taxiDrivers.filter(match =>
        match.toLowerCase() === driver.toLowerCase()
    )
}

function fuzzyMatch(taxiDrivers, drivers, letter) {
    let filteredNames = taxiDrivers.filter(function (word) {
        return word.charAt(drivers) === letter;
    } )
}

//function filter(names, index, letter) {
  //  var filteredNames = names.filter(function(word) {
 //      return word.charAt(index) === letter;
 //   });
 //   return filteredNames;
//}

