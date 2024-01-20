// Search button element
const searchBtn = document.getElementById('search-btn');

// Get the meal list element
const mealList = document.getElementById('meal');

// Get the meal details content element
const mealDetailsContent = document.querySelector('.meal-details-content');

// Get the recipe close button element
const recipeCloseBtn = document.getElementById('recipe-close-btn');

// Event listener for the search button
searchBtn.addEventListener('click', getMealList);

// Event listener for the meal list
mealList.addEventListener('click', getMealRecipe);

// Event listener for the recipe close button
recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('showRecipe');
  });

  // Function to get the meal list that matches the ingredients
function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();

    // Function to get the recipe of the selected meal
function getMealRecipe(e) {
    e.preventDefault();
}
// Fetch the recipe data from the API based on the selected meal ID
fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
.then(response => response.json())
.then(data => mealRecipeModal(data.meals));

}


