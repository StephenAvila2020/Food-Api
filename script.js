// fetch("http://localhost:8088/food")
// .then(breweries => breweries.json())
// .then(parsedBrewriesArray => {

//     console.table(parsedBrewriesArray)

//     console.log("this is the console log", parsedBrewriesArray)
// })

// fetch("http://localhost:8088/food") // go rob the bank
// .then(foods => foods.json()) //cleaning the dirty money
// .then(function(parsedFoods){  //only place to spend the money

fetch("http://localhost:8088/food")
    .then(foods => foods.json())
    .then(parsedFoods => {
        console.table(parsedFoods)

        parsedFoods.forEach(food => {
            console.log(food)
            // Print foods to DOM
            fetch(`https://world.openfoodfacts.org/api/v0/product/${food.barcode}.json`)
                .then(response => response.json())
                .then(productInfo => {
                    if (productInfo.product.ingredients_text) {
                        food.ingredients = productInfo.product.ingredients_text
                    } else {
                        food.ingredients = "no ingredients listed"
                    }
                    if (productInfo.product.serving_size) {
                        food.servingSize = productInfo.product.serving_size
                    } else {
                        food.servingSize = "no serving size found"
                    }
                    if (productInfo.product.serving_size) {
                        food.servingSize = productInfo.product.serving_size
                    } else {
                        food.servingSize = "no serving size found"
                    }
                   console.log(productInfo)
                    document.querySelector(".foodList").innerHTML += `<div><h1>${food.name}</h1>
            <p>${food.category}</p>
            <p>${food.ethnicity}</p>
            <p>${food.barcode}</p>
            <p>${food.ingredients}</p>
            <p>${food.servingSize}</p></div>`
                
        })
    })
})