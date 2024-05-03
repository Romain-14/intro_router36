import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<h1>Intro&apos; Router</h1>
			<nav>
                <Link to="/">Home</Link>
                <Link to="/stories">Stories</Link>
            </nav>
		</header>
	);
}

export default Header;