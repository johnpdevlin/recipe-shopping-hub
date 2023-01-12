/** @format */

import { buildRecipePath, extractRecipeData } from '../api/recipe/helper';

function Recipes(props: any): JSX.Element {
	return <>{props.recipes.map((r) => r.title)}</>;
}

export async function getStaticProps() {
	const filePath = buildRecipePath();
	const data = extractRecipeData(filePath);

	return {
		props: {
			recipes: data,
		},
		revalidate: 200, // In seconds
	};
}

export default Recipes;
