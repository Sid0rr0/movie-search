import React from "react";
import "./SearchMovies.css";
import { useMovieUpdate, useQuery, useQueryUpdate } from "./MoviesContext";

export default function SearchMovies() {
	const query = useQuery();
	const setQuery = useQueryUpdate();
	const searchMovies = useMovieUpdate();

	const submitForm = e => {
		e.preventDefault();
		searchMovies();
	}

	return (
		<div>
			<form className="form" onSubmit={submitForm}>
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
	);
}
