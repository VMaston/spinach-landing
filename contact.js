var search = document.getElementById("cname");
var timer = 0;

search.addEventListener("keyup", () => {
  clearTimeout(timer);
  timer = setTimeout(() => {
    autocomplete();
  }, 400);
});

async function autocomplete() {
  if (search.value.length > 2) {
    closeAllLists();
    var arr = await getCompany();
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
        closeAllLists();
      });
      container.appendChild(listItems);
    }
  }
}

function closeAllLists() {
  var x = document.getElementsByClassName("autocomplete-items");
  for (var i = 0; i < x.length; i++) {
    x[i].parentNode.removeChild(x[i]);
  }
}

document.addEventListener("click", () => {
  closeAllLists();
});

search.addEventListener("click", () => {
  autocomplete();
});

async function getCompany() {
  let companyResult;

  var companyName = document.getElementById("cname").value;
  await fetch(`/.netlify/functions/script?url=${companyName}`)
    .then((response) => response.json())
    .then((data) => (companyResult = data.items));

  return companyResult;
}

async function mySubmit() {
  var email = document.getElementById("email").value;
  var companyName = document.getElementById("cname").value;
  var companyDetails = await getCompany();
  if (
    companyDetails[0].title.replace(/\s+/g, "") ==
    companyName.replace(/\s+/g, "").toUpperCase()
  ) {
    companyDetails = companyDetails[0];
  } else {
    companyDetails = "No Match";
  }

  let jsonReturn = {
    email: email,
    companyName: companyName,
    company: companyDetails,
  };

  document.getElementById("contact").reset();

  console.log(jsonReturn);
}
