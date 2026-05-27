import styles from "./App.module.css";
import { MoviesScrolledView, Navbar } from "./sections/";

// const BASE_URL = "https://api.themoviedb.org/";
// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

function App() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />

      <MoviesScrolledView variant="popular" />
      <MoviesScrolledView variant="top_rated" />
      <MoviesScrolledView variant="upcoming" />
      <MoviesScrolledView variant="now_playing" />
    </div>
  );
}

export default App;
