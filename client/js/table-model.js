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

  findSum(column) {
    let keys = Object.keys(this.data);

    let validKeys = keys.filter((loc) => loc.indexOf(`${column}:`) !== -1, this);

    let values = validKeys.map((loc) => parseInt(this.data[loc]), this);

    let numValues = values.filter((val) => !isNaN(val));

    return numValues.reduce((acc, val) => acc + val, 0);
  }

  getSum(column) {
    return this.sums[column];
  }

  setSum(column, sum) {
    this.sums[column] = sum;
  }
}

module.exports = TableModel;
