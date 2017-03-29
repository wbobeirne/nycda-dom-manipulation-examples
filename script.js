// Grab our elements
var title = document.getElementById("title");
var movies = document.getElementsByClassName("movies-movie");

// Set our title to the number of movies
title.innerHTML = "My Top " + movies.length + " Space Movies";

// Add the index to our movies
for (var i = 0; i < movies.length; i++) {
  var movieTitle = movies[i].innerHTML;
  movies[i].innerHTML = "#" + (i + 1) + ": " + movieTitle;
}

// Alert on click or mouse enter
function onClick(event) {
  alert(event.target.innerText);
}

title.addEventListener("mouseenter", onClick);
movies[0].addEventListener("click", onClick);
