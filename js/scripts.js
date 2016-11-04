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

// UI Logic
$(document).ready(function(){

  var finalOrderPrice = 0;
  var pizzaNumber = 0;

  $("form").submit(function(event){
    event.preventDefault();
    var toppings = $("input:checkbox[name=toppings]:checked").each(function(){
      $(this).val();
    });
    var userSizeSelection = $("input:radio[name=userSizeSelection]:checked").val();
    var pizzaOrder = new Pizza(toppings, userSizeSelection);
    var pizzaOrderPrice = pizzaOrder.price();

    ///refactor append section
    $("#pizzas ul").append("<li>" + pizzaOrder.pizzaSize + " pizza with " + pizzaOrder.toppings.length + " topping(s): $" + pizzaOrderPrice + "</li>");
    $("#subtotal").show();

    console.log(pizzaOrderPrice);
    /// does this count as ui or business
    finalOrderPrice += pizzaOrderPrice;
    pizzaNumber ++;
    $(".total").text(finalOrderPrice);
    $("#finalOrder").show();

    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", function () {
      return this.getAttribute("checked") === "checked";
    });

  }); //submit

  $("#finalOrder").click(function() {
    $("#pizzas").hide();
    $("#subtotal").hide();
    $("#finalOrder").hide();
    $("form").hide();
    $("#receipt").show();
    $("#pizzaNumber").text(pizzaNumber);
  });

});
