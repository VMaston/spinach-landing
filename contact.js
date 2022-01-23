function autocomplete() {

    var search = document.getElementById("cname");

    search.addEventListener("input", function() {
        var arr = mySubmit();
        var container, listItems, i;
        container = document.createElement("DIV");
        container.setAttribute("id", this.id + "autocomplete-list");
        container.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(container);

        for (i = 0; i < arr.length; i++) {
            listItems = document.createElement("DIV");
            listItems.innerHTML = arr[i];
            listItems.innerHTML += "<input type='hidden' value='" + arr[i].title + "'>";
                listItems.addEventListener("click", function() {
                search.value = this.getElementsByTagName("input")[0].value;
            });
            container.appendChild(listItems);
          
        }
    });
  } 


async function mySubmit() {

    let companyResult;

    var companyName = document.getElementById("cname").value;
    await fetch(`/.netlify/functions/script?url=${companyName}`)
        .then(response => response.json())
        .then(data => companyResult = data.items)

        console.log("AA: " + companyResult);
        console.log("BB: " + companyResult[0].title);
        return companyResult;
}