exports.handler = async function(event, context) {

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

    return {
        statusCode: 200,
        body: result
    }
}