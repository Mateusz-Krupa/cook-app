import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'navContainer': {
    'position': 'fixed',
    'width': [{ 'unit': '%H', 'value': 1 }],
    'background': 'rgba(250,250,250,0.9)',
    'bottom': [{ 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'listStyle': 'none',
    'display': 'flex',
    'WebkitFlexFlow': 'row wrap',
    'justifyContent': 'space-around'
  },
  'navItem': {
    'textDecoration': 'none',
    'color': 'rgba(146,146,146,1)',
    'boxSizing': 'border-box',
    'padding': [{ 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }, { 'unit': 'px', 'value': 5 }],
    'marginTop': [{ 'unit': 'px', 'value': 10 }],
    'fontWeight': 'bold',
    'width': [{ 'unit': 'px', 'value': 60 }],
    'fontSize': [{ 'unit': 'px', 'value': 10 }],
    'textAlign': 'center'
  },
  'navIcon': {
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'padding': [{ 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }, { 'unit': 'px', 'value': 3 }]
  }
});
