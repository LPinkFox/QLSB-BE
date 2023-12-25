import { allProductAPI } from './API'

const fetchData = async () => {
    try {
        const response = await fetch(allProductAPI);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const dataFromServer = await response.json();
        return dataFromServer;
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
};

const data = await fetchData();
data.forEach((item, i) => {
    item.imgsource = require(`./assets/${i + 1}.png`);
});

export default data;
