import styles from "./App.module.css";
import { MoviesScrolledView, Navbar } from "./sections/";
import { getQuery } from "./redux/slices/searchSlice";

function App() {
  return (
    <div className={styles.mainContainer}>
      <Navbar />

      <>
        <MoviesScrolledView variant="popular" />
        <MoviesScrolledView variant="top_rated" />
        <MoviesScrolledView variant="upcoming" />
        <MoviesScrolledView variant="now_playing" />
      </>
    </div>
  );
}

export default App;
