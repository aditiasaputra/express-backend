import { Router } from 'express';
import IndexController from '../controllers/index.controller';
class IndexRoutes {

    public router: Router = Router();

    constructor() {
        this.config();
    }

    public config(): void {
        this.router.get('/', IndexController.index);
        this.router.get('/about', IndexController.about);
    }
}

export default new IndexRoutes().router;