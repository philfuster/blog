export interface BlogPostProps {
	title: string;
	url: string;
}

export default function BlogPost(props: BlogPostProps) {
	const { url, title } = props;

	return (
		<li>
			<a href={url}>{title}</a>
		</li>
	);
}
