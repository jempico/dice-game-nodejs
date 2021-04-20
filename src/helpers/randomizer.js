const random = require('random');
const min = 1;
const max = 7;

const randomizer = () => { return random.int(min, max)};

module.exports = randomizer;