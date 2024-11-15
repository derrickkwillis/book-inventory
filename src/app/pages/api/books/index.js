import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
   
    const { method } = req;

    if (method === 'POST') {
        
        const { title, author, genre, publicationDate, isbn } = req.body;
    
        if (!title || !author || !genre || !publicationDate || !isbn) {
          return res.status(400).json({ error: "All fields are required" });
        }
    
        try {
            const newBook = await prisma.inventory.create({
                data: {
                    title,
                    author,
                    genre,
                    publicationDate: new Date(publicationDate), // Convert publication date to Date object
                    isbn,
                },
            });
    
          return res.status(200).json(newBook);

        } catch (error) {
          
            if (error.code === 'P2002') {
                return res.status(400).json({ error: "ISBN must be unique" });
            }
    
            return res.status(500).json({ error: "Failed to add book" });

        }

        

    }

    else if (method === 'GET') {

        const { title, author, genre, publicationDate } = req.query;

        try {
            // Find books in the Inventory table with optional filters
            const books = await prisma.inventory.findMany({
                where: {
                    title: title ? { contains: title } : undefined, // Filter by title if provided
                    author: author ? { contains: author } : undefined, // Filter by author if provided
                    genre: genre ? { contains: genre } : undefined, // Filter by genre if provided
                    publicationDate: publicationDate ? new Date(publicationDate) : undefined, // Filter by date if provided
                },
            });
      
            return res.status(200).json(books);

        } catch (error) {

            return res.status(500).json({ error: "Failed to retrieve books" });

        }

    }

    else {

        res.setHeader('Allow', ['POST', 'GET']); 
        res.status(405).end(`Method ${method} Not Allowed`);

    }

}