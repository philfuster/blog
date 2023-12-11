import { Social, type SocialProps } from '../Social';
import './styles.css';

const gitHubCredentials: SocialProps = {
	platform: 'GitHub',
	username: 'philfuster',
	imageUrl: '/github-mark.svg',
};

const linkedInCredentials: SocialProps = {
	platform: 'LinkedIn',
	username: 'philip-fuster',
	imageUrl: '/In-Blue-96.png',
	siteUrl: 'https://www.linkedin.com/in/philip-fuster/',
};

export default function Footer() {
	return (
		<footer>
			<Social {...gitHubCredentials} />
			<Social {...linkedInCredentials} />
		</footer>
	);
}
