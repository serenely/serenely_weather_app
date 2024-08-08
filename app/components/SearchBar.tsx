import React, { ReactNode } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native-elements';
import FontAwesome from 'react-native-vector-icons/FontAwesome';



interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (

      <View style={styles.searchContainer}>
        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          onSubmitEditing={onSearch}
          placeholder="Search..."
          placeholderTextColor='#6d2d29'
          style={styles.searchInput}
        />
        <Button
          buttonStyle={styles.searchBtn}
          icon={<FontAwesome name='search' size={20} color='white' />}
          onPress={onSearch} />
      </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'white',
    opacity: 0.6,
    backgroundColor: 'transparent',
  },
  searchInput: {
    color: 'black',
    fontSize: 17,
    width: '90%'

  },
  searchBtn: {
    backgroundColor:'#a16bde',
    marginRight: 2
  }
});

export default SearchBar;
