import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {
    async index(request: Request, respose: Response) {
        const totalConnections = await db('connections').count('* as total');

        const { total } = totalConnections[0];

        return respose.json({ total });
    }
    async create(request: Request, respose: Response) {
        const { user_id } = request.body;

        await db('connections').insert({ user_id });

        return respose.status(201).send();
    }
}