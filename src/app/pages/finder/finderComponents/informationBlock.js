"use client"


export default function InformationBlock ({information}){
    const {
        Title: name,
        Year: year,
        Runtime: runtime,
        Plot: plot,
        Genre: genre,
        Director: director,
        Actors: actors,
        Language: language,
        Country: country,
        Awards: awards,
        Poster: poster,
        Metascore: metascore,
        imdbRating: imdbRating,
        imdbVotes: imdbVotes,
        imdbID: imdbID,
        Type: type,
        DVD: dvdRelease,
        BoxOffice: boxOffice,
        Production: production,
        Website: website
      } = information;
    
      if (name) {
        return (
          <div>
            {poster && <img src={poster} alt={`Poster for ${name}`} />}
            <p>Title: {name}</p>
            <p>Year: {year}</p>
            <p>Runtime: {runtime}</p>
            <p>Plot: {plot}</p>
            <p>Genre: {genre}</p>
            <p>Director: {director}</p>
            <p>Actors: {actors}</p>
            <p>Language: {language}</p>
            <p>Country: {country}</p>
            <p>Awards: {awards}</p>
            <p>Metascore: {metascore}</p>
            <p>IMDB Rating: {imdbRating}</p>
            <p>IMDB Votes: {imdbVotes}</p>
            <p>IMDB ID: {imdbID}</p>
            <p>Type: {type}</p>
            <p>DVD Release: {dvdRelease}</p>
            <p>Box Office: {boxOffice}</p>
            <p>Production: {production}</p>
            <p>Website: {website}</p>
          
          </div>
        );
      } else {
        return (
          <div>
            <p>Ничего нет</p>
          </div>
        );
      }

}