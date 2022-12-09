// import des hook, feuille de style
import axios from 'axios';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import './Search.css'
import Home from './Home';

// Constante Search
const Search = () => {
	const [film, setFilm] = useState("");
    const [filmRecherche, setFilmRecherche] = useState([]);

    async function getFilmRecherche(film) {
        const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=5fe420feef9eea64542a356a0138133c&language=fr&query=${film}`);
        console.log("res", res.data);
        setFilmRecherche(res.data.results);
    }

    useEffect(() => {
        getFilmRecherche();
    }, []);

    function handleChange(e) {
        if (!e.target.value) {
          setFilm("");
          return;
        }
        setFilm(e.target.value)
        getFilmRecherche(film)
    }

    return(
        <><div>
            <Home/>
        </div>
        <section className="section">
            <center>
                <div className="container">
                    <div className="columns is-centered">

                        <form>
                            <div class="field">
                                <div class="control">
									<input onChange={handleChange} type='text' placeholder='Chercher un film' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div><br></br>
                <div class="container">
                    <div class="media-content">
                            <div class="content">
                                {filmRecherche.map((item) => {
                                    return (
										<div key={item?.id} className='al'>
											{/* Affiche le titre */}
											<h3>{item?.title}</h3>
											{/* Affiche le poster du film */}
											<img
												src={`https://image.tmdb.org/t/p/original${item?.poster_path}`}
												class='discover-poster'
												alt={`Poster de ${item?.title}`}></img>
											<br></br>
            								<br></br>
            								  <Link to={`/detail/${item?.id}`}>
            								    <button>Détails</button>
            								  </Link>
            								</div>
									);
                                })}
                            </div>
                    </div>
                </div>
            </center>

        </section></>
    );
}

export default Search;

