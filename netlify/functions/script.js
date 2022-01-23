const axios = require('axios');

exports.handler = async (event, context) => {

    const url = `https://expensemate-staging.netlify.app/api/companies?items_per_page=5?name=${event.queryStringParameters.url}`;

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