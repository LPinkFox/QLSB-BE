import { allYardAPI, allYardRentedAPI } from './API'
const fetchData = async (APIlink) => {
    try {
        const response = await fetch(APIlink);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const dataFromServer = await response.json();
        return dataFromServer;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
const allYard = await fetchData(allYardAPI);
const rentedYard = await fetchData(allYardRentedAPI);
export { allYard, rentedYard }