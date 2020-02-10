import { useEffect, useState } from 'react'
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessages] = useState('')

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'new york'
        }
      });
      setResults(response.data.businesses)
    } catch (error) {
      setErrorMessages('Something went wrong')
    }
  }

  //Call searchApi when component is first rendered:
  useEffect(() => {
    searchApi('pasta')
  }, []);

  return [searchApi, results, errorMessage]

};