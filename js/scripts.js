// Business Logic
function Pizza(toppings, pizzaSize) {
  this.toppings = toppings;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0;

  if (this.pizzaSize === "Small") {
    //return?
    pizzaPrice += 5;
  } else if (this.pizzaSize === "Medium") {
    pizzaPrice += 10;
  } else if (this.pizzaSize === "Large") {
    pizzaPrice += 15;
  }

  for (var j = 2; j < this.toppings.length; j++) {
    pizzaPrice += 1;
  }

  return pizzaPrice;
}

var finalOrderPrice = 0;

// UI Logic
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var toppings = $("input:checkbox[name=toppings]:checked").each(function(){
      $(this).val();
    });
    var userSizeSelection = $("input:radio[name=userSizeSelection]:checked").val();
    var pizzaOrder = new Pizza(toppings, userSizeSelection);
    var pizzaOrderPrice = pizzaOrder.price();
    $("#pizzas").append("<li>" + pizzaOrder.pizzaSize + " pizza with " + pizzaOrder.toppings.length + " topping(s)" + "</li>");

    console.log(pizzaOrderPrice);
    finalOrderPrice += pizzaOrderPrice;
    $("#finalOrder").show();

    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", function () {
      return this.getAttribute("checked") === "checked";
    });

  }); //submit

  $("#finalOrder").click(function() {
    console.log(finalOrderPrice);
  });

});
