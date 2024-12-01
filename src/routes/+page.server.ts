import type { PageServerLoad } from './$types';
import * as fs from 'fs';
import path from 'path';

export const load: PageServerLoad = ({ params }) => {
  // Path to JSON file
  const filePath = path.resolve('src/lib/data/rules.json')

  // Read and parse JSON file
  const rules = JSON.parse(fs.readFileSync(filePath, 'utf8'))

  return {
    rules
  };
};