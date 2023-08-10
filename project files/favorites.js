// favorites.js

// Get a reference to all the "Add to Favorites" buttons
const addToFavoritesButtons = document.querySelectorAll('.btn-add-to-favorites');

// Attach a click event listener to each button
addToFavoritesButtons.forEach(button => {
    button.addEventListener('click', addToFavorites);
});

// Function to handle adding to favorites
function addToFavorites(event) {
    event.preventDefault();
    // You can customize this function to perform actions when the button is clicked,
    // such as adding the product to the user's favorites list or changing the button appearance.

    // Example: Toggle a class to change the button appearance
    if (this.classList.contains('added-to-favorites')) {
        this.classList.remove('added-to-favorites');
    } else {
        this.classList.add('added-to-favorites');
    }
}