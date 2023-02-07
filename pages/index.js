import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Layout from "@/components/Layout";
import * as config from "@/config";
import Link from "next/link";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
	// metadata
	const title = config.app_name + " - " + config.tagline;
	const description = config.description;
	// data
	const { populars, updates } = props;
	const linkToManga = "/mangas";
	// mapping
	const popularCards = populars.map((e, i) => (
		<Card
			date={e.updateAt}
			title={e.title}
			thumbnail={e.thumbnail}
			link={`${linkToManga}/${e.slug}`}
		/>
	));
	const updateCards = updates.map((e, i) => (
		<Card
			date={e.updateAt}
			title={e.title}
			thumbnail={e.thumbnail}
			link={`${linkToManga}/${e.slug}`}
		/>
	));
	return (
		<Layout title={title} description={description}>
			<section className="section">
				<div className="section-header">
					<h2 className="section-title">Popular</h2>
					<Link className="more" href="/mangas?sort=popular">
						more
					</Link>
				</div>
				<div className="card-container">
					{" "}
					{popularCards.length > 0 ? (
						popularCards
					) : (
						<span>Tidak ada data !</span>
					)}
				</div>
			</section>
			<section className="section">
				<div className="section-header">
					<h2 className="section-title">Updates</h2>
					<Link className="more" href="/mangas">
						more
					</Link>
				</div>
				<div className="card-container">
					{updateCards.length > 0 ? (
						updateCards
					) : (
						<span>Tidak ada data !</span>
					)}
				</div>
			</section>
		</Layout>
	);
}

export async function getStaticProps() {
	return {
		props: {
			populars: [],
			updates: [],
		},
	};
}
