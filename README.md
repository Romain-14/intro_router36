# REACT-ROUTER-DOM

Va nous permettre de mettre en place un système de route interne à notre application react (avec pas mal de fonctionnalités).


## Une base
Mise en place d'un router, avec 3 routes définis
- <Home /> et <Stories /> seront accessibles depuis la navigation du header
- <Story /> sera accessible depuis un lien d'un article

Le composant dont l'url va correspondre va être monté dans le DOM à l'emplacement du Composant <Routes /> ; ici, entre le <header> et le <footer>

<BrowserRouter></BrowserRouter> est le Composant parent responsable de la navigation de l'app, il va permettre à l'app de communiquer avec des Composant spécifiques
<Routes></Routes> permet de définir les routes de notre application.
<Route /> permet de définir une route.

`:id` est un slug, un paramètre qui va contenir une valeur dynamique.
Cette valeur, on va la récupérer avec un hook de react-router-dom dans le Composant Story (voir plus bas).

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
       
		<BrowserRouter>
            <Header />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="stories" element={<Stories />} />
				<Route path="stories/:id" element={<Story />} />
			</Routes>

            <Footer />

		</BrowserRouter>
	);
}
```

## La navigation 

Utilisation du composant Link de react-router-dom qui est un <a> en arrière-plan.

<Link></Link> permets de définir un lien (<a>).

`to` est une prop, qui va permettre de définir la destination du lien.
ça va être le `href` de notre router. 
Il va chercher une correspondance dans l'ensemble de Routes définit ici dans le Composant App.jsx.

```jsx
// importer le composant
import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1>Intro&apos; Router</h1>
			<nav>
                {/* définir les liens avec le composant Link */}
                <Link to="/">Home</Link>
                <Link to="/stories">Stories</Link>
            </nav>
		</header>
	);
}
```

### 

Le Composant ci-dessous est monté/chargé quand on clique sur un lien d'un article et que le router oriente ici.
Il va transmettre le paramètre définit à l'emplacement du slug (avec les `:`) *(fonctionnement identique dans notre routeur avec node/express)*

```jsx
// import du hook
import { useParams } from "react-router-dom";

function Story() {
    // utilisation du hook
    // va récupérer les slugs pour les mettre dans un objet ici appelé `params`
	const params = useParams();
	console.log(params);

	return (
        // log du paramètre dans l'url récupéré avec le hook plus haut
        <h2>Story n°{params.id}</h2>
    );
}

export default Story;
```

Documentation officiel
https://reactrouter.com/en/main

