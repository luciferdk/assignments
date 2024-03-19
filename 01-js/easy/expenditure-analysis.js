/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  
  
  const categoryTotals = [];

  // Iterate through each transaction
  for (const transaction of transactions) {
    const category = transaction.category;

    // Find the existing category object in the results array
    const existingCategory = categoryTotals.find(
      (item) => item.category === category
    );

    // If the category exists, update the total spent
    if (existingCategory) {
      existingCategory.totalSpent += transaction.price;
    } else {
      // If the category doesn't exist, create a new object and add it to the results
      categoryTotals.push({ category, totalSpent: transaction.price });
    }
  }

  // Return the final array of category totals
  return categoryTotals;
  // return [];

}

module.exports = calculateTotalSpentByCategory;
