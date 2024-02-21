import { request, response } from 'express';
import UserService from '../../services/userService/SignUp.js';


class UserController {
    
    static async createUser(req = request, res = response){
        
        try{
            const savedUser = await UserService.createUser(req);

            res.status(201).json(savedUser);            
            
        } catch(error){
            console.log('Failed To Create User', error)
            res.status(500).json({error: error.message});

        }
}
};

export default UserController;