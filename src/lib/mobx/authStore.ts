/* Core */
import { makeAutoObservable } from 'mobx';

class AuthStore {
    private message = '';
    private authToken = '';

    constructor() {
        makeAutoObservable(this, {}, {
            autoBind: true,
        });
    }

    resetError() {
        this.message = '';
    }

    get errorMessage() {
        return this.message;
    }

    setError(newErrorMessage: string) {
        this.message = newErrorMessage;
    }

    setToken(newToken: string) {
        this.authToken = newToken;
    }

    get token() {
        return this.authToken;
    }
}

export { AuthStore };
