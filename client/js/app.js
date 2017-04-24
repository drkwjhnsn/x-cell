const TableModel = require('./table-model');
const TableView = require('./table-view');

const tableModel = new TableModel();
const tableView = new TableView(tableModel);
tableView.init();
