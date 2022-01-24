var search = document.getElementById("cname");
var timer = 0;

search.addEventListener("keyup", function () {
  clearTimeout(timer);
  timer = setTimeout(function () {
    autocomplete();
  }, 400);
});

async function autocomplete() {
  if (search.value.length > 2) {
    var arr = await mySubmit();
    var container, listItems, i;
    container = document.createElement("DIV");
    container.setAttribute("class", "autocomplete-items");
    search.parentNode.appendChild(container);

    for (i = 0; i < arr.length; i++) {
      listItems = document.createElement("DIV");
      listItems.innerHTML = arr[i].title;
      listItems.innerHTML +=
        "<input type='hidden' value='" + arr[i].title + "'>";
      listItems.addEventListener("click", function () {
        search.value = this.getElementsByTagName("input")[0].value;
      });
      container.appendChild(listItems);
    }
  }
}

async function mySubmit() {
  let companyResult;

  var companyName = document.getElementById("cname").value;
  await fetch(`/.netlify/functions/script?url=${companyName}`)
    .then((response) => response.json())
    .then((data) => (companyResult = data.items));

  return companyResult;
}
