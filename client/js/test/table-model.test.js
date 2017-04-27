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
});
