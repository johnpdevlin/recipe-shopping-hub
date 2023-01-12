/** @format */
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

import { buildRecipePath, extractRecipeData } from './helper';

function handler(req: NextApiRequest, res: NextApiResponse) {
	const id = req.query.feedbackId;
	const filePath = buildRecipePath();
	const data = extractRecipeData(filePath);
	const selectedRecipe = data.find((recipe) => recipe.id === id);

	if (req.method === 'DELETE') {
		const filteredRecipes = data.filter((recipe) => recipe.id !== id);
		fs.writeFileSync(filePath, JSON.stringify(filteredRecipes));
		res.status(200).json({ message: 'Recipe deleted successfully' });
	}
	if (req.method === 'PUT') {
		res.status(200).json({ message: 'Functionality not yet developed' });
	} else {
		// DEFAULT GET GET
		res.status(200).json({
			message: 'Recipe retrieved successfully',
			recipe: selectedRecipe,
		});
	}
}

export default handler;
