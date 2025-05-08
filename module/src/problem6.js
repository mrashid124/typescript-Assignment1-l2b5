{
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        var mostExpensive = products[0];
        for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
            var product = products_1[_i];
            if (product.price > mostExpensive.price) {
                mostExpensive = product;
            }
        }
        return mostExpensive;
    }
    var products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 }
    ];
    console.log(getMostExpensiveProduct(products));
    // 
}
