/*eslint-env browser*/

function myFavoriteRecipe(info) {
  this.title = info.title || 'Not Set';
  this.serves = info.serves || 0;
  this.ingredients = [];
  this.addIngredients = function(item) {
    this.ingredients.push(item);
 };
}

myFavoriteRecipe.prototype.displayRecipe = function() {
    var s = "";
    s = this.title + '\nServes: ' + this.serves + '\nIngredients:\n';
    for (var i in this.ingredients) {
        s += "- " + this.ingredients[i] + '\n';
    }
    return s;
}

var recipe = new myFavoriteRecipe({
  title: 'Guacamole',
  serves: 8
});
recipe.addIngredients("3 Avocados");
recipe.addIngredients("1 Lime");
recipe.addIngredients("1 TSP salt");
recipe.addIngredients("1/2 Cup Onion");
recipe.addIngredients("3 Tablespoons of Cilantro");
recipe.addIngredients("2 Diced Tomatoes");
recipe.addIngredients("1 pinch Ground Pepper");

window.console.log(recipe.displayRecipe());



