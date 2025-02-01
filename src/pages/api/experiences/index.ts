import { NextApiRequest, NextApiResponse } from 'next';
import { experiences, experienceDetails } from '../../../content/writing';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data.ts');

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    res.status(200).json({ experiences, experienceDetails });
  } else if (req.method === 'POST') {
    const newExperience = req.body;
    experiences.push(newExperience);
    experienceDetails[newExperience.id] = {
      title: newExperience.title,
      company: newExperience.company,
      duration: newExperience.duration,
      description: newExperience.description,
    };

    const updatedData = `
      export const experiences = ${JSON.stringify(experiences, null, 2)};
      export const experienceDetails = ${JSON.stringify(experienceDetails, null, 2)};
    `;

    fs.writeFileSync(dataFilePath, updatedData);
    res.status(201).json(newExperience);
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;