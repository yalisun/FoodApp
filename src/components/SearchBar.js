import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <Feather name="search" style={styles.iconStyle}/>
      <TextInput 
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle} 
        placeholder="Search" 
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: '#E3E3E5',
    height: 50,
    borderRadius: 5, 
    marginHorizontal: 15,
    flexDirection: 'row',
    marginBottom: 10
    // alignItems: 'center' 
  },
  inputStyle: {
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center', //magnifying glass on the center, start is on the top...,
    marginHorizontal: 15
  }
});

export default SearchBar;