import axios from 'axios';

const fetchData = async () => {
  try {
    // Perform data fetching logic here (e.g., fetch data from an API)
    const response = await axios.get('http://localhost:3000/api/v1/groupFindingsWithRawFindings');
    const data = await response.data;
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;
