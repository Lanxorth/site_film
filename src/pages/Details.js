import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";
import Home from "./Home";
import './Details.css';

const Details = () =>{

    let { id } = useParams();
    const [film, setFilm] = useState(null);


    async function getFilmDetail() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=5fe420feef9eea64542a356a0138133c&language=fr`);
        console.log("res", res.data);
        setFilm(res.data);
    }

    useEffect(() => {
        getFilmDetail();
    }, []);

    return(
        <><div>
            <Home/>
        </div>
        
        <section className="section">
                <div className="film">
                    <div className="media">
                        <div className="media-left">
                            <img src={`http://image.tmdb.org/t/p/w300${film?.poster_path}`} alt="Affiche"></img> 
                        </div>
                        <div className="media-content">
                            <div className="content">
                                <h1 className="title is-1">{film?.title}</h1>
                            </div>
                            <p><strong>Note: </strong>{film?.vote_average}</p>
                            <p><strong>Nombre de vote: </strong>{film?.vote_count}</p>
                            <p><strong>Date de sortie: </strong>{film?.release_date}</p>
                            <p><strong>Popularité: </strong>{film?.popularity}</p>
                            <p id="resume"><strong>Résume: </strong>{film?.overview }</p>
                        </div>
                    </div>
                </div>
        </section></>
    );
}

export default Details;