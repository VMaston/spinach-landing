function autocomplete() {
  var search = document.getElementById("cname");

  var timer;
  var timelimit = 500;

  search.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(find, timelimit);

    async function find() {
      if (search.value.length > 2) {
        var arr = await mySubmit();
        var container, listItems, i;
        container = document.createElement("DIV");
        container.setAttribute("id", this.id + "autocomplete-list");
        container.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(container);

        for (i = 0; i < arr.length; i++) {
          listItems = document.createElement("DIV");
          listItems.innerHTML = arr[i].title;
          listItems.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          listItems.addEventListener("click", function () {
            search.value = this.getElementsByTagName("input")[0].value;
          });
          container.appendChild(listItems);
        }
      }
    }
  });
}

async function mySubmit() {
  let companyResult;

  var companyName = document.getElementById("cname").value;
  await fetch(`/.netlify/functions/script?url=${companyName}`)
    .then((response) => response.json())
    .then((data) => (companyResult = data.items));

  return companyResult;
}
