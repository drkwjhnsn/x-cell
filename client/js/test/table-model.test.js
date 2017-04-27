const TableModel = require ('../table-model');

describe('table-model', () => {
  it('can set up then get a value', () => {
    //set up an initial state
    const model = new TableModel();
    const location = {row: 3, col: 5};

    // inspect the initial state
    expect(model.getValue(location)).toBeUndefined();

    // execute the code under test
    model._setValue(location, 'foo');

    // inspect the resulting state
    expect(model.getValue(location)).toBe('foo');
  });

  it('can add columns, store sums and return sums', () => {
    // set up initial state
      const model = new TableModel();
      const column = 0;
      const loc1 = { row: 3, col: column};
      const loc2 = { row: 5, col: column};
      model._setValue(loc1, 2);
      model._setValue(loc2, 7);
    // inspect initial state
      expect(model.getSum(column)).toBeUndefined();
    // execute code under test
      const sum = model.getColSum(column);
      model.setSum(column, sum);
    // inspect the resulting state
      expect(sum).toBe(9);
      expect(model.sums[column]).toBe(9);
  });

});
