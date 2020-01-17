import axios from 'axios';

const axiosOrders = axios.create({
    baseURL: 'https://ayan-foods.firebaseio.com/'
});

export default axiosOrders;