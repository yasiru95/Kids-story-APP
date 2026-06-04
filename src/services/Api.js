import axios from 'axios';

export default axios.create({
    baseURL: 'http://132.145.72.192/api',
    headers: {
        'Content-Type': 'application/json'
    }
});