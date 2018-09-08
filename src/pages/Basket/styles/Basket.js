import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  'basket-button': {
    'textAlign': 'center',
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 0 }]
  },
  'basket-total-price': {
    'margin': [{ 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 25 }, { 'unit': 'px', 'value': 20 }, { 'unit': 'px', 'value': 25 }],
    'textAlign': 'right',
    'fontSize': [{ 'unit': 'px', 'value': 14 }]
  },
  'basket-total-price span': {
    'fontWeight': 'bold'
  }
});
