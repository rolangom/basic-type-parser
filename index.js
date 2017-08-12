const moment = require('moment');

class TypeHelper {
  constructor(type, validator, parser) {
    this.type = type;
    this.validate = validator;
    this.parse = parser;
  }
}

const utils = {};
utils.isStrBool = str => str.match(/\b(true|false)\b/);
utils.isStrNumb = str => str.match(/^-?\d*(\.\d+)?$/);
utils.isStrDate = str => moment(str).isValid(); // new Date(str) !== 'Invalid Date';
utils.isStrStr = str => true;

utils.parseBool = str => str == 'true';
utils.parseNumb = str => parseFloat(str);
utils.parseDate = str => moment(str).toDate(); // new Date(str);
utils.parseStr = str => str;

utils.types = [
  new TypeHelper('boolean', utils.isStrBool, utils.parseBool),
  new TypeHelper('number', utils.isStrNumb, utils.parseNumb),
  new TypeHelper('date', utils.isStrDate, utils.parseDate),
  new TypeHelper('string', utils.isStrStr, utils.parseStr),
];
utils.parse = str => utils.types.find(type => type.validate(str)).parse(str);

module.exports = utils;