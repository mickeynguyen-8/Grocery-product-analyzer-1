// DS ASGN STARTER TEMPLATE

// DOM Elements
let outputEl = document.getElementById('output');

// Global variables
let groceryData = [];

//Load Grovery Data into array 
fetch('grocery-data.txt').then((rawData) => rawData.text()).then(processData);

//Create Data Struction Functions
function processData(textData) {
    //Split text file into lines
    let lines = textData.split('\r\n');

    //For each lines, create an object and add to groceryData.array
    for (let i = 0; i < lines.length; i++) {
        groceryData.push(newProductObject(lines[i]));
        
    }
    
}

//Split the product into a separate string
function newProductObject(productString) {
    let productArray = productString.split(";");
    return {
        name : productArray[0],
        price : Number(productArray[1]),
        country : productArray[2]
    }
}

//Display all products
function displayAllProducts() {
    //Output the total # of products
    outputEl.innerHTML = "<h2>Display All Products</h2>";
    outputStr = "<ul>";
    for (let i = 0; i < groceryData.length; i++) {
        outputEl.innerHTML += "<li>"  + productString(groceryData[i]) + "</li>";
    }
    outputStr = "</ul>";
    outputEl.innerHTML += "<p>Total number of products : " + groceryData.length + "</p>";
}

//Display price range the user offers
function displayPriceRange() {
    //Output all products with a user specified price range
    let lowPrice = Number(prompt("Please enter lowest price: "));
    let highPrice = Number(prompt("Please enter highest price: "));

    let count = 0;

    outputEl.innerHTML = "<h2>Display Price Products</h2>";
    outputStr = "<ul>";
    for (let i = 0; i < groceryData.length; i++) {
        let product = groceryData[i];
        if (product.price >= lowPrice && product.price <= highPrice){
            outputEl.innerHTML += "<li>"  + productString(product) + "</li>";
            count++;
        }
        
    }
    outputStr = "</ul>";
    outputEl.innerHTML += "<p>Total number of products : " + count + "</p>";
    
}

//Display country the user wants
function displayCountryofOrgin() {
    //Output all products with a user specified price range
    let nameCountry = prompt("Please enter a country: ");

    let count = 0;

    outputEl.innerHTML = "<h2>Display Country of Orgin</h2>";
    outputStr = "<ul>";
    for (let i = 0; i < groceryData.length; i++) {
        let specificCountry = groceryData[i];
        if (specificCountry.country == nameCountry){
            outputEl.innerHTML += "<li>"  + productString(specificCountry) + "</li>";
            count++;
        }
        
    }
    outputStr = "</ul>";
    outputEl.innerHTML += "<p>Total number of products : " + count + "</p>";
    
}

//Display a random product
function displayRandomProduct() {
    //Display a random product
    outputEl.innerHTML = "<h2>Display A Random Product</h2>";
    let randomProduct = Math.randomElement(groceryData);
    outputEl.innerHTML += productString(randomProduct);
}

//Display the inflation for each products
function productInflation() {
    //Increase each products price by 7%
    outputEl.innerHTML = "<h2>Display Inflation</h2>";
    outputStr = "<ul>";
    for (let i = 0; i < groceryData.length; i++) {
        let charge = groceryData[i];
        let outputStr = charge.name + " $" + Math.round(charge.price * 1.07) + " (" + charge.country + ")";
        outputEl.innerHTML += "<li>" + outputStr + "</li>";
    }
    outputStr = "</ul>";
    outputEl.innerHTML += "<p>Each products has increased by 7% </p>";
    
}

//Add a new product
function addNewProduct() {
    let addNewName = prompt("Please enter a product you like to eat: ");
    let addNewPrice = prompt("Please enter the price of the product: ");
    let addNewCountry = prompt("Where does the product make: ");

    
}





//Helper Function
function productString(aProduct) {
    return aProduct.name + " $" + Math.round(aProduct.price * 1.07) + " (" + aProduct.country + ")"
}



// Main Menu & Go Button
document.getElementById('go').addEventListener('click', mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = document.getElementById('menu').value;

    // Take action based on menu selection
    if (selection == 'display-all') {
        displayAllProducts();
    } else if (selection == 'display-price-range') {
       displayPriceRange();
    } else if (selection == 'display-country-of-orgin') {
        displayCountryofOrgin();
    } else if (selection == 'display-random-product') {
        displayRandomProduct();
    } else if (selection == "inflation") {
        productInflation();
    }
}


