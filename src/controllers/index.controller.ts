import { Request, Response } from 'express';

class IndexController {
    /**
     * index
     */
    public async index(req: Request, res: Response) {
        res.status(200).send('Hello from index controller!');
    }

    /**
     * about
     */
    public about(req: Request, res: Response) {
        res.status(200).send('Hello from index controller with method about!');
    }
}

export default new IndexController();