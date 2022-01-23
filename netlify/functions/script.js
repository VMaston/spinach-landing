exports.handler = async function(event, context) {

    fetch(`https://expensemate-staging.netlify.app/api/companies?name=${companyName}`)
    .then((response) => {
      return response.json();
    })
}