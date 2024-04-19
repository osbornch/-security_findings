const fetchDataFromGroupFindingsBySeverity = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/groupFindingsBySeverity');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API 1:', error);
    throw error;
  }
};

const fetchDataFromGroupFindingsWithRawFindings = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/groupFindingsWithRawFindings');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data from API 2:', error);
    throw error;
  }
};

const fetchData = async () => {
  try {
    const dataFromGroupFindingsBySeverity = await fetchDataFromGroupFindingsBySeverity();
    const dataFromGroupFindingsWithRawFindings = await fetchDataFromGroupFindingsWithRawFindings();
    console.log('Data from API GroupFindingsBySeverity:', dataFromGroupFindingsBySeverity);
    console.log('Data from API GroupFindingsWithRawFindings:', dataFromGroupFindingsWithRawFindings);
    return [dataFromGroupFindingsBySeverity, dataFromGroupFindingsWithRawFindings]
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

export default fetchData;
