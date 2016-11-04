///// Business Logic /////
function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
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

  if (delivery === true) {
    pizzaPrice +=5;
  }

  return pizzaPrice;
}

Address.prototype.format = function() {
  return "Your pizza will be delivered to: " + this.street + ", " + this.city + ", " + this.state;
}

var finalOrderPrice = 0;
var pizzaNumber = 0;

function optionChosen() {
  $("#mainInfo").show();
  $("#addPizza").show();
  $("#options").hide();
  $("#userInputFields").show();
}

///// User Interface Logic /////
$(document).ready(function(){

  /// Delivery vs Carry Out ///
  $("#delivery").click(function(){
    optionChosen();
    $("#addressInfo").show();
  });

  $("#carryOut").click(function() {
    optionChosen();
  });

  /// Create a pizza ///
  $("form").submit(function(event){
    event.preventDefault();

    // User input //
    var userSizeSelection = $("input:radio[name=userSizeSelection]:checked").val();
    var pizzaOrder = new Pizza(userSizeSelection);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var newTopping = $(this).val();
      pizzaOrder.toppings.push(newTopping);
      });
    var pizzaOrderPrice = pizzaOrder.price();

    // Lists Pizzas //
    $("#pizzas ul").append("<li><span class='newPizza'>" + pizzaOrder.pizzaSize + " pizza with " + pizzaOrder.toppings.length + " topping(s): $" + pizzaOrderPrice + "</span></li>");
    $("#subtotal").show();

    // Totals all pizza prices thus far together //
    finalOrderPrice += pizzaOrderPrice;
    pizzaNumber ++;
    $(".total").text(finalOrderPrice);
    $("#orderSummary").show();
    $("#finalOrder").show();

    // Click on Pizza to see what toppings you chose //
    $(".newPizza").last().click(function() {
      $("#extraInfo").show();
      $(".toppings").text(pizzaOrder.toppings);
    });

    // Reset fields to make new pizza //
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", function () {
      return this.getAttribute("checked") === "checked";
    });
  }); //submit

  /// Sumbit final order. Sends you to receipt page ///
  $("#finalOrder").click(function() {
    $("#extraInfo").hide();
    $("#pizzas").hide();
    $("#subtotal").hide();
    $("#finalOrder").hide();
    $("form").hide();
    $("#receipt").show();
    $("#orderSummary").hide();
    $("#finalOrder").hide();
    $("#userInputFields").hide();
    var userName = $("#name").val();
    $("#userName").text(userName);
    $("#pizzaNumber").text(pizzaNumber);
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var userAddress = new Address(street, city, state);
    if (street !== "") {
      $("#receiptWell").append(userAddress.format());
    }
  });

  // Reload Page //
  $("#finalPizza").click(function(){
    document.location.reload(true);
  });

});
