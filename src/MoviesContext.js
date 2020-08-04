import React, { useContext, useState } from 'react';

const MoviesContext = React.createContext();
const MoviesUpdateContext = React.createContext();
const QueryContext = React.createContext();
const QueryUpdateContext = React.createContext();

export function useMovies() {
	return useContext(MoviesContext);
}

export function useMovieUpdate() {
	return useContext(MoviesUpdateContext);
}

export function useQuery() {
	return useContext(QueryContext);
}

export function useQueryUpdate() {
	return useContext(QueryUpdateContext);
}

export function MoviesProvider({ children }) {
	const [movies, setMovies] = useState([]);
	const [query, setQuery] = useState("");

	const searchMovies = async () => {

		const url = `https://api.themoviedb.org/3/search/movie?api_key=4a35e6833d40ce9a4b7f8166352b242d&language=en-US&query=${query}&page=1&include_adult=false`;

		try {
			const res = await fetch(url);
			const data = await res.json();

			setMovies(data.results);
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<MoviesContext.Provider value={movies}>
			<MoviesUpdateContext.Provider value={searchMovies}>
				<QueryContext.Provider value={query}>
					<QueryUpdateContext.Provider value={setQuery}>
						{children}
					</QueryUpdateContext.Provider>
				</QueryContext.Provider>
			</MoviesUpdateContext.Provider>
		</MoviesContext.Provider>
	)
}
