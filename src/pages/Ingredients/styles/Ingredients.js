import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'ingredients-list-row': {
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'backgroundColor': 'rgba(239,239,244,1)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(230,230,230,1)' }, { 'unit': 'string', 'value': 'rgba(230,230,230,1),' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -1 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(230,230,230,1)' }],
    'width': [{ 'unit': '%H', 'value': 1 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none',
    'display': 'flex',
    'WebkitFlexFlow': 'row wrap',
    'boxSizing': 'border-box',
    'justifyContent': 'space-between',
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }]
  },
  'ingredients-list-row > div:first': {
    'textAlign': 'left'
  },
  'ingredients-list-row > div:last': {
    'textAlign': 'right'
  },
  'ingredients-list-next': {
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }]
  }
});
