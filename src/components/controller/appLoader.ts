import Loader from './loader';
import { Api, Links } from '../app/types';

class AppLoader extends Loader {
    constructor() {
        super(Links.local, {
            apiKey: Api.key2,
        });
    }
}

export default AppLoader;
