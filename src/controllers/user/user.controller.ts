import { NextFunction, Request, Response } from 'express';
import { parse } from 'path';

class UserController {

    /**
     * getAll
     */
    public async getAll(req: Request, res: Response) {
        const users: any[]= [
            {id: 1,name: 'Aditia',age: 24},
            {id: 2,name: 'John Doe',age: 30},
            {id: 3,name: 'William Smith',age: 43},
        ];

        return res.json(users);
    }

    /**
     * addUser
     */
    public addUser(req: Request, res: Response, next: NextFunction) {
        const {name, age} = req.body;
        if (req.method === 'POST' && name && age) {
            const users: any[]= [
                {id: 1,name: 'Aditia',age: 24},
                {id: 2,name: 'John Doe',age: 30},
                {id: 3,name: 'William Smith',age: 43},
            ];
            // console.log(name);

            users.push({id:users.length + 1, name, age});

            return res.json(users);
        }
    }

    /**
     * getByName
     */
    public getByName(req: Request, res: Response) {
        const name = req.query.name;

        const users: any[]= [
            {id: 1,name: 'Aditia',age: 24},
            {id: 2,name: 'John Doe',age: 30},
            {id: 3,name: 'William Smith',age: 43},
        ];

        for (const user of users) {
            if (user.name !== name) {
                return res.json({message: 'Error!'});
            } else {
                return res.json({message: `My name is ${user.name} and my age is ${user.age}`});
            }
        };
    }

    /**
     * editUser
     */
    public editUser(req: Request, res: Response) {
        if (req.method === 'POST') {
            const id = parseInt(req.params.id, 10);
            const {name, age} = req.body;
            const users: any[]= [
                {id: 1,name: 'Aditia Saputra',age: 24},
                {id: 2,name: 'John Doe',age: 30},
                {id: 3,name: 'William Smith',age: 43},
            ];

            users.forEach((v, i, a) => {
                if (v.id === id) {
                    v.id = id;
                    v.name = name;
                    v.age = age;
                    return res.json({message: `Update user success!`, users});
                };
            });
        };
    }

    /**
     * deleteUser
     */
    public deleteUser(req: Request, res: Response) {
        if (req.method === 'DELETE') {
            const id = parseInt(req.params.id, 10);

            const users: any[]= [
                {id: 1,name: 'Aditia Saputra',age: 24},
                {id: 2,name: 'John Doe',age: 30},
                {id: 3,name: 'William Smith',age: 43},
            ];

            users.forEach((v, i, a) => {
                if (v.id === id) {
                    // console.log(i);
                    users.splice(i, 1);
                    return res.json({message: `Delete user success!`, users});
                };
            });
        }
    }
}

export default new UserController();