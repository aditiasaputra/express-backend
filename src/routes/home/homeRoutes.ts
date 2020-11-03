import { Router } from 'express';
import HomeController from '../../controllers/home/home.controller';

class HomeRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    public config():void {
        this.router.get('/', HomeController.index);
    }
}

export default new HomeRoutes().router;