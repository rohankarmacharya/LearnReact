function MovieCard({title, year}){
    return(
        <div style={{border:"1px solid #b9b9b9ff", padding: "10px", margin: "5px"}}>
            <h3>{title}</h3>
            <p>Year: {year}</p>
        </div>
    );
}

export default MovieCard;