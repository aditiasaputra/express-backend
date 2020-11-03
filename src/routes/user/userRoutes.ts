import { Router } from 'express';
import UserController from '../../controllers/user/user.controller';

class UserRoutes {
    public router: Router = Router();

    constructor() {
        this.config();
    }

    public config():void {
        this.router.get('/', UserController.getAll);
        this.router.get('/user', UserController.getByName);
        this.router.post('/add-user', UserController.addUser);
        this.router.put('/edit-user/:id', UserController.editUser);
        this.router.delete('/delete-user/:id', UserController.deleteUser);
    }
}

export default new UserRoutes().router;