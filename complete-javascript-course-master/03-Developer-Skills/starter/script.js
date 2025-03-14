// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const x = 23;
const firstName = 'Manthru';

if (x === 23) console.log(23);

const getIn = bithYear => 2024 - bithYear;

console.log();

const measurKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees in Celsius: ')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measurKelvin());
