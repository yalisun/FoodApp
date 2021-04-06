import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async(searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'San Jose'
        }
      });
      setResults(response.data.businesses); //update results
    } 
    catch (err) {
        console.log(err);
        setErrorMessage('Something went wrong');
    }
  };

  // call searchApi when component is first rendered.
  // searchApi('pasta'); // BAD CODE repetitive 
  useEffect(() => {
    searchApi('pasta');
  }, []);

  return [searchApi, results, errorMessage];
};