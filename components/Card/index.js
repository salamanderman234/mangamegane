import Image from "next/image";
import Link from "next/link";

export default function Card(props) {
	const { thumbnail, title, link, date } = props;
	return (
		<div className="card">
			<Link href={link}>
				<Image className="card-thumbnail" src={thumbnail} alt={title} />
			</Link>
			<div className="card-info">
				<h3 className="card-title">
					<Link href={link}>{title}</Link>
				</h3>
				<span className="card-date">{date}</span>
			</div>
		</div>
	);
}
