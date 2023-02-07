import Head from "next/head";
import Footer from "../Footer";
import Navbar from "../Navbar";
export default function Layout(props) {
	const { children, title, description, selected } = props;
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="content">
				<Navbar selected={selected} />
				<main className="main">{children}</main>
				<Footer />
			</div>
		</>
	);
}
