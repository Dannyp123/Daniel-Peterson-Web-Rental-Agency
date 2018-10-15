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

function workingNavbar() {
  const home = document.querySelector("#home");
  const homeLink = document.querySelector("#home-link");
  homeLink.addEventListener("click", function() {
    home.style.display = "block";
  });
}

function workingForms() {
  const form = document.querySelector("#form-inputs");
  const formLink = document.querySelector("#cart-link");
  formLink.addEventListener("click", function() {
    form.style.display = "block";
  });
}

function addingToCart() {
  var rentButton = document.querySelector(".rentingButton");
  var checkoutArea = document.querySelector("#checkoutInput");
  for (car in INVENTORY.vehicles) {
    rentButton.addEventListener("click", function() {
      checkoutArea.innerHTML = car.make;
    });
  }
}
// function settingRentingButtonUp() {
//   for (stock of INVENTORY.vehicles) {
//     var rentButton = document.querySelector(".rentingButton");
//     var num = stock.instock;
//     rentButton.addEventListener("click", function() {
//       num--;
//     });
//   }
// }

settingUpInventory();
workingNavbar();
workingForms();
addingToCart();
// settingRentingButtonUp();
