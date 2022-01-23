const axios = require('axios');

exports.handler = async (event, context) => {

    const url = `https://expensemate-staging.netlify.app/api/companies?name=${event.queryStringParameters.url}?limit=5`;

    return axios({
        method: "get",
        url: url,
      })
        .then((response) => {
          return {
            statusCode: 200,
            body: JSON.stringify(response.data),
          };
        })
        .catch((error) => {
          return {
            statusCode: 500,
            body: JSON.stringify(error.message),
          };
        });

}