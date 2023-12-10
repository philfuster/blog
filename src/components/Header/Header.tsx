import { Navigation } from './components/Navigation';
import { Hamburger } from './components/Hamburger';
import './style.css';

export default function Header() {
	return (
		<header>
			<Hamburger />
			<Navigation />
		</header>
	);
}
