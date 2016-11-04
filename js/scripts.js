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

  if (this.toppings.length <= 2) {
    pizzaPrice;
  } else {
    pizzaPrice += (this.toppings.length - 2) * 1;
  }
  return pizzaPrice;
}

// UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    $("form").

  });
});
