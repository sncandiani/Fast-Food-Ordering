const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal)
    },
    orders: [], 
    listOrders: function () { 
        this.orders.forEach(order => console.log(order.hasFries))
        return this.orders
    }
}

const chickenComboMeal = {
    sandwichType: "Panini",
    hasFries: true , 
    drinksize: "Large"
}

const veggieComboMeal = {
    sandwichType: "Panini", 
    hasFries: false, 
    drinksize: "Small"
}

// Place an order
restaurant.placeOrder(chickenComboMeal)
restaurant.placeOrder(veggieComboMeal)

// Invoke the function to return the list of all orders
restaurant.listOrders()
// Output all orders to the console using console.table()
console.table(restaurant.orders)

