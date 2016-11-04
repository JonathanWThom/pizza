
# _JT's Pizza Emporium_

#### _Web application that takes orders for multiple pizzas and returns user a price. 11.4.16_

#### By _**Jonathan Thom**_

## Description

_User selects pizza size and toppings for as many pizzas they want. The price increases depending on the size of pizza and how many toppings they choose to have. If they choose to have the pizza delivered, it will also prompt them to enter their address information._

## Setup/Installation Requirements

* _View here: http://www.jonathanwthom.github.io/pizza_
* _Works in any modern web browser._

## Specifications

1. Will take user input for pizza size and compute base price.
  * <b>Example Input:</b> "Small"
  * <b>Example Output:</b> "$5"

2. Will take user input for toppings and compute price based on number of toppings.
  * <b>Example Input:</b> "Small" + "Olives, mushrooms, green peppers"
  * <b>Example Output:</b> "$6"

3. User can input multiple pizzas, all prices will total.
  * <b>Example Input:</b> "Small" + "Olives, mushrooms, green peppers"; "Medium" + "Olives"
  * <b>Example Output:</b> "$16"

4. If user chooses delivery option, they will be prompted for their address info.
  * <b>Example Input:</b> "Delivery"
  * <b>Example Output:</b> Empty forms for: Street, City, State

5. Will not accept empty fields.
  * <b>Example Input:</b> Blank field
  * <b>Example Output:</b> "Please fill all fields"

6. Page will return receipt upon order submission.
  * <b>Example Input:</b> Submit Order
  * <b>Example Output:</b> "Thank you! Your order of [Pizzas Ordered] pizzas will be done shortly. It will be delivered [User Address]."

7. Will go back to start page.
  * <b>Example Input:</b> Click on pizza picture at end
  * <b>Example Output:</b> Returns to landing page


## Support and contact details

_Contact Jonathan at: jonathan.thom1990@gmail.com_

## Technologies Used

_Written with HTML, CSS (+Bootstrap), and Javascript (+jQuery)._

### License

*MIT*

Copyright (c) 2016 **_Jonathan Thom_**
