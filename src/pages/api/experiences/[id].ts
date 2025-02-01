import { NextApiRequest, NextApiResponse } from 'next';
import { experiences, experienceDetails } from '../../../content/writing';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src/data.ts');

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { id } = req.query;

  if (req.method === 'PUT') {
    const updatedExperience = req.body;
    const experienceIndex = experiences.findIndex((exp) => exp.id === id);
    if (experienceIndex !== -1) {
      experiences[experienceIndex] = updatedExperience;
      experienceDetails[id as string] = {
        title: updatedExperience.title,
        company: updatedExperience.company,
        duration: updatedExperience.duration,
        description: updatedExperience.description,
      };

      const updatedData = `
        export const experiences = ${JSON.stringify(experiences, null, 2)};
        export const experienceDetails = ${JSON.stringify(experienceDetails, null, 2)};
      `;

      fs.writeFileSync(dataFilePath, updatedData);
      res.status(200).json(updatedExperience);
    } else {
      res.status(404).end(); // Not Found
    }
  } else if (req.method === 'DELETE') {
    const experienceIndex = experiences.findIndex((exp) => exp.id === id);
    if (experienceIndex !== -1) {
      experiences.splice(experienceIndex, 1);
      delete experienceDetails[id as string];

      const updatedData = `
        export const experiences = ${JSON.stringify(experiences, null, 2)};
        export const experienceDetails = ${JSON.stringify(experienceDetails, null, 2)};
      `;

      fs.writeFileSync(dataFilePath, updatedData);
      res.status(204).end(); // No Content
    } else {
      res.status(404).end(); // Not Found
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};

export default handler;