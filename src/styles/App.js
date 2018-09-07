import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'App': {
    'textAlign': 'center'
  },
  'AppPageContainer': {
    'paddingTop': [{ 'unit': 'px', 'value': 50 }]
  },
  'addButton': {
    'width': [{ 'unit': 'px', 'value': 60 }],
    'height': [{ 'unit': 'px', 'value': 60 }],
    'position': 'fixed',
    'borderRadius': '90px',
    'backgroundColor': 'rgba(254,40,81,1)',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 4 }, { 'unit': 'px', 'value': 8 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'rgba(0,0,0,0.2)' }],
    'color': 'white',
    'position': 'fixed',
    'bottom': [{ 'unit': 'px', 'value': 100 }],
    'right': [{ 'unit': 'px', 'value': 20 }],
    'lineHeight': [{ 'unit': 'px', 'value': 60 }],
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  }
});
