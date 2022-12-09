// import des hook, feuille de style
import axios from "axios";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import "./Discover.css";
import Home from "./Home";

function Discover () {
  const [discoverList, setDiscoverList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const resultat = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&page=1&language=fr-FR`
      );
      setDiscoverList(resultat.data.results);
    };

    getData();
  }, []);

  return (
    <div>
      <Home/>
      <div className="discover-all">
        {discoverList.map((discover) => {
          return (
            <div key={discover.id} className="al">
              <h3>{discover.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/original${discover.poster_path}`}
                alt="poster" className="poster"
              />
              <br></br>
              <br></br>
              <Link to={`/detail/${discover.id}`}>
                <button>Détails</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Discover;

