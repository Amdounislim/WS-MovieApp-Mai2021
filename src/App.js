import React, { useState } from "react"
import { moviesData } from "./components/MoviesData"
import './App.css';
import MoviesList from "./components/MoviesList";
import AddMovie from "./components/AddMovie/AddMovie";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [searchInput, setSearchInput] = useState("")
  const [searchRate, setSearchRate] = useState(0)

  const AddNewMovie = (x) => { setMovies([...movies, x]) }


  return (
    <div className="App">
      <NavBar setSearchInput={setSearchInput} setSearchRate={setSearchRate} searchRate={searchRate} />
      <MoviesList movies={movies.filter(el =>
        el.rating >= searchRate &&
        el.name.toUpperCase().includes(searchInput.toUpperCase().trim()))} />
      <AddMovie AddNewMovie={AddNewMovie} />
    </div>
  );
}

export default App;
