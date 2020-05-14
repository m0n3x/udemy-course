let numberOfFilms;
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}
start();
let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};


function rememberMyFilms() {
    for(let i=0; i<2; i++){
        let a = prompt('Один из последних просмотренных фильмов?');
        let b = +prompt('На сколько оцените его?');
            if(a != null && b !=null &&  a != '' && b != '' && a.length < 50 
            && b <= 10) {
                personalMovieDB.movies[a] = b;
            }   
            else{
                alert('Введите реальное название фильма и поставьте оценку от 1 до 10')
                i--;
            }
    };
}

rememberMyFilms();



function detectPersonalLevel() {
    if(personalMovieDB.count < 10 ) {
        alert('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if(personalMovieDB.count > 30) {
        alert('Вы киноман')
    } else { alert('Произошла ошибка')}
}
detectPersonalLevel();

function showMyDB(hidden){
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for(i=1; i<4; i++) {
        let a = prompt(`Ваш любимый жанр под номером ${i}?`);
        personalMovieDB.genres.push(a);
    }
}
writeYourGenres();