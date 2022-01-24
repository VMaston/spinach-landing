const fetch = require("node-fetch");

exports.handler = async (event, context) => {
  const url = `https://expensemate-staging.netlify.app/api/companies?name=${event.queryStringParameters.url}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { statusCode: 200, body: JSON.stringify({ data }) };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed fetching data" }),
    };
  }
};
