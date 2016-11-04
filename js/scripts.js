// Business Logic
function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0;

  if (this.pizzaSize === "small") {
    //return?
    pizzaPrice += 5;
  } else if (this.pizzaSize === "medium") {
    pizzaPrice += 10;
  } else if (this.pizzaSize === "large") {
    pizzaPrice += 15;
  }

  for (var i = 2; i < this.toppings.length; i++) {
    pizzaPrice += 1;
  }
  
  return pizzaPrice;
}
// UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var toppings = $("input:checkbox[name=toppings]:checked").each(function(){
      $(this).val();
    });

    //var userToppingsSelections =

    var userSizeSelection = $("input:radio[name=userSizeSelection]:checked").val();
    var pizzaOrder = new Pizza(toppings, userSizeSelection);
    var pizzaOrderPrice = pizzaOrder.price();
    console.log(pizzaOrderPrice);

  });
});
