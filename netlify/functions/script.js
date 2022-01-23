exports.handler = async function(event, context) {

        let response = await fetch(`https://expensemate-staging.netlify.app/api/companies?name=${companyName}`);
        let data = await response.json();
        return data;
        
}