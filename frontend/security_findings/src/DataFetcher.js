import axios from 'axios';

const fetchData = async (url) => {
  try {
    // Perform data fetching logic here (e.g., fetch data from an API)
    const response = await axios.get(url);
    const data = await response.data;
    console.log('Data fetched in fetch data: ', data);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;
