exports.handler = async function(event, context) {

    var axiosload = document.createElement('script');
    axiosload.setAttribute('src', 'https://unpkg.com/axios/dist/axios.min.js')
    document.head.appendChild(axiosload);

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