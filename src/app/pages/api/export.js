import { PrismaClient } from '@prisma/client';
import { Parser } from 'json2csv';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    const { format } = req.query;
    
    try {

        const books = await prisma.inventory.findMany();

        if (format === 'csv') {

            const json2csvParser = new Parser();
            const csv = json2csvParser.parse(books);

            res.setHeader('Content-Type', 'text/csv');
            res.setHeader('Content-Disposition', 'attachment; filename=books.csv');
            return res.status(200).send(csv);

        } 
        
        else {

            res.setHeader('Content-Type', 'application/json');
            return res.status(200).json(books);
    
        }
    } catch (error) {

        return res.status(500).json({ error: "Failed to export books" });

    }

}
