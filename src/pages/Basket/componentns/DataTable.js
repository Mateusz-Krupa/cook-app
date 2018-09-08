import React, {Component} from 'react';
import DataTables from 'material-ui-datatables';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
 
const TABLE_COLUMNS = [
  {
    key: 'name',
    label: 'Name',
  },
  {
    key: 'quantity',
    label: 'Quantity'
  },
  {
    key: 'price',
    label: 'Price',
  },
];
 
const TABLE_DATA = [
  {
    name: 'Frozen yogurt',
    price: '100 CHF',
    quantity: '200 ml'
  }, 
  {
    name: 'Ice',
    price: '200 CHF',
    quanlity: "10kg"
  },
  {
    name: 'egs',
    price: '5 CHF', 
    
  }
];
 
export default class MyComponent extends Component {

  handleFilterValueChange = (value) => {
    // your filter logic
  }
 
  handleSortOrderChange = (key, order) => {
    // your sort logic
  }
 
  render() {
    return (
      <MuiThemeProvider>
        <DataTables
          enableSelectAll={true}
          height={'auto'}
          selectable={true}
          showRowHover={true}
          columns={TABLE_COLUMNS}
          data={TABLE_DATA}
          showCheckboxes={true}
          onCellClick={this.handleCellClick}
          onCellDoubleClick={this.handleCellDoubleClick}
          onFilterValueChange={this.handleFilterValueChange}
          onSortOrderChange={this.handleSortOrderChange}
          showFooterToolbar={false}
        />
      </MuiThemeProvider>
    );
  }
}