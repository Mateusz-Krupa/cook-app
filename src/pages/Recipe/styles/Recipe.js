import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'recipe-list-img': {
    'maxWidth': [{ 'unit': '%H', 'value': 1 }]
  },
  'separator': {
    'backgroundColor': '#F2F2F2',
    // text-transform: uppercase;
    'padding': [{ 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 15 }, { 'unit': 'px', 'value': 20 }],
    'color': '#4A4A4A',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#4A4A4A' }],
    'marginBottom': [{ 'unit': 'px', 'value': 1 }]
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
  'recciple-overlay p': {
    'margin': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }]
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
