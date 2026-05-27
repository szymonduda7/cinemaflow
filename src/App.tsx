import { useEffect, useState } from "react";
import styles from "./App.module.css";
import axios from "axios";
import secrets from "../secret.json";
import { Navbar } from "./sections/";

const BASE_URL = "https://api.themoviedb.org/";

function App() {
  const [data, setData] = useState();

  async function fetchData(url?: string) {
    return await axios.get(`${BASE_URL}${url}?api_key=${secrets.apiKey}`, {});
  }

  useEffect(() => {
    let data;

    (async () => {
      data = await fetchData("3/movie/11");
      setData(data.data);
    })();
  }, []);

  data && console.log(data);

  return (
    <div className={styles.mainContainer}>
      <Navbar />
    </div>
  );
}

export default App;
