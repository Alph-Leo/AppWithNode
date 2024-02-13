import User from "../../models/User";
//const {RegistrationRequest} = require('../../requests/userRequest/SignUpRequest')
import * as bcrypt from 'bcrypt'


 class UserService {
    static async createUser(RegistrationRequest){
        try{
            
            const hashedPassword = await bcrypt.hash(password, 10);
           RegistrationRequest.password = hashedPassword;

            const existingUser = await User.findOne({username : RegistrationRequest.username});

            if(existingUser){
                console.log('User Already Exists');
                throw new Error('User Already Exists');
            }
            const newUser = new User({RegistrationRequest});
           return await newUser.save();
        

        } catch(error){
            console.log('Error Creating User', error);
            throw error;
        }

    }
};

export default UserService;