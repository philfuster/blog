import { Navigation, Hamburger } from './components';
import './style.css';

export default function Header() {
	return (
		<header>
			<Hamburger />
			<Navigation />
		</header>
	);
}
