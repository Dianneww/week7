const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieYear = document.querySelector('.userInputYear');/*uus*/
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieYearToDisplay = document.querySelector('.favouriteMovieYear');/*uus*/

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let yearInStorage = localStorage.getItem('year');/*uus*/


if(titleInStorage && imageUrlInStorage && yearInStorage) {/*uus*/
movieTitleToDisplay.textContent = titleInStorage;
movieYearToDisplay.textContent = yearInStorage;/*uus*/
    container.style.backgroundImage = `linear-gradient(rgba(97, 97, 155, 0.597), rgba(0, 0, 0, 0.263)), 
    url('${imageUrlInStorage}')`;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let movieYearInput = movieYear.value;/*uus*/
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput);
    localStorage.setItem('year', movieYearInput);/*uus*/
    movieTitleToDisplay.textContent = movieTitleInput;
    movieYearToDisplay.textContent = movieYearInput;/*uus*/
    container.style.backgroundImage = `linear-gradient(rgba(97, 97, 155, 0.597), rgba(0, 0, 0, 0.263)),
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieYear.value = '';/*uus*/

});
