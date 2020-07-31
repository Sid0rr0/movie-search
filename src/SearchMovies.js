import React from "react";
import "./SearchMovies.css";

export default function SearchMovies() {
	return (
		<div>
			<form className="form" action="">
				<label htmlFor="query" className="label"></label>
				<input
					className="input"
					type="text"
					name="query"
					placeholder="Write a name of a movie"
				/>
				<button className="button" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
}
