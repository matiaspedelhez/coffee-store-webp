drink_button = document.getElementById("drink-button");
eat_button = document.getElementById("eat-button");

drink_items = document.getElementsByClassName("drinkitems");
eat_items = document.getElementsByClassName("eatitems");

function toggleDrinks(){
    selected(drink_button);
    unselected(eat_button);

    //cambiar menu de bebidas

    for(i = 0; i < eat_items.length; i++){
        eat_items[i].style.display = "none";
    } //Quita todos los elementos de tipo "Eat"

    for(i = 0; i < drink_items.length; i++){
        drink_items[i].style.display = "flex";
    } //Muestra todos los elementos de tipo "Drink"
}

function toggleEats(){
    selected(eat_button);
    unselected(drink_button);

    //cambiar menu de comidas
    
    for(i = 0; i < drink_items.length; i++){
        drink_items[i].style.display = "none";
    } //Quita todos los elementos de tipo "Drink"

    for(i = 0; i < eat_items.length; i++){
        eat_items[i].style.display = "flex";
    } //Muestra todos los elementos de tipo "Eat"
}

function selected(Element){
    Element.style.backgroundColor = "#42201B";
    Element.style.color = "white";
}

function unselected(Element){
    Element.style.backgroundColor = "white";
    Element.style.color = "black";
}