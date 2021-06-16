import { LogIn, Register } from '../../interface/Auth';
import { axiosSingleton }  from '../index';
import { SurePromise } from '../../interface/SurePromise';
import { Profile } from '../../interface/Profile';
import { AxiosService } from '../axios/axiosService';

export default class Auth {

    private axiosService: AxiosService<Profile & LogIn, LogIn> = axiosSingleton

    //private axiosService = new AxiosService<Profile & Register, LogIn>()

    public async logIn(userForm: LogIn): Promise<SurePromise<Profile>> {
         //axiosService<Profile, LogIn>()
        //return await axiosService<Profile, LogIn>.instance.postData()(userForm, '/accounts/authenticate')
        return await this.axiosService.postData(userForm, '/accounts/authenticate')
    }

    public async register(registerForm: Register): Promise<SurePromise<LogIn>> {
        //const axiosService = axiosService<LogIn, Register>()
        return await this.axiosService.postData(registerForm,'/accounts/register')
    }
}
