exports.handler = async function(event, context) {

    var HttpClient = async function() {
        this.get = function(aUrl, aCallback) {
            var anHttpRequest = new XMLHttpRequest();
            anHttpRequest.onreadystatechange = function() { 
                if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                    aCallback(anHttpRequest.responseText);
            }
    
            anHttpRequest.open( "GET", aUrl, true );            
            anHttpRequest.send( null );
        }
    }

    var client = new HttpClient();
client.get(`https://expensemate-staging.netlify.app/api/companies?name=${companyName}`, async function(response) {
    let data = await response.json()
    return data
});

}