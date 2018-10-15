function showingInventory() {
  const show = document.querySelector("#inventoryLink");
  var firstItem = document.getElementById("first-item");
  show.addEventListener("click", function() {
    firstItem.innerHTML = INVENTORY.cars.make;
  });
}
showingInventory();
