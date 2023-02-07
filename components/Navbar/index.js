import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAndroid } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navbar(props) {
	const { selected } = props;
	return (
		<nav className="navigation">
			<h1 title="Mangamegane - asiap">
				<Link href="/" className="navigation-brand"></Link>
			</h1>
			<form className="navigation-search" action="/mangas">
				<input
					className="navigation-search-input"
					type="text"
					name="q"
				/>
				<button className="navigation-search-button" type="submit">
					<FontAwesomeIcon icon={faMagnifyingGlass} />
				</button>
			</form>
			<ul className="navigation-items-list">
				<li className="navigation-item">
					{selected == "mangas" ? (
						<span className="navigation-item-selected">List</span>
					) : (
						<Link href="/mangas" className="navigation-item-link">
							List
						</Link>
					)}
				</li>
				<li className="navigation-item">
					{selected == "popular" ? (
						<span className="navigation-item-selected">
							Popular
						</span>
					) : (
						<Link
							href="/mangas?sort=popular"
							className="navigation-item-link"
						>
							Popular
						</Link>
					)}
				</li>
				<li className="navigation-item">
					{selected == "tags" ? (
						<span className="navigation-item-selected">Tags</span>
					) : (
						<Link href="/tags" className="navigation-item-link">
							Tags
						</Link>
					)}
				</li>
			</ul>
		</nav>
	);
}
