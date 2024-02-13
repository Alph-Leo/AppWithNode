import User from '../../models/User';
import * as bcrypt from 'bcrypt'


 class UserService {
    static async createUser(registrationRequest){
        try{
            const {username, password} = registrationRequest;

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
            console.log('Error Creating User', error);
            throw error;
        }

    }
};

export default UserService;