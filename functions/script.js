exports.handler = async function () {

    var body;

    axios({
        url: `https://expensemate-staging.netlify.app/api/companies?name=${companyName}`,
        method: 'get'
    })
        .then(function (response) {
            body = response;
        })
        .catch(function (error) {
            body = error;
        });

        return {
            statusCode: 200,
            body: JSON.stringify(body)
        }
}