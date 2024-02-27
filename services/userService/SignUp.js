import User from '../../models/User.js';
import * as bcrypt from 'bcrypt'
import { request } from 'express';


 class UserService {
    static async createUser(registrationRequest = request){
        try{
            const {username, password} = registrationRequest;

            if(!password){
                console.log('It started here');
                throw new Error('Password Is Required!');
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            registrationRequest.password = hashedPassword;

            const existingUser = await User.findOne({username});

            if(existingUser){
                console.log('User Already Exists');
                throw new Error('User Already Exists');
            }
            const newUser = new User({registrationRequest});
           return await newUser.save();
        

        } catch(error){
            console.error('Error Creating User', error);
            throw error;
            
        }

    }
};

export default UserService;