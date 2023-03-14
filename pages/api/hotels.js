import axios from "axios";


export default async function handler(res, req) {
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/properties/list',
        params: {
            destinationId: req.query.city,
            pageNumber: '1',
            pageSize: '25',
            checkIn: req.query.checkIn,
            checkOut: req.query.checkOut,
            adults1: req.query.guests,
            sortOrder: 'PRICE',
            locale: 'en_US',
            currency: 'USD'
        },
        headers: {
            'X-RapidAPI-Key': '56bdd9abc8mshc1e69b1c6e4608ep1e5aa9jsn72fcd537eba6',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
} 