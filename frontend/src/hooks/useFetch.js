import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url) {

  const [data, setData] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      try {

        setLoading(true);

        const response = await axios.get(url);

        setData(response.data);

      } catch (err) {

        setError(err.message);

      } finally {

        setLoading(false);

      }

    };

    fetchData();

  }, [url]);

  return {
    data,
    loading,
    error
  };

}

export default useFetch;