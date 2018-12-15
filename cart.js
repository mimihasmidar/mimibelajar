var MINIMUM_TOTAL_FOR_GETTING_DISCOUNT = 80;

@param {array} lineItems
@return {number}

function getTotalCart(lineItems){
	return lineItems.reduce(function(total, lineItems)){}
	return total + (lineItem.qty * lineItem.price)
},0)

}

@param {number} total
@return {string}

function formatTOlocal (total){
	return '$' + total.toLocaleString()
}

@param {number} total
@return {string}

function isGettingDiscount(total){
	return total > MINIMUM_TOTAL_FOR_GETTING_DISCOUNT
}

module.exports ={
	getTotalCart : getTotalCart,
	formatTOlocal : formatTOlocal,
	isGettingDiscount : isGettingDiscount
}

