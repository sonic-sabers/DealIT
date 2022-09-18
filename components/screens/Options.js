import React,
{
  Component,
  useState,
  useEffect,
  useRef
} from 'react';
import {
  StyleSheet,
  Button,
  Image,
  Text,
  TouchableOpacity,
  View,


} from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { colors } from '../constants';

import { Dropdown } from 'react-native-element-dropdown';

import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const data = [
  { label: 'Store 1', value: '1' },
  { label: 'Store 2', value: '2' },
  { label: 'Store 3', value: '3' },
];
const Storename = [
  { label: 'Phone', value: '1' },
  { label: 'Laptop', value: '2' },
  { label: 'Accesories', value: '3' },
];
const POS = [
  { label: 'Point of Sales 1', value: '1' },
  { label: 'Point of Sales 2', value: '2' },
  { label: 'Point of Sales 3', value: '3' },
];
// export default function Options() {
//   return (
//     <View>
//       <Text>Options</Text>
//     </View>
//   )
// }


const Options = ({navigation}) => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const [isFocus2, setIsFocus2] = useState(false);


  return (
    <View style={styles.container}>
      <View style={{

        flex: 1,
      }}>
        <Text
          style={{
            fontSize: 17,
            fontWeight: '500',
            fontFamily: 'Roboto',
            color: colors.white,
            marginVertical: 20,
            // maxWidth: 120,
            textAlign: 'center',

          }}>
          Select Details
        </Text>
        {/* {renderLabel()} */}
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select store type' : '...'}
          searchPlaceholder="Search..."
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <Entypo
              style={styles.icon}
              color={isFocus ? 'blue' : 'black'}
              name="basecamp"
              size={20}
            />
          )}
        />
        <Dropdown
          style={[styles.dropdown, isFocus1 && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={Storename}
          search
          maxHeight={300}
          labelField="label"
          valueField="value1"
          placeholder={!isFocus1 ? 'Select store name' : '...'}
          searchPlaceholder="Search..."
          value={value1}
          onFocus={() => setIsFocus1(true)}
          onBlur={() => setIsFocus1(false)}
          onChange={item => {
            setValue1(item.value1);
            setIsFocus1(false);
          }}
          renderLeftIcon={() => (
            <Entypo
              style={styles.icon}
              color={isFocus1 ? 'blue' : 'black'}
              name="drive"
              size={20}
            />
          )}
        />
        <Dropdown
          style={[styles.dropdown, isFocus2 && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={POS}
          search
          maxHeight={300}
          labelField="label"
          valueField="value2"
          placeholder={!isFocus2 ? 'Select Point of Sales' : '...'}
          searchPlaceholder="Search..."
          value={value2}
          onFocus={() => setIsFocus2(true)}
          onBlur={() => setIsFocus2(false)}
          onChange={item => {
            setValue2(item.value2);
            setIsFocus2(false);
          }}
          renderLeftIcon={() => (
            <Entypo
              style={styles.icon}
              color={isFocus2 ? 'blue' : 'black'}
              name="vk-with-circle"
              size={20}
            />
          )}
        />
      </View>
      <TouchableOpacity
        // submitting={isSubmitting}
        onPress={() =>
          //  ( value || value2 || value == '') ? alert('Select Proper Values'+value+value2+value1) :
          navigation.navigate('Home')
        }
        style={{
          backgroundColor: '#FFFFFF',
          padding: 15,
          borderRadius: 15,
          justifyContent: 'center',
          alignItems: 'center',
          // marginVertical: 20,
          marginTop: 20,
          height: 60,
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            fontFamily: 'Roboto',
            color: colors.lightblack
          }}>
          Next
        </Text>
      </TouchableOpacity>
    </View >
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    padding: 16,
    flex: 1,
    fontColor:'black'

  },
  dropdown: {
    height: 50,
    borderColor: 'green',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    backgroundColor: colors.white,
    marginBottom: 30,
    fontColor:'black',
    color:'black'
    

  },
  icon: {
    marginRight: 10,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
    fontColor:'black',
    color:'black'
    
    
  },
  placeholderStyle: {
    fontSize: 16,
    fontColor:'black',
    color:'black'
    
  },
  selectedTextStyle: {
    fontSize: 16,
    fontColor:'black',
    color:'black'
    
    
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontColor:'black',
    color:'black'
    
    
  },
});
