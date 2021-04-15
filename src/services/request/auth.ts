import { LogIn, Register } from '../../interface/Auth';
import { AxiosService } from '../index';
import { SurePromise } from '../../interface/SurePromise';
import { Profile } from '../../interface/Profile';

export default class Auth {

    public static async logIn(userForm: LogIn): Promise<SurePromise<Profile>> {
        const axiosService = new AxiosService<Profile, LogIn>()
        return await axiosService.postData(userForm, '/accounts/authenticate')
    }

    static async register(registerForm: Register): Promise<SurePromise<LogIn>> {
        const axiosService = new AxiosService<LogIn, Register>()
        return await axiosService.postData(registerForm,'/accounts/register')
    }
}
