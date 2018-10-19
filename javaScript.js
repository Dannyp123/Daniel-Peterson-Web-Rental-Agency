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
  var header = document.querySelector("#shoppingCartNum");
  var myNum = Number(header.innerText);
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

function confirmMessage() {
  var choice = confirm(
    `Your order of ${
      document.querySelector("#shoppingCartNum").innerText
    } vehicle(s) for a total of $${
      document.querySelector("#totalCartNum").innerText
    } per day will now be processed. Please confirm order.`
  );
  if (choice) {
    alert("Thank you for your business. Please come again soon.");
  } else {
    alert(
      "Sorry if there was any problems with our services, but your order has been cancelled. Thanks for your time."
    );
  }
}
settingUpInventory();
