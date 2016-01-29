-- What would the user interaction be?
	Creating a list (Basket), Adding to the basket, removing from the basket, (summing the prices and showing a total number. )

-- What are the domain objects?
	A products list (Data/table?), a products total once in the cart (summing), displaying all products, adding into another data/table/collection/array the selected items to sum them up.

-- What are the presentation objects?
	Header, footer, Item Names, Total number, Prices

-- What views/controllers would you create?
	Index view that displays the total page. We would need a controller to interact with the view throught the models. I think if we have only one model (cart), since we can do the sum in one array, I might do only one controller, for controlling the viewing of the main page.

