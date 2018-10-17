function settingUpInventory() {
  var inventoryItems = document.querySelector("#template-inventory").innerHTML;
  var template = Handlebars.compile(inventoryItems);
  // for (vehicle of INVENTORY.vehicles) {
  for (index in INVENTORY.vehicles) {
    let vehicle = INVENTORY.vehicles[index];
    var html = template({
      index: index,
      make: `${vehicle.make}`,
      model: `${vehicle.model}`,
      year: `${vehicle.year}`,
      description: vehicle.description,
      instock: `${vehicle.instock}`,
      priceperday: `$${vehicle.priceperday}`,
      color: `${vehicle.color}`,
      image: vehicle.image
    });
    document
      .querySelector("#insert-template-here")
      .insertAdjacentHTML("beforeend", html);
  }
}

function workingCart() {
  const cart = document.querySelector("#cart");
  const cartLink = document.querySelector("#cart-link");
  cartLink.addEventListener("click", function() {
    cart.style.display = "block";
  });
}

function workingForms() {
  const formLink = document.querySelector("#checkout-link");
  var header = document.querySelector("#shoppingCartNum");
  if (header.innerText > 0) {
    formLink.style.display = "block";
  } else {
    formLink.style.display = "none";
  }
}
document.body.addEventListener("click", workingForms);

function workingCartForms() {
  const form = document.querySelector("#check-out");
  const formLink = document.querySelector("#checkout-link");
  formLink.addEventListener("click", function() {
    form.style.display = "block";
  });
}

function removeStock(cardIndex) {
  var cards = document.querySelectorAll(".itemCard");
  cards[cardIndex].querySelector(".cardStock").innerHTML =
    cards[cardIndex].querySelector(".cardStock").innerHTML - 1;
}

function rentItem(index) {
  var cards = document.querySelectorAll(".itemCard");
  var item = INVENTORY.vehicles[index];
  var totalArea = document.querySelector(".totalCartNum");
  if (cards[index].querySelector(".cardStock").innerText > 0) {
    totalArea.innerHTML = item.priceperday + Number(totalArea.innerHTML);
    removeStock(index);
    addingToCart();
  } else if (cards[index].querySelector(".cardStock").innerHTML === "0") {
    cards[index].querySelector("#rentingButton").innerText = "Sold Out";
  }
}

function addingToCart() {
  var Cart = document.querySelector("#shoppingCartNum");
  Cart.innerText = Number(Cart.innerText) + 1;
}

settingUpInventory();
workingCart();
workingCartForms();
