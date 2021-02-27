import { useState, useEffect } from 'react';

function useFetch(initialUri) {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [uri, setUri] = useState(initialUri);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(uri);
        const jsonResponse = await response.json();
        setData(jsonResponse);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [uri]);

  return [isLoading, data, setUri];
}

export default useFetch;
