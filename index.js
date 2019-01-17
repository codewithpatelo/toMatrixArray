const csvFilePath = './test/cm.csv';
const csv = require('csvtojson');

const math = require('mathjs');

const linearAlgebra = require('linear-algebra')();

const Vector = linearAlgebra.Vector;


const Matrix = linearAlgebra.Matrix;

let d1 = []; // cols
let d2 = []; // rows
const d3 = []; // array of matrices

let matrix = {};
const ma = [];


exports.toMatrixArray = function toMatrixArray(jsonObj, library) {
  for (let i = 0; i < 2; i += 1) {
    matrix = jsonObj[i];


    const nm = Object.keys(matrix).length;


    let j = 0;
    let nc = 0;
    let nr = 1;

    for (j = 0; j < Object.keys(matrix).length; j += 1) {
      // console.log(Object.values(matrix));
      if (Object.values(matrix)[j] !== '') {
        if (nr < 2) {
          nc += 1;
        }
      } else {
        nr += 1;
      }
    }

    const k = 0;
    let l = 0;

    for (j = 0; j < Object.keys(matrix).length; j += 1) {
      if (Object.values(matrix)[j] !== '') {
        d1.push(Number(Object.values(matrix)[j]));
        l += 1;
      }
      if (l === nr) {
        d2.push(d1);
        d1 = [];
        l = 0;
      }
    }


    d3.push(d2);
    d2 = [];
  }

  let p = 0;
  for (p = 0; p < d3.length; p += 1) {
    if (library === 'linear-algebra') {
      const m = new Matrix(d3[p]);
      ma.push(m);
    } else if (library === 'mathjs') {
      const m = math.matrix(d3[p]);
      ma.push(m);
    }
  }

  return ma;
};
