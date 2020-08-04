import React from "react";
import SearchMovies from "./SearchMovies";
import { MoviesProvider } from "./MoviesContext";
import MovieCard from './MovieCard'

function App() {
	return (
		<MoviesProvider>
			<div className="container">
				<h1 className="title">React Movie App</h1>
				<SearchMovies /> 
				<MovieCard />
			</div>
		</MoviesProvider>
	);
}

export default App;
