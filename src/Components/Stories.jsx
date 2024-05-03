import { Link } from "react-router-dom";

const stories = [
	{
		id: 1,
		country: "Espagne",
		title: "Jako est au PMU de Madrid",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt praesentium possossimus sunt!",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
	{
		id: 2,
		country: "Japon",
		title: "J'ai trouvé Jako dans un macDO là-bas !!",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ios praesentiu praesentium poss praesentium possraesentium posssimus sunt! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius natus deleniti magni recusandae accusamus expedita perferendis, nam cum cupiditate labore impedit mollitia beatae?",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
	{
		id: 3,
		country: "Italie",
		title: "Jako s'est mis arnaquer à l'italienne !",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt praesenticidunt praesenticidunt praesenticidunt praesenticidunt praesenticidunt praesentium possimus sunt!",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
	{
		id: 4,
		country: "France",
		title: "Jako a pris un bain de foule à Paris",
		text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt praesentium possossimus sunt!",
		img_src: `/src/assets/kebab-paysage.webp`,
	},
];

function Stories() {
	return (
		<main>
			<h2>STORY PAGE</h2>
			{stories.map((story) => (
				<article key={story.id}>
					<h3>{story.title}</h3>
					<Link to={`/stories/${story.id}`}>Read more</Link>
				</article>
			))}
		</main>
	);
}

export default Stories;
