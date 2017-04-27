class TableModel {
  constructor(numCols = 10, numRows = 20) {
    this.numCols = numCols;
    this.numRows = numRows;
    this.data = {};
    this.sums = [];
  }

  _getCellId(location) {
    return `${location.col}:${location.row}`;
  }

  getValue(location) {
    return this.data[this._getCellId(location)];
  }

  _setValue(location, value) {
    this.data[this._getCellId(location)] = value;
  }

  getColSum(column) {
    let sum = 0;
    for (let location in this.data) {
      if (location.indexOf(`${column}:`) !== -1) {
        sum += parseInt(this.data[location], 10);
      }
    }
    return sum;
  }

  getSum(column) {
    return this.sums[column];
  }

  setSum(column, sum) {
    this.sums[column] = sum;
  }
}

module.exports = TableModel;
