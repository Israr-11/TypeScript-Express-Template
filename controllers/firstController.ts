import { Request, Response } from 'express';
import { FirstService } from '../services/firstService';

const firstService = new FirstService();

export const getFirst = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await firstService.displayHelloWorld();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong' });
    }
};
