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

  it('can store and retrieve values to TableModel.sums', () => {
    const model = new TableModel();
    const sum = 42;
    const column = 0;

    model.setSum(column, sum);
    expect(model.getSum(column)).toBe(42);
  });

  describe('find-sum', () => {
    it('adds numeric values', () => {
      const model = new TableModel();
      const column = 0;
      model._setValue({row: 0, col: column}, 5);
      model._setValue({row: 1, col: column}, 9);

      const sum = model.findSum(column);
      expect(sum).toBe(14);
    });

    it('only adds values within the passed column', () => {
      const model = new TableModel();
      const column = 0;
      model._setValue({row: 0, col: column}, 5);
      model._setValue({row: 1, col: column}, 9);
      model._setValue({row: 2, col: 1}, 3);

      const sum = model.findSum(column);
      expect(sum).toBe(14);
    });

    it('only adds numeric values', () => {
      const model = new TableModel();
      const column = 0;
      model._setValue({row: 0, col: column}, 5);
      model._setValue({row: 1, col: column}, 'cat');
      model._setValue({row: 2, col: column}, 3);
      model._setValue({row: 3, col: column}, undefined);

      const sum = model.findSum(column);
      expect(sum).toBe(8);
    });
  });

});
