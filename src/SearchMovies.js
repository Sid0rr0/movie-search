import React, { useState } from "react";
import "./SearchMovies.css";

export default function SearchMovies() {
	const [query, setQuery] = useState("");
	const [movieList, setMovieList] = useState([]);

	const searchMovies = async e => {
		e.preventDefault();

		const url = `https://api.themoviedb.org/3/search/movie?api_key=4a35e6833d40ce9a4b7f8166352b242d&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();

			setMovieList(data.results);
			console.log(movieList);
		} catch (err) {
			console.error(err);
		}
	};
console.log(movieList);
	return (
		<>
			<div>
				<form className="form" onSubmit={searchMovies}>
					<label htmlFor="query" className="label"></label>
					<input
						className="input"
						type="text"
						name="query"
						placeholder="Write a name of a movie"
						value={query}
						onChange={e => setQuery(e.target.value)}
					/>
					<button className="button" type="submit">
						Submit
					</button>
				</form>
			</div>
			<div className="card-list">
				{movieList
					.filter(movie => movie.poster_path)
					.map(movie => (
						<div className="card" key={movie.id}>
							<img
								src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
								alt={movie.title + " poster"}
								className="card--image"
							/>
							<div className="card--content">
								<h3 className="card--title">{movie.title}</h3>
								<p><small>RELEASE DATE: {movie.release_date}</small></p>
								<p><small>RATING: {movie.vote_average}</small></p>
								<p className="card--desc">{movie.overview} </p>
							</div>
						</div>
					))}
			</div>
		</>
	);
}
