import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'recipe-list-img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'recipe-row': {
    'position': 'relative',
    'color': 'white',
    'fontSize': [{ 'unit': 'px', 'value': 15 }]
  },
  'recciple-overlay': {
    'bottom': [{ 'unit': 'px', 'value': 3 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'minWidth': [{ 'unit': 'px', 'value': 150 }],
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }],
    'position': 'absolute',
    'background': 'rgba(0,0,0, 0.5)'
  },
  'recciple-overlay span': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
  },
  'calory-icon': {
    'verticalAlign': 'middle',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': 'white' }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 3 }]
  },
  'recciple-overlay-title': {
    'top': [{ 'unit': 'px', 'value': 0 }],
    'right': [{ 'unit': 'px', 'value': 0 }],
    'left': [{ 'unit': 'px', 'value': 0 }],
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'minWidth': [{ 'unit': 'px', 'value': 150 }],
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 5 }],
    'position': 'absolute',
    'background': 'rgba(0,0,0, 0.4)'
  }
});
