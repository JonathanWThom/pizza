// Business Logic
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

// UI Logic
$(document).ready(function(){

  var finalOrderPrice = 0;
  var pizzaNumber = 0;

  $("#delivery").click(function(){
    $("#mainInfo").show();
    $("#addressInfo").show();
    $("#addPizza").show();
    $("#delivery").hide();
    $("#carryOut").hide();
  });

  $("#carryOut").click(function() {
    $("#mainInfo").show();
    $("#addPizza").show();
    $("#delivery").hide();
    $("#carryOut").hide();
  });

  $("form").submit(function(event){
    event.preventDefault();
    var userSizeSelection = $("input:radio[name=userSizeSelection]:checked").val();
    var pizzaOrder = new Pizza(userSizeSelection);
    $("input:checkbox[name=toppings]:checked").each(function(){
      var newTopping = $(this).val();
      pizzaOrder.toppings.push(newTopping);
      });
    var pizzaOrderPrice = pizzaOrder.price();

    ///refactor append section
    $("#pizzas ul").append("<li><span class='newPizza'>" + pizzaOrder.pizzaSize + " pizza with " + pizzaOrder.toppings.length + " topping(s): $" + pizzaOrderPrice + "</span></li>");
    $("#subtotal").show();
//
    $(".newPizza").last().click(function() {
      $("#extraInfo").show();
      $(".toppings").text(pizzaOrder.toppings);
    });

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
    $("#extraInfo").hide();
    $("#pizzas").hide();
    $("#subtotal").hide();
    $("#finalOrder").hide();
    $("form").hide();
    $("#delivery").hide();
    $("#carryOut").hide();
    $("#receipt").show();
    var userName = $("#name").val();
    $("#userName").text(userName);
    $("#pizzaNumber").text(pizzaNumber);
    var street = $("#street").val();
    var city = $("#city").val();
    var state = $("#state").val();

    if (street !== "") {
      $("#receipt").append("Your pizza will be delivered to: " + street + ", " + city + ", " + state);
    }
  });

});
