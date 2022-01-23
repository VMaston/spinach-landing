exports.handler = async function mySubmit() {

    var companyName = document.getElementById(cname);

    axios({
        url: `https://expensemate-staging.netlify.app/api/companies?name=spinach`,
        method: 'get'
    })
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error);
            return error;
        });
}