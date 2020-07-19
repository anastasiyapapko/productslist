var products = {
    Fruits: ["Mango", "Banana", "Apple"],
    Vegetables: ["Tomato", "Cucumber", "Broccoli"]
}

// Dodanwanie nowych produktów do listy 
function addNewFruit() {
    var inputFruit = document.getElementById('inputFruit').value;
    products.Fruits.push(inputFruit);

    var fval = "";

    for(i = 0; i < products.length; i++)
    {
        fval = fval + products[i] + "<br/>";
    }
    document.getElementById('pTextFruit').innerHTML =  fval;
  }

  function addNewVeg() {
    var inputVeg = document.getElementById('inputVeg').value;
    products.Vegetables.push(inputVeg);

    var vval = "";

    for(i = 0; i < products.length; i++)
    {
        vval = vval + products[i] + "<br/>";
    }
    document.getElementById('pTextVeg').innerHTML =  vval;
  }

// Menu kategorii produktów
function makeCatmenu(value) {
    if (value.length == 0) document.getElementById("productSelect").innerHTML = "<option></option>";
    else {
        var productsOptions = "";
        for (productId in products[value]) {
            productsOptions += "<option>" + products[value][productId] + "</option>";
        }
        document.getElementById("productSelect").innerHTML = productsOptions;
    }
}



function addItem() {
    var ul = document.getElementById("listproduct");
    var productSelect = document.getElementById("productSelect");
    var pnumber = document.getElementById("pnumber");
    var pweight = document.getElementById("pweight");
    var li = document.createElement("li");
    li.setAttribute('id', productSelect.value,pnumber.value,pweight.value);
    li.appendChild(document.createTextNode(productSelect.value + '\xa0'));
    li.appendChild(document.createTextNode(pnumber.value + '\xa0'));
    li.appendChild(document.createTextNode(pweight.value + '\xa0'));
    var button = document.createElement("button");
    button.innerHTML = "remove an item";
    button.onclick = function() {removeItem()};
    li.appendChild(button);
    ul.appendChild(li);

    

}

function productsNumber() {
    var count = document.getElementById("listproduct").childElementCount;
    document.getElementById("number").innerHTML = count;
  }


// Funkcja usuwania produktu z listy

function removeItem() {
    var ul = document.getElementById("listproduct");
    var productSelect = document.getElementById("productSelect");
    var productSelect = document.getElementById("productSelect");
    var item = document.getElementById(productSelect.value);
    ul.removeChild(item);

}

