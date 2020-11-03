import { Request, Response } from 'express';

class HomeController {

    /**
     * index
     */
    public async index( req: Request, res: Response ) {
        res.status(200).send(`Hello from home controller with method index!`);
    }

}

// export const homeController = new HomeController();
export default new HomeController();