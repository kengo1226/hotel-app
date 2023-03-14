import axios from "axios";

export default async function handler(res, req) {
    const options = {
        method: 'GET',
        url: 'https://hotels4.p.rapidapi.com/locations/v3/search',
        params: {q: req.query.searchCity, locale: 'en_US', langid: '1033', siteid: '300000001'},
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