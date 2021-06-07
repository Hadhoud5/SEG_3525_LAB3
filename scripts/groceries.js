	
	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli.         1.99$",
		nutfree: true,
		lactosefree: true,
		price: 1.99
	},
	{
		name: "pain             2.35$",
		nutfree: true,
		lactosefree: false,
		price: 2.35
	},
	{
		name: "fromage blanc        3.00$",
		nutfree: true,
		lactosefree: false,
		price: 3.00
	},
	{
		name: "lait de vache        3.90$",
	    nutfree: true,
		lactosefree: false,
		price: 3.90
	},
	{
		name: "noix de cajou     3.99$",
		nutfree: false,
		lactosefree: true,
		price: 3.99
	},
	{
		name: "beurre de cacahuète   4.49$",
		nutfree: false,
		lactosefree: true,
		price: 4.49
	},
	{
		name: "pate d'amandes     4.49$",
		nutfree: false,
		lactosefree: true,
		price: 5.49
	},
	{
		name: "saumon           10.00$",
		nutfree: false,
		lactosefree: true,
		price: 10.00
	},
	{
		name: "Couches pour bébé           10.00$",
		babysupplies: true,
		price: 10.00
	},
	{
		name: "poulet              8.00$",
		nutfree: true,
		lactosefree: true,
		price: 8.00
	},
	{
		name: "thon                9.00$",
	    nutfree: true,
		lactosefree: true,
		price: 9.00
	},

];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "NutFree") && (prods[i].nutfree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "LactoseFree") && (prods[i].lactosefree == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Include Baby supplies") && (prods[i].babysupplies == true)){
			product_names.push(prods[i].name);
		}
		else if ((restriction == "Include carrot") && (prods[i].lactosefree == true)){
			product_names.push(prods[i].name);
		}

		else if (restriction == "None"){
			product_names.push(prods[i].name);
		}
	}
	return product_names;
}

// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}