const convertToCelsius = function(temperature) {
    let newtemp=0;
    newtemp=(temperature-32)*(5/9);
    newtemp=Math.round(newtemp*10)/10;
    return newtemp;
};

const convertToFahrenheit = function(temperature) {
    let newtemp=0;
    newtemp=(temperature*(9/5))+32;
    newtemp=Math.round(newtemp*10)/10;
    return newtemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
