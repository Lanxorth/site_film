// import des hook, feuille de style
import axios from 'axios';
import './Tendances.css';
import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import Home from './Home';

// Constante Discover
const Tendances = () => {
	// Créé une liste vide "trendingListFiltered"
	const [trendingList, setTrendingList] = useState([]);

	// Créé une fonction asynchrone getData()
	async function getData() {
		// Boucle récupérant 25 pages
		for (var counter = 1; counter < 25; counter++) {
			// Récupère les éléments de l'API dans la constante recherche
			const res = await axios.get(
				`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}&page=${counter}&language=fr-FR` //
			);
			console.log('res', res.data);
			// Ajoute les éléments de recherche à setTrendingList
			setTrendingList((setTrendingListFiltered) =>
				setTrendingListFiltered.concat(...res.data.results)
			);
		}
	}

	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<Home/>
			<div className='trending-all'>
				{/* Obtient les éléments de la liste */}
				{trendingList.map((trending) => {
					return (
						<div key={trending.id} className='al'>
							{/* Affiche le titre */}
							<h3>
								{trending.title} {trending.name}
							</h3>
							{/* Affiche le poster du film */}
							<img
								src={`https://image.tmdb.org/t/p/original${trending.poster_path}`}
								class='trending-poster'
								alt={`Poster de ${trending.title}`}></img>
							<br></br>
            				<br></br>
            				<Link to={`/detail/${trending.id}`}>
            				  <button>Détails</button>
            				</Link>
            				</div>
					);
				})}
			</div>
		</div>
	);
};

// Exporte la constante Tendances
export default Tendances;
