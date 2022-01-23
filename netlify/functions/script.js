const axios = require('axios');

exports.handler = async (event, context) => {

    const url = `https://expensemate-staging.netlify.app/api/companies?name=spinach`;
    console.log("URL: ", url)

    return axios({
        method: "get",
        url: url,
      })
        .then((response) => {
          console.log("data", response.data);
          return {
            statusCode: 200,
            body: JSON.stringify(response.data),
          };
        })
        .catch((error) => {
          console.log(error);
          return {
            statusCode: 500,
            body: JSON.stringify(error.message),
          };
        });

}