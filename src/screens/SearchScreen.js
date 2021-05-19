import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from  '../components/ResultsList';
import { ScrollView } from 'react-native-gesture-handler';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    // price === '$' || '$$' || '$$$'
    return results.filter(results => {
      return results.price === price;
    })
  }

  return (
    <>
      <SearchBar 
        term={term} 
        onTermChange={setTerm} //onTermChange={newTerm => setTerm(newTerm)} 
        onTermSubmit={searchApi} //onTermSubmit={() => searchApi()}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      {/* <Text>we have found {results.length} results</Text> */}
      <ScrollView>
      <ResultsList 
        results={filterResultsByPrice('$')}
        title="Cost Effective"
        />
      <ResultsList
        results={filterResultsByPrice('$$')}
        title="Bit Pricer"
      />
      <ResultsList 
        results={filterResultsByPrice('$$$')}
        title="Big Spender"
      />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;