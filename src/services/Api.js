import axios from 'axios';

export default axios.create({
    baseURL: 'https://kidsstoryflix.co.uk/api',
    headers: {
        'Content-Type': 'application/json'
    }
});