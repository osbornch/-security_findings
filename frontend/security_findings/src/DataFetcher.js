import axios from 'axios';

const fetchData = async () => {
  try {
    // Perform data fetching logic here (e.g., fetch data from an API)
    const response = await axios.get('http://localhost:3000/api/v1/grouped_findings');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchData;
