// import des hook, feuille de style
import logo from './logo.png';
import './Home.css';
import { Link } from 'react-router-dom';

// Fonction Home
function Home() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<br></br>
				<Link to='/'><button>Accueil</button></Link>
				<Link to='/Tendances'><button>Tendances</button></Link>
				<Link to='/Discover'><button>Découvrir</button></Link>
				<Link to='/Search'><button>Rechercher</button></Link>
			</header>
		</div>
	);
}

// Exporte la fonction Home
export default Home;
