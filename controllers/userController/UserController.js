import { request, response } from "express";
import RegistrationRequest from "../../requests/userRequest/SignUpRequest";
import { UserService } from "../../services/userService/SignUp";

const req = request
const res = response

export class UserController {
    
    static async createUser(){
        
        try{
            const userRequest = req.body;   
            const savedUser = await UserService.createUser(userRequest);

            res.status(201).json(savedUser)
            
        } catch(error){
            res.status(500).json({error: error.message})

        }
    }
}