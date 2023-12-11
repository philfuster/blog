export interface SocialProps {
	platform: string;
	username: string;
	imageUrl?: string;
	siteUrl?: string;
}

export default function Social(props: SocialProps) {
	const { imageUrl, platform, siteUrl, username } = props;

	return (
		<div>
			<a
				href={siteUrl == null ? `https://${platform}.com/${username}/` : siteUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				{imageUrl != null ? (
					<img style={{ width: '45px', height: '45px' }} src={imageUrl} alt={platform} />
				) : (
					platform
				)}
			</a>
		</div>
	);
}
