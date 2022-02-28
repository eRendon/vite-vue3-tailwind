import {SurePromise} from "../interface/SurePromise";
import {AxiosResponse} from "axios";

const surePromise = <T>(promise: Promise<AxiosResponse>): Promise<SurePromise<T>> => (
    promise
        .then((result) => {
            const { data } = result
            return {
                success: true,
                data
            }
        })
        .catch(error => {
            console.log('surePromise', error.response)
            const { data } = error.response
            return Promise.resolve({success: false, data})
        })
);

export default surePromise;
