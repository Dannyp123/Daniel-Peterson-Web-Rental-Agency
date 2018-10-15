function settingUpInventory() {
  var inventoryItems = document.querySelector("#template-inventory").innerHTML;
  var template = Handlebars.compile(inventoryItems);
  var total = INVENTORY.vehicles.length;
  var html = "";
  for (vehicle = 0; vehicle < total; vehicle++) {
    html += template({
      make: `${INVENTORY.vehicles[vehicle].make}`,
      model: `${INVENTORY.vehicles[vehicle].model}`
    });
  }
  document.querySelector("#insert-template-here").innerHTML = html;
}

// function settingUpInventory() {
//   const make = document.querySelector(".make-info");
//   const model = document.querySelector(".model-info");
//   const year = document.querySelector(".year-info");
//   const inStock = document.querySelector(".stock-info");
//   const price = document.querySelector(".price-info");

//   make.innerText = INVENTORY.car1.make;
//   model.innerText = INVENTORY.car1.model;
//   year.innerText = INVENTORY.car1.color;
//   inStock.innerText = INVENTORY.car1.instock;
//   price.innerText = `$${INVENTORY.car1.priceperday}`;
// }

settingUpInventory();
