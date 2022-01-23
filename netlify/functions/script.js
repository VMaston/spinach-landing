import * as axios from 'https://unpkg.com/axios/dist/axios.min.js';

export async function handler(event, context) {

    axios({
        url: `https://expensemate-staging.netlify.app/api/companies?name=${companyName}`,
        method: 'get'
    })
        .then(function (response) {
            result = JSON.stringify(response.data);
        })
        .catch(function (error) {
            console.log(error)
        });

        let response = await fetch(`https://expensemate-staging.netlify.app/api/companies?name=${companyName}`);
        let data = await response.json();
        return data;
        
}