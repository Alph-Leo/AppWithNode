import User from "../../models/User";
import { RegistrationRequest } from "../../requests/userRequest/SignUpRequest";
import * as bcrypt from 'bcrypt'


export class UserService {
    static async createUser(registrationRequest){
        try{
            const {username, password} = registrationRequest;
            const hashedPassword = await bcrypt.hash(password, 10);

            const existingUser = await User.findOne({username});

            if(existingUser){
                console.log('User Already Exists');
                throw new Error('User Already Exists');
            }
            const newUser = new User({username, hashedPassword});
            await newUser.save();
            console.log('Registration Successfull');

        } catch(error){
            console.log('Error Creating User', error);
            throw error;
        }

    }
}