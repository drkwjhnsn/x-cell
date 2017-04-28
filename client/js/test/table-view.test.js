const fs = require('fs');
const TableModel = require('../table-model');
const TableView = require('../table-view');

describe('table-view', () => {

  beforeEach(() => {
    // load html skeleton from the disk and parse into the DOM
    const fixturePath = './client/js/test/fixtures/sheet-container.html';
    const html = fs.readFileSync(fixturePath, 'utf8');
    document.documentElement.innerHTML = html;

  });

  describe('buttons', () => {
    describe('new-row', () => {
      it('adds new row when clicked', () => {
        // set up initial state
        const model = new TableModel(3, 5);
        const view = new TableView(model);
        view.init();
        // inspect inital state
        let trs = document.querySelectorAll('TBODY TR');
        numberOfRows = trs.length;
        expect(numberOfRows).toBe(5);
        // simulate user action
        view.addRowButtonEl.click();
        // inspect resulting state
        trs = document.querySelectorAll('TBODY TR');
        numberOfRows = trs.length;
        expect(numberOfRows).toBe(6);
      });
    });
    describe('new-column', () => {
      it('adds new column with header when clicked', () => {
        // set up inital state
        const model = new TableModel(3, 5);
        const view = new TableView(model);
        view.init();
        // inspect initial state
        let tr = document.querySelector('TBODY TR');
        let numberOfColumns = tr.cells.length;
        let headerRowLength = view.headerRowEl.cells.length;
        expect(numberOfColumns).toBe(3);
        expect(headerRowLength).toBe(3);
        // simulate user action
        view.addColumnButtonEl.click();
        // inspect resulting state
        tr = document.querySelector('TBODY TR');
        numberOfColumns = tr.cells.length;
        headerRowLength = view.headerRowEl.cells.length;
        expect(numberOfColumns).toBe(4);
        expect(headerRowLength).toBe(4);
      });
    });
  });

  describe('formula-bar', () => {
    it('makes changes TO the value of the current cell', () => {
      // set up initial state
      const model = new TableModel(3,3);
      const view = new TableView(model);
      view.init();
      // inspect initial state
      let trs = document.querySelectorAll('TBODY TR');
      let td = trs[0].cells[0];
      expect(td.textContent).toBe('');
      // simulate user action
      document.querySelector('#formula-bar').value = '65';
      view.handleFormulaBarChange();
      // inspect resulting state
      trs = document.querySelectorAll('TBODY TR');
      expect(trs[0].cells[0].textContent).toBe('65');
    });

    it('updates FROM the value of the current cell', () => {
      // set up initial state
      const model = new TableModel(3,3);
      const view = new TableView(model);
      model._setValue({col: 2, row: 1}, '123');
      view.init();

      // inspect initial state
      const formulaBarEl = document.querySelector('#formula-bar');
      expect(formulaBarEl.value).toBe('');
      // simulate user action
      const trs = document.querySelectorAll('TBODY TR');
      trs[1].cells[2].click();
      // inspect resulting state
      expect(formulaBarEl.value).toBe('123');
    });
  });

  describe('table-body', () => {
    it('highlights the current cell when clicked', () => {
      // set up the initial state
      const model = new TableModel(10,5);
      const view = new TableView(model);
      view.init();

      // inspect the initial state
      let trs = document.querySelectorAll('TBODY TR');
      let td = trs[2].cells[3];
      expect(td.className).toBe('');

      // simulate user action
      td.click();

      // inspect the resulting state
      trs = document.querySelectorAll('TBODY TR');
      td = trs[2].cells[3];
      expect(td.className).not.toBe('');
    })

    it('has the right size', () => {
      // set up initial state
      const numCols = 6;
      const numRows = 10;
      const model = new TableModel(numCols, numRows);
      const view = new TableView(model);
      view.init();

      // inspect the initial state
      const ths = document.querySelectorAll('TH');
      expect(ths.length).toBe(numCols);
    });
    it('fills in values from the model', () => {
      // set up initial state
      const model = new TableModel(3, 3);
      const view = new TableView(model);
      model._setValue({col: 2, row: 1}, '123');
      view.init();

      // inspect the initial state
      const trs = document.querySelectorAll('TBODY TR');
      expect(trs[1].cells[2].textContent).toBe('123');
    });
  });

  describe('table-header', () => {
    it('has valid column header labels', () => {
      // set up initial state
      const numCols = 6;
      const numRows = 10;
      const model = new TableModel(numCols, numRows);
      const view = new TableView(model);
      view.init();
      // inspect the initial state
      let ths = document.querySelectorAll('THEAD TH');
      expect(ths.length).toBe(numCols);
    });
  });
});
