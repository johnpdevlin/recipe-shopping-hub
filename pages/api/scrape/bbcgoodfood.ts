/** @format */
import fs from 'fs';

import axios from 'axios';
import cheerio from 'cheerio';
import path from 'path';
import { NextApiRequest, NextApiResponse } from 'next';

function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		return res.status(405).json({ message: 'Method not allowed' });
	}
	if (req.method === 'POST') {
		const { url, title } = req.body;
		const filePath = path.join(process.cwd(), 'db', 'recipes.json');
		const fileData = fs.readFileSync(filePath);
		const data = JSON.parse(fileData.toString());
		data.push(req.body);
		fs.writeFileSync(filePath, JSON.stringify(data));
		res
			.status(201)
			.json({ message: 'Recipe added', recipe: { url: url, title: title } });
	} else {
		res.status(200).json({ name: 'Successful request' });
	}
}

export default handler;
