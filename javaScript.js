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
  cards.forEach(function(button, index) {
    button.addEventListener("click", function() {
      if (cards[index].querySelector(".cardStock").innerText > 0) {
        removeStock(index);
      }
    });
  });
}

function addingToCart() {
  var inCart = document.querySelector(".shoppingCartNum");
  inCart.innerText = Number(inCart.innerText) + 1;
}

function placingTheOrder() {
  var cartNum = Number(document.querySelector(".shoppingCartNum").innerText);
  if (cartNum > 0) {
    document.querySelector("#checkOutButton").disabled = false;
  } else {
    document.querySelector("#checkOutButton").disabled = true;
  }
}

settingUpInventory();
workingCart();
workingForms();
clickingRentButton();
removeStock();
placingTheOrder();
addingToCart();
