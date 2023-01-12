/** @format */
import path from 'path';
import fs from 'fs';

export function buildRecipePath() {
	return path.join(process.cwd(), 'db', 'recipes.json');
}

export function extractRecipeData(filePath) {
	const fileData = fs.readFileSync(filePath);
	const data = JSON.parse(fileData.toString());
	return data;
}
