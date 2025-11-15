import MovieCard from "./MovieCard";
function MovieList() {
    const movies = [
        { title: "Interstellar", year:2000},
        { title: "Inception", year:2014}
    ];

    return (
        <div>
        <h2>Movie List</h2>
        {movies.map((m,i) => (
            <MovieCard key={i} title={m.title} year={m.year}/>
        ))}
        </div>
    );
}
export default MovieList;