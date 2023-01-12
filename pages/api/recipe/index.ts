/** @format */
import fs from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import { buildRecipePath, extractRecipeData } from './helper';

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const filePath = buildRecipePath();
		const data = extractRecipeData(filePath);
		res.status(200).json({ message: 'Recipes retrieved', recipes: data });
	}
	if (req.method === 'POST') {
		// CHECK IF URL EXISTS IN DB
		const { url } = req.body;
		const filePath = buildRecipePath();
		const data = extractRecipeData(filePath);
		data.push(url);
		fs.writeFileSync(filePath, JSON.stringify(data));
		res.status(201).json({ message: 'Recipe added', url: url });
	} else {
		res.status(200).json({ name: 'Successful request' });
	}
}

export default handler;
