const should = require('chai').should();
const csvFilePath = './test/cm.csv';
const csv = require('csvtojson');

const math = require('mathjs');

var linearAlgebra = require('linear-algebra')(),     // initialise it
    Vector = linearAlgebra.Vector,
    Matrix = linearAlgebra.Matrix;

let d1 = []; // cols
let d2 = []; // rows
const d3 = []; // array of matrices

let matrix = {};
let ma = [];

const convert = require('../index.js');

csv()
  .fromFile(csvFilePath)
  .then((jsonObj) => {
      
console.log(convert.toMatrixArray(jsonObj, 'mathjs')[1]);
console.log(convert.toMatrixArray(jsonObj, 'linear-algebra')[1]);

describe('Check MathJS', () => {
  it('If m argument is not matrix it should throw error alert.', () => {
	result = console.log(convert.toMatrixArray(jsonObj, 'mathjs')[1]);
    result.should.equal('');
  });
});

describe('Check LA', () => {
  it('If m argument is not matrix it should throw error alert.', () => {
	result = console.log(convert.toMatrixArray(jsonObj, 'linear-algebra')[1]);
    result.should.equal('');
  });
});

  });
