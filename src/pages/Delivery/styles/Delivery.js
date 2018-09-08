import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'delivery-row': {
    'display': 'flex',
    'flexFlow': 'row wrap',
    'alignItems': 'center',
    'justifyContent': 'center'
  },
  'delivery-row-title': {
    'flexGrow': '2'
  },
  'delivery-action': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'textTransform': 'uppercase'
  },
  'delivery-row__done': {
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(68,219,94,1)' }]
  },
  'delivery-row__inprogress': {
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(255,205,0,1)' }]
  },
  'delivery-row__canceled': {
    'borderLeft': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'rgba(226,33,22,1)' }]
  },
  'delivery-row-title__top': {
    'margin': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 2 }, { 'unit': 'px', 'value': 0 }]
  },
  'delivery-row-title__info': {
    'color': '#8F8E94',
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'textTransform': 'uppercase'
  },
  'delivery-row-title': {
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 5 }],
    'color': '#030303',
    'fontSize': [{ 'unit': 'px', 'value': 17 }],
    'letterSpacing': [{ 'unit': 'px', 'value': -0.41 }],
    'lineHeight': [{ 'unit': 'px', 'value': 20 }]
  }
});
