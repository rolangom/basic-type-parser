const utils = require('./index.js');
const moment = require('moment');

console.log('basic type parser test...');


console.log('boolean test');
console.assert(utils.parse('true') === true, 'should be true.');
console.assert(utils.parse('false') === false, 'should be false.');

console.log('number test');
console.assert(utils.parse('3') === 3, 'should be 3.');
console.assert(utils.parse('1.6') === 1.6, 'should be 1.6.');
console.assert(utils.parse('-619') === -619, 'should be -619.');

console.log('Date test');
console.log(utils.parse('1844-02-27').toString() + ' ' + moment('1844-02-27').toDate().toString());
console.assert(utils.parse('1844-02-27').toString() === moment('1844-02-27').toDate().toString(), 'should be 1844-02-27.');

console.log('String test');
console.log(utils.parse("a string") + ' ' + "a string");
console.log(utils.parse("Hello world") + ' ' + "Hello world");
console.log(utils.parse("Hello rolangom") + ' ' + "Hello rolangom");
console.assert(utils.parse("a string") === "a string", 'should be "a string".');
console.assert(utils.parse("Hello world") === "Hello world", 'should be "Hello world".');

console.info('Test passed.');