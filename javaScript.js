function settingUpInventory() {
  var inventoryItems = document.querySelector("#template-inventory").innerHTML;
  var template = Handlebars.compile(inventoryItems);
  for (index in INVENTORY.vehicles) {
    let vehicle = INVENTORY.vehicles[index];
    var html = template({
      index: index,
      vehicle: vehicle
    });
    document
      .querySelector("#insert-template-here")
      .insertAdjacentHTML("beforeend", html);
  }
}

function workingForms() {
  const formLink = document.querySelector("#checkout-link");
  const header = document.querySelector("#shoppingCartNum");
  const myNum = Number(header.innerText);
  if (myNum > 0) {
    formLink.style.display = "block";
  } else {
    formLink.style.display = "none";
  }
}
document.body.addEventListener("click", workingForms);

function removeStock(cardIndex) {
  var cards = document.querySelectorAll(".itemCard");
  cards[cardIndex].querySelector(".cardStock").innerHTML =
    cards[cardIndex].querySelector(".cardStock").innerHTML - 1;
}

function rentItem(index) {
  var cards = document.querySelectorAll(".itemCard");
  var item = INVENTORY.vehicles[index];
  var totalArea = document.querySelector("#totalCartNum");
  if (cards[index].querySelector(".cardStock").innerText > 0) {
    totalArea.innerHTML = item.priceperday + Number(totalArea.innerHTML);
    removeStock(index);
    addingToCart();
    showingCart();
  } else if (cards[index].querySelector(".cardStock").innerHTML === "0") {
    cards[index].querySelector("#rentingButton").innerText = "Sold Out";
    cards[index]
      .querySelector("#rentingButton")
      .classList.replace("btn-primary", "btn-danger");
  }
}

function addingToCart() {
  var Cart = document.querySelector("#shoppingCartNum");
  Cart.innerText = Number(Cart.innerText) + 1;
}

function showingCart() {
  var Cart = document.querySelector("#cartButton");
  Cart.innerText = Number(Cart.innerText) + 1;
}

function thankyouTemplate() {
  var email = document.querySelector("#email-info").value;
  var inventoryItems = document.querySelector("#thankyou-page").innerHTML;
  var template = Handlebars.compile(inventoryItems);
  var items = `Number of vehicle(s): ${
    document.querySelector("#shoppingCartNum").innerText
  }`;
  var total = `Total for those vehicle(s):
  $${document.querySelector("#totalCartNum").innerText}`;

  var html = template({
    greeting:
      "Thank you for visiting Danny's Rent-a-Ride, Have a blessed day!!",
    paragraph: `We will email you at ${email} to confirm your order.`,

    items: items,

    total: total,

    email: "Dannys Rent-a-Ride@gmail.com",

    phone: "(872)-785-3235",

    address1: "3422 West Central Avenue",
    address2: "Columbia, MT 34232",

    website: "https://dannyp123.github.io/Daniel-Peterson-Web-Rental-Agency/"
  });
  document.querySelector("#insert-new-template-here").innerHTML = html;
}

function confirmMessage() {
  const order = document.querySelector("#orderButton");
  const page = document.querySelector(".page");
  order.addEventListener("click", function(event) {
    event.preventDefault();
    thankyouTemplate();
    page.style.display = "none";
  });
}

function tryit() {
  const input = document.querySelector("#orderButton");
  input.addEventListener("click", confirmMessage);
}

settingUpInventory();
