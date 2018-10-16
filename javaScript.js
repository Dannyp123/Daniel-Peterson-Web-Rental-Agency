function settingUpInventory() {
  var inventoryItems = document.querySelector("#template-inventory").innerHTML;
  var template = Handlebars.compile(inventoryItems);
  for (vehicle of INVENTORY.vehicles) {
    var html = template({
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

function clickingRentButton() {
  var cards = document.querySelectorAll(".itemCard");
  var buttons = document.querySelectorAll(".rentingButton");
  buttons.forEach(function(button, index) {
    button.addEventListener("click", function() {
      if (cards[index].querySelector(".cardStock").innerText > 0) {
        removeStock(index);
        addingToCart();
      }
    });
  });
}

function addingToCart() {
  var Cart = document.querySelector(".shoppingCartNum");
  Cart.innerText = Number(Cart.innerText) + 1;
}

settingUpInventory();
workingCart();
workingForms();
clickingRentButton();
