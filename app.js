
const numberOfFilms = +promt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actros: {},
    genres: [],
    privat: false
}

const a = promt('Один из последних просмотренных фильмов?', ''),
      b = promt('На сколько оцените вы его?', ''),
      c = promt('Один из последних просмотренных фильмов?', ''),
      d = promt('На сколько оцените вы его?', '');


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console .log(personalMovieDB);


